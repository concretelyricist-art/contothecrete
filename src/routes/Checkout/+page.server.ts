import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/public';

export const prerender = false;

export const load: PageServerLoad = async () => {
	return {
		publicConfig: {
			applicationId: env.PUBLIC_SQUARE_APPLICATION_ID,
			locationId: env.PUBLIC_SQUARE_LOCATION_ID
		}
	};
};
