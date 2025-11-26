<script>
	import { fade } from 'svelte/transition';

	import { Shirts } from '$lib/data/warehouse/shirts';

	import img1 from '$lib/Images/con14.jpg';
	import img2 from '$lib/Images/con16.jpg';
	import img4 from '$lib/Images/con2.jpg';
	import img3 from '$lib/Images/con5.jpg';
	import img5 from '$lib/Images/con1.jpg';

	import shirt from '$lib/Images/con1.png';
	import shirt2 from '$lib/Images/con3.png';
	import shirt3 from '$lib/Images/con5.png';
	import shirt4 from '$lib/Images/con20.jpg';
	import shirt5 from '$lib/Images/con21.jpg';

	const images = [img1, img2, img3, img4, img5];
	let index = $state(0);
	let playing = $state(true);
	const total = images.length;
	const current = $derived(() => images[index]);

	function next() {
		index = (index + 1) % total;
	}

	const intervalMs = 5000;

	$effect(() => {
		if (!playing) return;
		const id = setInterval(next, intervalMs);
		return () => clearInterval(id);
	});
</script>

<header>
	<!-- Background slider -->
	<div class="slider">
		{#key current}
			<div class="slide" style={`background-image: url(${images[index]});`} transition:fade></div>
		{/key}
	</div>

	<!-- Foreground content -->
	<section class="header-info light-White">
		<article class="glass-Box">
			<h1>Subscribe</h1>
		</article>

		<article class="glass-Box">
			<h1>Shows</h1>
			<table>
				<thead>
					<tr>
						<th>Place</th>
						<th>Date</th>
						<th>Price / Link</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Seattle, Wa</td>
						<td>January 15, 2026</td>
						<td><a href="/">Buy Tickets</a></td>
					</tr>
				</tbody>
			</table>
		</article>
	</section>
</header>

<main class="grid-Main">
	<section>
		<h1>SAWWW'S UP</h1>

		<p>
			Welcome to the official domain of Con-Crete, Washington’s underground titan of dark hip-hop.
			This is where the shadows breathe, the beats hit like sledgehammers, and the hardcore energy
			that fills his live shows spills into every corner of the page. Here you’ll find the heartbeat
			of the movement raw, unfiltered, and carved straight from the concrete streets that built him.
			Whether you came for the music, the chaos, or the culture, you’ve stepped into the right
			place.
		</p>
		<p>
			Stay locked in for new releases, upcoming shows, exclusive merch drops, and contests you won’t
			find anywhere else. Con-Crete’s community runs on adrenaline, sharp creativity, and a love for
			the darker side of hip-hop and this site is your front-row seat to all of it. Explore,
			connect, and keep your eyes open… Around here, you never know what’s coming next.
		</p>
	</section>

	<h2>Merch</h2>
	<section class="merch-scroll">
		{#each Shirts as shirt}
			<div class="card-Topper">
				<img src={shirt.img} alt={shirt.description} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>
				<div class="size-row">
					{#each shirt.sizes as size}
						<span class="size-badge">{size}</span>
					{/each}
				</div>
			</div>
		{/each}
	</section>
</main>

<section class="merch-scroll">
	{#each Shirts as shirt}
		<div class="card-Brutal">
			<img src={shirt.img} alt={shirt.description} />
			<h2>{shirt.name}</h2>
			<p class="price">${shirt.price}</p>
			<div class="size-row">
				{#each shirt.sizes as size}
					<span>{size} /</span>
				{/each}
			</div>
		</div>
	{/each}
</section>

<!--svelte-ignore css_unused_selector -->
<style>
	header {
		background-color: var(--bg-1);
		position: relative;
		padding: 1rem;
		text-align: center;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		border-bottom: 2px solid var(--bg-2);
		z-index: 975;
	}

	.header-info {
		display: grid;
		grid-template-columns: 1fr;
		position: absolute;
		bottom: 4rem;
		height: 45vh;
		width: 80vw;
		margin: 0 2rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

		.glass-Box {
			min-width: 60vw;
			min-height: 20vh;
			width: fit-content;
			height: fit-content;
		}

		@media only screen and (min-width: 768px) {
			left: 10%;

			.glass-Box {
				width: fit-content;
				height: fit-content;
			}
		}

		@media only screen and (min-width: 1440px) {
			.glass-Box {
				width: 100%;

				p {
					margin: 0;
					padding: 0;
				}
				& img {
					width: 30%;
				}
			}
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead th {
		background: #1a0000;
		padding: 12px;
		border-bottom: 2px solid #ff1a1a;
	}

	tbody td {
		padding: 12px;
		border-bottom: 1px solid #330000;
		color: #ddd;
	}

	tbody tr:hover {
		background: #260000;
	}

	a {
		color: #ff3333;
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		text-decoration: underline;
		color: #ff6666;
	}

	.merch-scroll {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		padding: 1rem;
		scroll-behavior: smooth;
		scrollbar-width: none;
	}

	.merch-scroll::-webkit-scrollbar {
		display: none;
	}

	.card-Topper {
		min-width: 250px;
		flex-shrink: 0;
	}

	.size-row {
		margin-top: auto;
		display: flex;
		gap: 0.5rem;
		padding-top: 1rem;
		z-index: 10;
	}

	.size-badge {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #ff1a1a; /* blood red */
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		font-weight: bold;
		font-size: 0.9rem;
		border: 2px solid #000;
		box-shadow: 0 0 4px #000;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			background 0.15s ease;
	}

	.size-badge:hover {
		transform: scale(1.1);
		background: #ff3636;
	}

	.slider {
		position: relative;
		overflow: hidden;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100vh;
		inset: 0;
	}

	.slide {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: left center;
		animation: pan 25s linear forwards infinite;
	}

	@keyframes pan {
		from {
			background-position: left center;
		}
		to {
			background-position: right center;
		}
	}
</style>
