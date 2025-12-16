import shirt from '$lib/Images/con40.jpg';
import shirt2 from '$lib/Images/con3.png';
import shirt3 from '$lib/Images/con5.png';
import shirt4 from '$lib/Images/con20.jpg';
import shirt5 from '$lib/Images/con21.jpg';

import CD from '$lib/Images/conCD.jpg';
import CD2 from '$lib/Images/conCD2.jpg';
import CD3 from '$lib/Images/conCD3.jpg';
import CD4 from '$lib/Images/conCD4.jpg';
import CD5 from '$lib/Images/conCD5.jpg';
import CD6 from '$lib/Images/conCD6.jpg';
import CD7 from '$lib/Images/conCD7.jpg';

import SceneAlt from '$lib/Assets/SceneAlt.svelte';

export type Cds = {
	id: number;
	name: string;
	price: number;
	img: string;
	url: string;
	description: string;
	sizes: { label: string; productId: string }[];
	provider: string;
	type: string;
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
	type: string;
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
	type: string;
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
		name: 'I Hate Cops Vol. 1(TEST MODE)',
		price: 6.66,
		img: CD,
		url: './cdBaseIHC.glb',
		description: 'Platinum selling record from Concrete.',
		// sizes: [{ label: 'CD', productId: 'PX00YF1WV2' }],
		sizes: [{ label: 'CD', productId: 'PX00Z193GH' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 2,
		name: 'I Hate Cops Vol. 2',
		price: 6.66,
		img: CD7,
		url: './cdBaseIHCv2.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00OJJVFR' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 3,
		name: 'SAWS UP',
		price: 6.66,
		img: CD2,
		url: './cdBaseSawsup.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00Z4E4N6' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 4,
		name: 'Kill The T.H.O.T.',
		price: 6.66,
		img: CD3,
		url: './cdBaseTHOT.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZWTX1O' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 5,
		name: 'EVOL',
		price: 6.66,
		img: CD4,
		url: './cdBaseEVOL.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00HTD7S8' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 6,
		name: 'Sawdemic',
		price: 6.66,
		img: CD5,
		url: './cdBaseDemic.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZA7VZT' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 7,
		name: 'Indulgence Of The Flesh: The Sequel',
		price: 6.66,
		img: CD6,
		url: './cdBaseFlesh.glb',
		description: 'Platinum selling record from Concrete.',
		sizes: [{ label: 'CD', productId: 'PX00ZAJT2R' }],
		provider: 'kunaki',
		type: 'cd'
	}
];

export const Shirts = [
	{
		id: 8,
		name: 'Snapped: Grey(test mode)',
		price: 35,
		img: shirt2,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: ' RQFLELCRCG6HU2K3Y2ZGTLE2' },
			{ label: 'M', catalogObjectId: '3QW65BWJSVA7SO7FI2QEO5HF' },
			{ label: 'L', catalogObjectId: 'TRJKLULF6KV7XMNYAVZ4G7MH' },
			{ label: 'XL', catalogObjectId: 'WV5EGRL64IFJ6WM25AZYJXTW' },
			{ label: 'XXL', catalogObjectId: 'SHIDKLU5M7SZPW7APCCPACPR' }
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 9,
		name: 'Snapped: Black',
		price: 35,
		img: shirt2,
		url: './shirtBase.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'XS', catalogObjectId: 'KL534BHYURWL43CIZJBMYTJ6' },
			{ label: 'S', catalogObjectId: 'CFGHTWXHATDEDK5DKDGOQRKM' },
			{ label: 'M', catalogObjectId: 'SAQMIIRHLWW447TUGBD2IKIU' },
			{ label: 'L', catalogObjectId: 'DIZRMZ436EDCVM2TISFNO7GA' },
			{ label: 'XL', catalogObjectId: 'OYTZLIBQQ2XTMI66HW6B3CAU' },
			{ label: 'XXXL', catalogObjectId: '73PHRWWGYWOTANHARTJVGEYT' },
			{ label: 'XXXXL', catalogObjectId: 'PIKSTRUQ3UGQ3EZPE4DWFW73' },
			{ label: 'XXXXXL', catalogObjectId: 'TR3VVZ7XJ55DDLS3IZSEOXJC' }
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 10,
		name: 'SPD',
		price: 35,
		img: shirt3,
		url: './shirtBase2.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'QKVNHFSJEG35WPYJZOZZCWMU' },
			{ label: 'M', catalogObjectId: '5STFAF7HGSNR4MA2OQAUL6YD' },
			{ label: 'L', catalogObjectId: 'DOWH35SZIK53UGONOCXVRG7E' },
			{ label: 'XXL', catalogObjectId: 'CLKETJNHTE5XJRNPPCWCGJB7' },
			{ label: 'XXXL', catalogObjectId: 'X2X7NI7EFK7EHNUH44PGAYGH' },
			{ label: 'XXXXL', catalogObjectId: 'HX37R542VEZ3H2BI4KIQN3GB' },
			{ label: 'XXXXXL', catalogObjectId: 'HQTU3TQRBZZLRB2RVZLKPSPU' }
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 11,
		name: 'Facepaint',
		price: 35,
		img: shirt,
		url: './shirtBase3.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'S', catalogObjectId: 'IYWBHKC6ZENWIORUYQ2USGGN' },
			{ label: 'XXXXL', catalogObjectId: 'QZR247VSO2XOSEWI4MTCPUCI' }
		],
		provider: 'square',
		type: 'shirt'
	}
];

export const Hats = [
	{
		id: 12,
		name: 'Con-Crete',
		price: 25,
		img: shirt5,
		url: './hat.glb',
		description: 'A stylish hat featuring Concrete chasing a guy with a chainsaw.',
		sizes: [
			{ label: 'Blue', catalogObjectId: 'H2EDDCZVWIHETO4FQ73DUB4O' },
			{ label: 'Red', catalogObjectId: 'MEJASG3UHPJYKVSWOUEVRDMN' },
			{ label: 'Green', catalogObjectId: 'HOHOMKDGSAFD43AFK44J4IAQ' },
			{ label: 'Grey', catalogObjectId: 'QC2O5YI4MN4VBWHV37L6OJFF' }
		],
		provider: 'square',
		type: 'hat'
	},
	{
		id: 13,
		name: 'Facepainted',
		price: 25,
		img: shirt,
		url: './hat2.glb',
		description: 'A stylish hat featuring Concrete in facepaint.',
		sizes: [
			{ label: 'Blue', catalogObjectId: 'ZOUPZXXJGODRYUJKSUDPZZLP' },
			{ label: 'Red', catalogObjectId: 'CMWNOFWPKRUQDIGDQT2NKMZS' },
			{ label: 'Green', catalogObjectId: 'CLJHOPUGRMM5MJ4O2A27WAN4' },
			{ label: 'Grey', catalogObjectId: 'IRPIYJLPZ4KP2COXYJFWXTTQ' }
		],
		provider: 'square',
		type: 'hat'
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
