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
	provider: string;
};

export type Shirt = {
	id: number;
	name: string;
	price: number;
	img: string;
	model?: { Scene: typeof SceneAlt };
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
};

export type Hat = {
	id: number;
	name: string;
	price: number;
	img: string;
	model?: { Scene: typeof SceneAlt };
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
};

export type Sticker = {
	id: number;
	name: string;
	price: number;
	img: string;
	url: string;
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
};

export const Cds = [
	{
		id: 1,
		name: 'I Hate Cops Vol. 1',
		price: 6.66,
		img: shirt,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00YF1WV2' }],
		provider: 'kunaki'
	},
	{
		id: 2,
		name: 'I Hate Cops Vol. 2',
		price: 6.66,
		img: shirt2,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00OJJVFR' }],
		provider: 'kunaki'
	},
	{
		id: 3,
		name: 'SAWS UP',
		price: 6.66,
		img: shirt3,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00Z4E4N6' }],
		provider: 'kunaki'
	},
	{
		id: 4,
		name: 'Kill The T.H.O.T.',
		price: 6.66,
		img: shirt4,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZWTX1O' }],
		provider: 'kunaki'
	},
	{
		id: 5,
		name: 'EVOL',
		price: 6.66,
		img: shirt5,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00HTD7S8' }],
		provider: 'kunaki'
	},
	{
		id: 6,
		name: 'Sawdemic',
		price: 6.66,
		img: shirt,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZA7VZT' }],
		provider: 'kunaki'
	},
	{
		id: 7,
		name: 'Indulgence Of The Flesh: The Sequel',
		price: 6.66,
		img: shirt3,
		url: './sticker.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZAJT2R' }],
		provider: 'kunaki'
	}
];

export const Shirts = [
	{
		id: 1,
		name: 'Snapped: Grey',
		price: 35,
		img: shirt2,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'M', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'L', catalogObjectId: 'JUCUVF47LLP6I34LINB52L5E' },
			{ label: 'XL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
	},
	{
		id: 2,
		name: 'Snapped: Black',
		price: 35,
		img: shirt2,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'M', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'L', catalogObjectId: 'JUCUVF47LLP6I34LINB52L5E' },
			{ label: 'XL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
	},
	{
		id: 3,
		name: 'SPD',
		price: 35,
		img: shirt3,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'M', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'L', catalogObjectId: 'JUCUVF47LLP6I34LINB52L5E' },
			{ label: 'XXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' },
			{ label: 'XXXXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
	},
	{
		id: 4,
		name: 'Facepaint',
		price: 35,
		img: shirt,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'XXXXL', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
	}
];

export const Hats = [
	{
		id: 1,
		name: 'Cow',
		price: 25,
		img: shirt5,
		url: './hat.glb',
		description: 'A stylish hat featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'Blue', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Red', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Green', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Grey', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
	},
	{
		id: 2,
		name: 'Facepaint',
		price: 25,
		img: shirt,
		url: './hat2.glb',
		description: 'A stylish hat featuring Concretefacepaint.',
		sizes: [
			{ label: 'Blue', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Red', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Green', catalogObjectId: 'TWFXS766HHPGHYA54PBECIEF' },
			{ label: 'Grey', catalogObjectId: 'XHJ57KJF7SV7NEQOAB6PWHKM' }
		],
		provider: 'square'
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
