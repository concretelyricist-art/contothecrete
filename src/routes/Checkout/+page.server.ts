import type { PageServerLoad } from './$types';
import { getSquareClient } from '$lib/server/squareClient.server';
import { env } from '$env/dynamic/private';

export const prerender = false;

export const load: PageServerLoad = async () => {
	const square = getSquareClient();
	const locationId = env.SQUARE_LOCATION_ID;

	return {
		// items,
		publicConfig: {
			applicationId: process.env.PUBLIC_SQUARE_APPLICATION_ID,
			locationId: process.env.PUBLIC_SQUARE_LOCATION_ID
		}
	};
};
