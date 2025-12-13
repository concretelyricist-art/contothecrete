export type ShowDate = {
	date: string;
	time: string;
	location: string;
	city: string;
	venueUrl: string;
	ticketsUrl: string;
	description: string;
	price: number;
};

export const ShowDates = [
	{
		date: '01-10-2026',
		time: '7:00 PM',
		location: 'El Corazon',
		city: 'Seattle, WA',
		venueUrl: 'https://www.elcorazonseattle.com/',
		ticketsUrl: 'https://www.elcorazonseattle.com/',
		description: 'Join us for an unforgettable night of music and art at El Corazon in Seattle!',
		price: '$30'
	},
	{
		date: '02-08-2026',
		time: '8:00 PM',
		location: 'Echo Hall',
		city: 'Portland, OR',
		venueUrl: '404',
		ticketsUrl: '404',
		description: 'A high-energy night of sound and atmosphere at Echo Hall in Portland.',
		price: '$28'
	},
	{
		date: '03-15-2026',
		time: '7:30 PM',
		location: 'The Iron Lantern',
		city: 'San Francisco, CA',
		venueUrl: '404',
		ticketsUrl: '404',
		description:
			'Experience an immersive evening at The Iron Lantern in the heart of San Francisco.',
		price: '$35'
	},
	{
		date: '03-21-2026',
		time: '7:00 PM',
		location: 'Riverlight Theater',
		city: 'Denver, CO',
		venueUrl: '404',
		ticketsUrl: '404',
		description: 'Join the crowd at Riverlight Theater for a night of unforgettable music.',
		price: '$32'
	},
	{
		date: '03-29-2026',
		time: '8:00 PM',
		location: 'The Crimson Stage',
		city: 'Chicago, IL',
		venueUrl: '404',
		ticketsUrl: '404',
		description: 'A powerful, atmospheric performance awaits at The Crimson Stage in Chicago.',
		price: '$34'
	},
	{
		date: '04-05-2026',
		time: '7:00 PM',
		location: 'The Atrium',
		city: 'Minneapolis, MN',
		venueUrl: '404',
		ticketsUrl: '404',
		description: 'A night of sound and storytelling at The Atrium in Minneapolis.',
		price: '$29'
	},
	{
		date: '04-12-2026',
		time: '7:30 PM',
		location: 'Glassline Pavilion',
		city: 'Austin, TX',
		venueUrl: '404',
		ticketsUrl: '404',
		description: 'Step inside the atmosphere at Glassline Pavilion in Austin.',
		price: '$33'
	}
];
