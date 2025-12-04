import shirt from '$lib/Images/con1.png';
import shirt2 from '$lib/Images/con3.png';
import shirt3 from '$lib/Images/con5.png';
import shirt4 from '$lib/Images/con20.jpg';
import shirt5 from '$lib/Images/con21.jpg';

import SceneAlt from '$lib/SceneAlt.svelte';

export type Shirt = {
	id: number;
	name: string;
	price: number;
	img: string;
	sizes: string[];
	model?: { Scene: typeof SceneAlt };
	description: string;
};

export const Shirts = [
	{
		id: 1,
		name: 'Painted Face ',
		price: 35,
		img: shirt,
		sizes: ['S', 'M', 'L', 'XL'],
		url: './shirtBase3.glb',
		description: 'A stylish shirt featuring a Concrete face paint.'
	},
	{
		id: 2,
		name: 'Suit Chase ',
		price: 35,
		img: shirt2,
		sizes: ['S', 'M', 'XL', 'XXL'],
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.'
	},
	{
		id: 3,
		name: 'Pig Head ',
		price: 35,
		img: shirt3,
		sizes: ['S', 'M', 'L'],
		url: './shirtBase2.glb',
		description: 'A shirt featuring Concrete holding a pigs head.'
	},
	{
		id: 4,
		name: 'Classic Face ',
		price: 35,
		img: shirt4,
		sizes: ['S', 'M', 'L', 'XL'],
		url: './shirtBase4.glb',
		description: 'A classic shirt featuring a Concrete face.'
	},
	{
		id: 5,
		name: 'Cartoon Classic ',
		price: 35,
		img: shirt5,
		sizes: ['S', 'M'],
		url: './shirtBase5.glb',
		description: 'A  shirt featuring a Concrete cartoon.'
	}
];

export const Hats = [
	{
		id: 1,
		name: 'Suit Chase ',
		price: 25,
		img: shirt2,
		sizes: ['Fitted'],
		url: './hat.glb',
		description: 'A hat featuring Concrete chasing a guy with a chainsaw.'
	},
	{
		id: 2,
		name: 'Pig Head ',
		price: 25,
		img: shirt3,
		sizes: ['Fitted'],
		url: './hat2.glb',
		description: 'A hat featuring Concrete holding a pigs head.'
	},
	{
		id: 3,
		name: 'Classic Face ',
		price: 25,
		img: shirt4,
		sizes: ['Fitted'],
		url: './hat3.glb',
		description: 'A hat featuring a Concrete face.'
	},
	{
		id: 4,
		name: 'Cartoon Classic ',
		price: 25,
		img: shirt5,
		sizes: ['Fitted'],
		url: './hat4.glb',
		description: 'A hat featuring a Concrete cartoon.'
	}
];

export const Stickers = [
	{
		id: 1,
		name: 'Painted Face ',
		price: 10,
		img: shirt,
		sizes: ['S'],
		url: './sticker3.glb',
		description: 'A stylish shirt featuring a Concrete face paint.'
	},
	{
		id: 2,
		name: 'Suit Chase ',
		price: 10,
		img: shirt2,
		sizes: ['S'],
		url: './sticker.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.'
	},
	{
		id: 3,
		name: 'Pig Head ',
		price: 10,
		img: shirt3,
		sizes: ['S'],
		url: './sticker2.glb',
		description: 'A shirt featuring Concrete holding a pigs head.'
	},
	{
		id: 4,
		name: 'Classic Face ',
		price: 10,
		img: shirt4,
		sizes: ['S'],
		url: './sticker4.glb',
		description: 'A classic shirt featuring a Concrete face.'
	},
	{
		id: 5,
		name: 'Cartoon Classic ',
		price: 10,
		img: shirt5,
		sizes: ['S'],
		url: './sticker5.glb',
		description: 'A  shirt featuring a Concrete cartoon.'
	}
];
