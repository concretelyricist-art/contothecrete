import { json } from '@sveltejs/kit';
import { square } from '$lib/server/squareClient';
import { SQUARE_LOCATION_ID } from '$env/static/private';

function createIdempotencyKey() {
	return crypto.randomUUID();
}

function sanitize(obj: any) {
	return JSON.parse(
		JSON.stringify(obj, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
	);
}
export async function POST({ request }) {
	try {
		const { token, amount, items, postal } = await request.json();

		const response = await square.payments.create({
			idempotencyKey: createIdempotencyKey(),
			sourceId: token,
			locationId: SQUARE_LOCATION_ID,
			amountMoney: {
				amount: BigInt(amount),
				currency: 'USD'
			},
			note: items.map((i) => `${i.name} (${i.size}) x${i.quantity}`).join(', '),

			shippingAddress: {
				addressLine1: postal.addressLine1,
				addressLine2: postal.addressLine2,
				locality: postal.city,
				administrativeDistrictLevel1: postal.state,
				postalCode: postal.zip,
				country: postal.country
			}
		});

		console.dir(response, { depth: 20 });

		if (response.errors) {
			return json({ ok: false, error: sanitize(response.errors) }, { status: 400 });
		}

		const payment = response?.result?.payment ?? response?.payment ?? null;

		if (!payment) {
			return json(
				{
					ok: false,
					error: 'Square returned an unexpected response shape',
					raw: sanitize(response)
				},
				{ status: 500 }
			);
		}

		return json({
			ok: true,
			payment: sanitize(payment),
			items
		});
	} catch (err: any) {
		console.error('PAYMENT EXCEPTION:', err);

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
