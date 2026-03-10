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
		ticketsUrl: 'https://www.elcorazonseattle.com/shows/for-the-love-invitational-10-jan',
		description: 'Join us for an unforgettable night of music and art at El Corazon in Seattle!',
		price: 'FREE'
	},
	{
		date: '03-14-2026',
		time: '7pm - 10PM',
		location: 'Le Voyeur Cafe',
		city: 'Olympia, WA',
		venueUrl: 'N/a',
		ticketsUrl: 'N/a',
		description: 'Kung Fu Vampire at El Corazon in Seattle!',
		price: '$10'
	},
	{
		date: '03-30-2026',
		time: '7:00 PM',
		location: 'Club Eden',
		city: 'Bremerton, WA',
		venueUrl: 'https://edennightclub.beer/',
		ticketsUrl: 'N/a',
		description: 'Emo Easter at Club Eden in Bremerton!',
		price: '$15'
	},
	{
		date: '04-04-2026',
		time: '7:00 PM',
		location: 'The Village',
		city: 'Bremerton, WA',
		venueUrl: 'https://www.villagebremerton.com/',
		ticketsUrl: 'N/a',
		description: 'Top jester?!',
		price: '$10'
	},
	{
		date: '06-07-2026',
		time: '8:00 PM',
		location: 'El Corazon',
		city: 'Seattle, WA',
		venueUrl: 'https://www.elcorazonseattle.com/',
		ticketsUrl: 'https://www.elcorazonseattle.com/shows/twisted-insane-the-reaper-tour-21-mar',
		description: 'Twisted Insane for The Reaper Tour at El Corazon in Seattle!',
		price: '$20'
	}
];
