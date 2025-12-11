// src/lib/server/squareClient.ts
import { SquareClient, SquareEnvironment } from 'square';
import { env } from '$env/dynamic/private';

export const square = new SquareClient({
	environment: SquareEnvironment.Production,
	accessToken: env.SQUARE_ACCESS_TOKEN
});
