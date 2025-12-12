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
		console.log('1. Parsing request body…');
		const { token, amount, items, postal } = await request.json();
		console.log('2. Request body parsed:', { token, amount, items, postal });

		if (!Array.isArray(items) || items.length === 0) {
			console.log('3. No items provided, aborting.');
			return json({ ok: false, error: 'No items provided' }, { status: 400 });
		}

		for (const item of items) {
			if (item.provider === 'square' && !item.catalogObjectId) {
				console.log('4. Missing catalogObjectId for Square item:', item);
				return json(
					{ ok: false, error: 'Missing catalogObjectId for one or more Square items' },
					{ status: 400 }
				);
			}
		}

		const idempotencyKey = createIdempotencyKey();
		console.log('5. Generated idempotencyKey:', idempotencyKey);

		const createOrder = getOrdersApi(square);
		const createPayment = getPaymentsApi(square);

		console.log('6. Creating Square order with items:', items);
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
		console.log('7. Square orderResponse:', orderResponse);

		if (orderResponse?.errors) {
			console.log('8. Square order errors:', orderResponse.errors);
			return json({ ok: false, error: sanitize(orderResponse.errors) }, { status: 400 });
		}

		const orderId =
			orderResponse?.result?.order?.id ??
			orderResponse?.order?.id ??
			orderResponse?.data?.order?.id;
		console.log('9. Extracted orderId:', orderId);

		if (!orderId) {
			console.log('10. No orderId present in response.');
			return json(
				{
					ok: false,
					error: 'Order creation succeeded but no orderId present',
					raw: sanitize(orderResponse)
				},
				{ status: 500 }
			);
		}

		console.log('11. Creating Square payment for amount:', amount);
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
		console.log('12. Square paymentResponse:', paymentResponse);

		if (paymentResponse?.errors) {
			console.log('13. Square payment errors:', paymentResponse.errors);
			return json({ ok: false, error: sanitize(paymentResponse.errors) }, { status: 400 });
		}

		const payment =
			paymentResponse?.result?.payment ??
			paymentResponse?.payment ??
			paymentResponse?.data?.payment;
		console.log('14. Extracted payment object:', payment);

		if (!payment) {
			console.log('15. No payment object present.');
			return json(
				{ ok: false, error: 'Payment creation succeeded but no payment object present' },
				{ status: 500 }
			);
		}

		const kunakiItems = items.filter((i: any) => i.provider === 'kunaki');
		console.log('16. Filtered kunakiItems:', kunakiItems);
		let kunakiResult = null;

		if (kunakiItems.length > 0) {
			console.log('17. Forwarding Kunaki items to /api/kunaki/order with postal:', postal);
			const response = await fetch('/api/kunaki/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: kunakiItems, postal })
			});
			console.log('18. Kunaki response status:', response.status);

			kunakiResult = await response.json();
			console.log('19. Kunaki response JSON:', kunakiResult);
		}

		console.log('20. Returning final response.');
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
