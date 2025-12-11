import { SquareClient, SquareEnvironment } from 'square';
import { SQUARE_ACCESS_TOKEN } from '$env/static/private';

export const square = new SquareClient({
	environment: SquareEnvironment.Sandbox,
	token: SQUARE_ACCESS_TOKEN
});
