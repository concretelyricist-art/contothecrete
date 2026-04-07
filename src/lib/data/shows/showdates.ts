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
		date: '03-21-2026',
		time: '7:00 PM',
		location: 'El Corazon',
		city: 'Seattle, WA',
		venueUrl: 'https://www.elcorazonseattle.com/',
		ticketsUrl: 'https://www.elcorazonseattle.com/shows/kung-fu-vampire-21-mar',
		description:
			'Join us for an unforgettable night of music with Kung Fu Vampire at El Corazon in Seattle!',
		price: '$15'
	},
	{
		date: '03-27-2026',
		time: '7:00 PM',
		location: 'The King of Clubs',
		city: 'Columbus, OH',
		venueUrl: 'https://www.tkoc.live/',
		ticketsUrl: 'https://wl.eventim.us/event/JuggalOhio-4-2026/669622?afflky=TheKingofClubs',
		description: 'The Legendary Event Returns:  JuggalOhio 4',
		price: '$65'
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
		date: '04-16-2026',
		time: '7:00 PM',
		location: 'Carl’s Tavern',
		city: 'New Haven, IN',
		venueUrl: '/Shows/missingShowData',
		ticketsUrl: 'N/a',
		description: 'Skidmark Scavengers live at Carl’s Tavern in New Haven, IN.',
		price: '$25'
	},
	{
		date: '04-17-2026',
		time: '7:00 PM',
		location: 'Heroes Venture Arcade',
		city: 'Sheboygan, WI',
		venueUrl: 'https://raganomix13.bigcartel.com/',
		ticketsUrl: 'https://raganomix13.bigcartel.com/product/klokwerk-e-tickets',
		description: 'Skidmark Scavengers live at Skip’er Inn in Sheboygan, WI.',
		price: '$25'
	},
	{
		date: '04-18-2026',
		time: '6:00 PM',
		location: 'Day Block Brewing',
		city: 'Minneapolis, MN',
		venueUrl: 'https://www.dayblockbrewing.com/',
		ticketsUrl:
			'https://www.dayblockbrewing.com/live-events/skidmark-scavengers-tour-featuring-klokwerk-con-crete-kid-vibe/',
		description: 'Skidmark Scavengers live at Day Block Brewing in Minneapolis, MN.',
		price: '$15'
	},
	{
		date: '04-19-2026',
		time: '6:00 PM',
		location: 'Fubar Lounge',
		city: 'St. Louis, MO',
		venueUrl: 'https://www.fubarloungestl.com/',
		ticketsUrl: 'https://www.fubarloungestl.com/shows/mr-green-s-pre-420-bash-19-apr',
		description: 'Skidmark Scavengers live at Fubar Lounge in St. Louis, MO.',
		price: '$25'
	},
	{
		date: '04-20-2026',
		time: 'https://www.stubwire.com/e/37736/skidmarkskavengerstour/geuxjackofallshows',
		location: 'Geaux Shows',
		city: 'Broken Arrow, OK',
		venueUrl: 'https://www.geauxshows.com/',
		ticketsUrl: 'https://www.stubwire.com/e/37736/skidmarkskavengerstour/geuxjackofallshows',
		description: 'Skidmark Scavengers live at Geaux Shows in Broken Arrow, OK.',
		price: '$28'
	},
	{
		date: '04-21-2026',
		time: 'N/a',
		location: 'TBA',
		city: 'N/a',
		venueUrl: 'N/a',
		ticketsUrl: 'N/a',
		description: 'Skidmark Scavengers – venue to be announced.',
		price: 'N/a'
	},
	{
		date: '04-23-2026',
		time: '7:00 PM',
		location: 'The Roxy',
		city: 'Denver, CO',
		venueUrl: 'https://broadwayroxy.com/',
		ticketsUrl: 'https://aftontickets.com/event/buyticket/1qjwv68197',
		description: 'Skidmark Scavengers live at The Roxy in Denver, CO.',
		price: '$35'
	},
	{
		date: '04-24-2026',
		time: '7:00 PM',
		location: 'Liquid Joe’s',
		city: 'Salt Lake City, UT',
		venueUrl: 'https://www.liquidjoes.net/',
		ticketsUrl: 'https://liquidjoes.ticketsauce.com/e/klokwerk-e/tickets',
		description: 'Skidmark Scavengers live at Liquid Joe’s in Salt Lake City, UT.',
		price: '$25'
	},
	{
		date: '04-25-2026',
		time: '7:30',
		location: 'Dino’s Hideaway',
		city: 'Farmington, NM',
		venueUrl: 'N/a',
		ticketsUrl:
			'https://www.eventbrite.com/e/the-skidmark-skavengers-tour-tickets-1982241027273?aff=oddtdtcreator',
		description: 'Skidmark Scavengers live at Dino’s Hideaway in Farmington, NM.',
		price: '$25'
	},
	{
		date: '04-26-2026',
		time: '6:00 PM',
		location: 'The Jam Spot',
		city: 'Albuquerque, NM',
		venueUrl: 'N/a',
		ticketsUrl: 'https://skeletix.com/4305-skidmark-scavengers-with-klokwerk-e-and-con/',
		description: 'Skidmark Scavengers live at The Jam Spot in Albuquerque, NM.',
		price: '$10'
	},
	{
		date: '04-28-2026',
		time: '6:00 PM',
		location: 'Studio 210',
		city: 'San Antonio, TX',
		venueUrl: 'N/a',
		ticketsUrl:
			'https://razakelstore.bigcartel.com/product/klokwerk-e-tickets-san-antonio-tx-42826',
		description: 'Skidmark Scavengers live at Studio 210 in San Antonio, TX.',
		price: '$10'
	},
	{
		date: '04-30-2026',
		time: '6:00 PM',
		location: 'Hi Tone Cafe',
		city: 'Memphis, TN',
		venueUrl: 'https://hitonecafe.com/',
		ticketsUrl:
			'https://www.etix.com/ticket/p/91741495/skidmark-skavengers-big-roomupstairs-memphis-the-hi-tone-cafe?partner_id=100',
		description: 'Skidmark Scavengers live at Hi Tone Cafe in Memphis, TN.',
		price: '$25'
	},
	{
		date: '05-01-2026',
		time: '6:00 PM',
		location: 'WJME Hall',
		city: 'Louisville, KY',
		venueUrl: 'N/a',
		ticketsUrl: 'https://skeletix.com/4263-klokwerk-e-skidmark-skavengers-louisvil/',
		description: 'Skidmark Scavengers live at WJME Hall in Louisville, KY.',
		price: '$25'
	},
	{
		date: '05-02-2026',
		time: '6:00 PM',
		location: 'Classics Victory’s',
		city: 'Columbus, OH',
		venueUrl: 'N/a',
		ticketsUrl: 'https://skeletix.com/4262-klokwerk-e-skidmark-skavengers-columbus/',
		description: 'Skidmark Scavengers live at Classics Victory’s in Columbus, OH.',
		price: '$25'
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
