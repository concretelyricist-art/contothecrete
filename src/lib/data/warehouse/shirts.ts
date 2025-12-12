import shirt from '$lib/Images/con1.png';
import shirt2 from '$lib/Images/con3.png';
import shirt3 from '$lib/Images/con5.png';
import shirt4 from '$lib/Images/con20.jpg';
import shirt5 from '$lib/Images/con21.jpg';

import SceneAlt from '$lib/SceneAlt.svelte';

export type Cds = {
	id: number;
	name: string;
	price: number;
	img: string;
	url: string;
	description: string;
	sizes: { label: string; productId: string }[];
};

export type Shirt = {
	id: number;
	name: string;
	price: number;
	img: string;
	sizes: { label: string; catalogObjectId: string }[];
	model?: { Scene: typeof SceneAlt };
	description: string;
};

export type Hat = {
	id: number;
	name: string;
	price: number;
	img: string;
	sizes: string[];
	model?: { Scene: typeof SceneAlt };
	description: string;
};

export type Sticker = {
	id: number;
	name: string;
	price: number;
	img: string;
	sizes: string[];
	url: string;
	description: string;
};

export const Cds = [
	{
		id: 1,
		name: 'TestaPillar',
		price: 20,
		img: shirt2,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00Z193GH' }],
		provider: 'kunaki'
	}
];

export const Shirts = [
	{
		id: 1,
		name: 'Suit Chase',
		price: 35,
		img: shirt2,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'M', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'L', catalogObjectId: 'JUCUVF47LLP6I34LINB52L5E' },
			{ label: 'XL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
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
