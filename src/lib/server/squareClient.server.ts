import { SquareClient, SquareEnvironment } from 'square';
import { env } from '$env/dynamic/private';

export function getSquareClient() {
	const token = env.SQUARE_ACCESS_TOKEN;
	if (!token) throw new Error('Missing SQUARE_ACCESS_TOKEN');
	return new SquareClient({
		environment: SquareEnvironment.Sandbox,
		token
	});
}
