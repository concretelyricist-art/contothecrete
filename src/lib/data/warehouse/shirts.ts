import shirt from '$lib/Images/con1.png';
import shirt2 from '$lib/Images/con3.png';
import shirt3 from '$lib/Images/con5.png';
import shirt4 from '$lib/Images/con20.jpg';
import shirt5 from '$lib/Images/con21.jpg';

export type Shirt = {
	id: number;
	name: string;
	price: number;
	img: string;
	sizes: string[];
	description: string;
};

export const Shirts = [
	{
		id: 1,
		name: 'Painted Face ',
		price: 25,
		img: shirt,
		sizes: ['S', 'M', 'L', 'XL'],
		description: 'A stylish shirt featuring a Concrete face paint.'
	},
	{
		id: 2,
		name: 'Suit Chase ',
		price: 25,
		img: shirt2,
		sizes: ['S', 'M', 'XL', 'XXL'],
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.'
	},
	{
		id: 3,
		name: 'Pig Head ',
		price: 25,
		img: shirt3,
		sizes: ['S', 'M', 'L'],
		description: 'A shirt featuring Concrete holding a pigs head.'
	},
	{
		id: 4,
		name: 'Classic Face ',
		price: 25,
		img: shirt4,
		sizes: ['S', 'M', 'L', 'XL'],
		description: 'A classic shirt featuring a Concrete face.'
	},
	{
		id: 5,
		name: 'Cartoon Classic ',
		price: 25,
		img: shirt5,
		sizes: ['S', 'M'],
		description: 'A  shirt featuring a Concrete cartoon.'
	}
];
