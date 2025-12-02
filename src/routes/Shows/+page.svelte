<script>
	import { ShowDates } from '$lib/data/shows/showdates.ts';

	import img1 from '$lib/Images/con4.jpg';
</script>

<main class="showPage" style={`background-image: url(${img1});`}>
	<article>
		<h1>Shows</h1>

		<table class="centered">
			<thead>
				<tr>
					<th>Place</th>
					<th>City</th>
					<th>Date</th>
					<th>Time</th>
					<th>Price</th>
					<th>Tickets</th>
				</tr>
			</thead>

			<tbody>
				{#each ShowDates as d}
					<tr>
						<td><a href={d.venueUrl}>{d.location}</a></td>
						<td>{d.city}</td>
						<td>{d.date}</td>
						<td>{d.time}</td>
						<td>{d.price}</td>
						<td><a href={d.ticketsUrl}>Tickets</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</article>
</main>

<style>
	h1 {
		margin-top: 0;
	}

	.showPage {
		min-height: 100vh;
		height: 100vh;
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
		background: var(--hover);
	}
	a {
		color: var(--accent-2);
		font-weight: bold;
	}
</style>
