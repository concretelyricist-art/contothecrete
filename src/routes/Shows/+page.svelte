<script lang="ts">
	import { ShowDates } from '$lib/data/shows/showdates.ts';

	const parseDate = (str: string) => {
		const [month, day, year] = str.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	const today = $state(new Date());
	today.setHours(0, 0, 0, 0);

	const upcomingShows = $derived(() => {
		return ShowDates.map((d) => ({ ...d, parsed: parseDate(d.date) }))
			.filter((d) => d.parsed.getTime() >= today.getTime())
			.sort((a, b) => a.parsed.getTime() - b.parsed.getTime());
	});
</script>

<svelte:head>
	<title>Con-Crete Upcoming Shows</title>
	<meta
		name="description"
		content="See Con-Crete's upcoming shows, dates, venues, and ticket info."
	/>
</svelte:head>

<main class="showPage">
	<article>
		<h1>Shows</h1>

		<table class="centered">
			<thead>
				<tr>
					<th>Place</th>
					<th>City</th>
					<th>Date</th>
					<th>Tickets</th>
				</tr>
			</thead>
			<tbody>
				{#each upcomingShows() as show (show)}
					<tr>
						<td>
							<a href={show.venueUrl} target="_blank" rel="noopener">
								{show.location}
							</a>
						</td>
						<td>{show.city}</td>
						<td>{show.date}</td>
						<td>
							<a href={show.ticketsUrl} target="_blank" rel="noopener">
								{show.price} / Tickets
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</article>

	<h3>
		If tickets or venue links are not available above, they may exist from the spotify link below
	</h3>
	<script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
	<a
		class="bit-widget-initializer"
		data-artist-name="id_368412"
		data-events-to-display=""
		data-background-color="oklch(9.327% 0.01235 238.398)"
		data-separator-color="oklch(98.441% 0.00317 15.269)"
		data-text-color="oklch(98.441% 0.00317 15.269)"
		data-font="System"
		data-auto-style="true"
		data-button-label-capitalization="uppercase"
		data-header-capitalization="uppercase"
		data-location-capitalization="uppercase"
		data-venue-capitalization="uppercase"
		data-display-local-dates="true"
		data-local-dates-position="tab"
		data-display-past-dates="true"
		data-display-details="false"
		data-display-lineup="false"
		data-display-start-time="false"
		data-social-share-icon="false"
		data-display-limit="all"
		data-date-format="MMM. D, YYYY"
		data-date-orientation="horizontal"
		data-date-border-color="#4A4A4A"
		data-date-border-width="1px"
		data-date-capitalization="capitalize"
		data-date-border-radius="10px"
		data-event-ticket-cta-size="medium"
		data-event-custom-ticket-text=""
		data-event-ticket-text="TICKETS"
		data-event-ticket-icon="false"
		data-event-ticket-cta-text-color="oklch(98.441% 0.00317 15.269)"
		data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
		data-event-ticket-cta-border-color="rgba(74,74,74,1)"
		data-event-ticket-cta-border-width="0px"
		data-event-ticket-cta-border-radius="2px"
		data-sold-out-button-text-color="oklch(98.441% 0.00317 15.269)"
		data-sold-out-button-background-color="rgba(74,74,74,1)"
		data-sold-out-button-border-color="rgba(74,74,74,1)"
		data-sold-out-button-clickable="true"
		data-event-rsvp-position="left"
		data-event-rsvp-cta-size="medium"
		data-event-rsvp-only-show-icon="false"
		data-event-rsvp-text="RSVP"
		data-event-rsvp-icon="false"
		data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
		data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
		data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
		data-event-rsvp-cta-border-width="1px"
		data-event-rsvp-cta-border-radius="2px"
		data-follow-section-position="top"
		data-follow-section-alignment="center"
		data-follow-section-header-text="Get updates on new shows, new music, and more"
		data-follow-section-cta-size="medium"
		data-follow-section-cta-text="FOLLOW"
		data-follow-section-cta-icon="false"
		data-follow-section-cta-text-color="rgba(255,255,255,1)"
		data-follow-section-cta-bg-color="rgba(74,74,74,1)"
		data-follow-section-cta-border-color="rgba(74,74,74,1)"
		data-follow-section-cta-border-width="0px"
		data-follow-section-cta-border-radius="2px"
		data-play-my-city-position="bottom"
		data-play-my-city-alignment="center"
		data-play-my-city-header-text="Don’t see a show near you?"
		data-play-my-city-cta-size="medium"
		data-play-my-city-cta-text="REQUEST A SHOW"
		data-play-my-city-cta-icon="false"
		data-play-my-city-cta-text-color="rgba(255,255,255,1)"
		data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
		data-play-my-city-cta-border-color="rgba(74,74,74,1)"
		data-play-my-city-cta-border-width="0px"
		data-play-my-city-cta-border-radius="2px"
		data-optin-font=""
		data-optin-text-color=""
		data-optin-bg-color=""
		data-optin-cta-text-color=""
		data-optin-cta-bg-color=""
		data-optin-cta-border-width=""
		data-optin-cta-border-radius=""
		data-optin-cta-border-color=""
		data-language="en"
		data-layout-breakpoint="900"
		data-app-id="e789064414fc4bfe362696b186ee8c25"
		data-affil-code=""
		data-bit-logo-position="bottomRight"
		data-bit-logo-color="rgba(66,66,66,1)"
	></a>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	h1 {
		margin-top: 0;
	}

	.showPage {
		min-height: 100vh;
		height: 100%;
		background-image: url('$lib/Images/con8.jpg');
		background-size: cover;
		background-position: center;
	}

	table.centered {
		width: 100%;
		margin: auto;
		border-collapse: collapse;
		table-layout: fixed;
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);

		a {
			font-size: var(--size-5);
		}

		@media only screen and (min-width: 1024px) {
			width: 70%;
		}
	}
	th,
	td {
		text-align: center;
		padding: 12px;
		font-size: var(--size-3);

		@media only screen and (min-width: 768px) {
			font-size: var(--size-4);
		}
	}
	thead {
		background: var(--color-active);
	}
	th {
		border-bottom: var(--bord);
	}
	tbody td {
		border-bottom: var(--bord-2);
	}
	tr:hover {
		background: var(--bg-2);
	}
	a {
		color: var(--accent-2);
		font-weight: bold;
	}
</style>
