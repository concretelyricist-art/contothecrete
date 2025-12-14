import { json } from '@sveltejs/kit';
import { getSquareClient } from '$lib/server/squareClient.server';
import { env } from '$env/dynamic/private';

const { SQUARE_LOCATION_ID } = env;

function createIdempotencyKey() {
	return crypto.randomUUID();
}

function sanitize(obj: any) {
	return JSON.parse(
		JSON.stringify(obj, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
	);
}

function getOrdersApi(client: any) {
	const orders = client?.ordersApi ?? client?.orders;
	if (!orders) throw new Error('Square Orders API not found on client (ordersApi/orders missing)');
	const createOrder = orders.createOrder ?? orders.create;
	if (typeof createOrder !== 'function') {
		const keys = Object.keys(orders);
		throw new Error(
			`Square Orders API found but no create function (checked createOrder/create). Keys: ${keys.join(', ')}`
		);
	}
	return createOrder.bind(orders);
}

function getPaymentsApi(client: any) {
	const payments = client?.paymentsApi ?? client?.payments;
	if (!payments)
		throw new Error('Square Payments API not found on client (paymentsApi/payments missing)');
	const createPayment = payments.createPayment ?? payments.create;
	if (typeof createPayment !== 'function') {
		const keys = Object.keys(payments);
		throw new Error(
			`Square Payments API found but no create function (checked createPayment/create). Keys: ${keys.join(', ')}`
		);
	}
	return createPayment.bind(payments);
}

export async function POST(event) {
	const { request, fetch } = event;
	const square = getSquareClient();
	const locationId = env.SQUARE_LOCATION_ID;
	try {
		const { token, amount, items, postal } = await request.json();

		if (!Array.isArray(items) || items.length === 0) {
			return json({ ok: false, error: 'No items provided' }, { status: 400 });
		}

		for (const item of items) {
			if (item.provider === 'square' && !item.catalogObjectId) {
				return json(
					{ ok: false, error: 'Missing catalogObjectId for one or more Square items' },
					{ status: 400 }
				);
			}
		}

		const idempotencyKey = createIdempotencyKey();
		const createOrder = getOrdersApi(square);
		const createPayment = getPaymentsApi(square);

		const orderResponse = await createOrder({
			idempotencyKey,
			order: {
				locationId: SQUARE_LOCATION_ID,
				lineItems: items.map((item: any) => {
					if (item.provider === 'square') {
						return {
							catalogObjectId: item.catalogObjectId,
							quantity: String(item.quantity),
							basePriceMoney: {
								amount: BigInt(Math.round(item.price * 100)),
								currency: 'USD'
							}
						};
					} else {
						return {
							name: item.name,
							quantity: String(item.quantity),
							basePriceMoney: {
								amount: BigInt(Math.round(item.price * 100)),
								currency: 'USD'
							}
						};
					}
				})
			}
		});

		if (orderResponse?.errors) {
			return json({ ok: false, error: sanitize(orderResponse.errors) }, { status: 400 });
		}

		const orderId =
			orderResponse?.result?.order?.id ??
			orderResponse?.order?.id ??
			orderResponse?.data?.order?.id;

		if (!orderId) {
			return json(
				{
					ok: false,
					error: 'Order creation succeeded but no orderId present',
					raw: sanitize(orderResponse)
				},
				{ status: 500 }
			);
		}

		const paymentResponse = await createPayment({
			idempotencyKey: createIdempotencyKey(),
			sourceId: token,
			locationId: SQUARE_LOCATION_ID,
			amountMoney: {
				amount: BigInt(amount),
				currency: 'USD'
			},
			orderId,
			note: items.map((i: any) => `${i.name} (${i.size}) x${i.quantity}`).join(', '),
			shippingAddress: {
				addressLine1: postal.addressLine1,
				addressLine2: postal.addressLine2,
				locality: postal.city,
				administrativeDistrictLevel1: postal.state,
				postalCode: postal.zip,
				country: postal.country
			}
		});

		if (paymentResponse?.errors) {
			return json({ ok: false, error: sanitize(paymentResponse.errors) }, { status: 400 });
		}

		const payment =
			paymentResponse?.result?.payment ??
			paymentResponse?.payment ??
			paymentResponse?.data?.payment;

		if (!payment) {
			return json(
				{ ok: false, error: 'Payment creation succeeded but no payment object present' },
				{ status: 500 }
			);
		}

		const kunakiItems = items.filter((i: any) => i.provider === 'kunaki');
		let kunakiResult = null;

		if (kunakiItems.length > 0) {
			const response = await fetch('/api/kunaki/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: kunakiItems, postal })
			});
			kunakiResult = await response.json();
		}

		return json({
			ok: true,
			payment: sanitize(payment),
			items,
			kunakiResult
		});
	} catch (err: any) {
		console.error('CHECKOUT EXCEPTION (catch block):', err);
		return json(
			{
				ok: false,
				error: err?.message ?? 'Unknown server error',
				full: sanitize(err)
			},
			{ status: 500 }
		);
	}
}
