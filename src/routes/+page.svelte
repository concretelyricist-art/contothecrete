<script>
	import { fade } from 'svelte/transition';

	import { Shirts } from '$lib/data/warehouse/shirts';

	import MerchItem from '$lib/Assets/MerchItem.svelte';

	let merchItem = $state(false);
	let selectedShirt = $state(null);

	function openMerch(shirt) {
		selectedShirt = shirt;
		merchItem = true;
	}

	function closeMerch() {
		merchItem = false;
		selectedShirt = null;
	}

	import img1 from '$lib/Images/con14.jpg';
	import img2 from '$lib/Images/con16.jpg';
	import img4 from '$lib/Images/con2.jpg';
	import img3 from '$lib/Images/con5.jpg';
	import img5 from '$lib/Images/con1.jpg';

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
	<div class="slider">
		{#key current}
			<div class="slide" style={`background-image: url(${images[index]});`} transition:fade></div>
		{/key}
	</div>

	<section class="header-info light-White">
		<article class="glass-Box">
			<h1>Subscribe</h1>
		</article>
		<article class="glass-Box large-Only">
			<h1>Merch</h1>
		</article>

		<article class="glass-Box">
			<h1><a href="/Shows"> Shows</a></h1>
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
		<article class="glass-Box large-Only">
			<h1>Video</h1>
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

	<section>
		<h2>Merch</h2>

		<p>
			Buy some dope shit and make youself look fresh as fuck! Click the item to check it out and
			learn more about it.
		</p>
	</section>

	<section class="merch-scroll">
		{#each Shirts as shirt}
			<button class="card-Topper" onclick={() => openMerch(shirt)}>
				<img src={shirt.img} alt={shirt.description} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>

				<div class="size-row">
					{#each shirt.sizes as size}
						<span class="size-badge">{size}</span>
					{/each}
				</div>
			</button>
		{/each}
	</section>

	{#if merchItem}
		<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
			<div class="modal-content" tabindex="-1" autofocus>
				<MerchItem shirt={selectedShirt} />

				<button class="btn-Ghost" onclick={closeMerch}> Close </button>
			</div>
		</dialog>
	{/if}

	<section>
		<h2>Check out my newest videos!</h2>
		<!-- Lake of fire  -->
		<iframe
			src="https://www.youtube.com/embed/ffZ4t26jLLM?si=HRLWmvdW_eHUI_Dy"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
		<a class="btn-Ghost" href="/Videos" style="margin-left:40%;"> Watch More</a>
	</section>
</main>

<!-- <section class="merch-scroll">
	{#each Shirts as shirt}
		<button class="card-Brutal" onclick={() => openMerch(shirt)}>
			<img src={shirt.img} alt={shirt.description} />
			<h2>{shirt.name}</h2>
			<p class="price">${shirt.price}</p>
			<div class="size-row">
				{#each shirt.sizes as size}
					<span>{size} /</span>
				{/each}
			</div>
		</button>
	{/each}
</section> -->

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
		bottom: 6rem;
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
			left: 18%;

			.glass-Box {
				width: fit-content;
				height: fit-content;

				h1 {
					margin: 0;
					padding: 3rem;
				}
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;

			margin: 0;
			.glass-Box {
				max-width: 30vw;
				min-width: 30vw;
				min-height: fit-content;
				p {
					margin: 0;
					padding: 0;
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
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		grid-template-rows: repeat(1, auto);
		gap: 1rem;
		overflow-x: auto;
		padding: 1rem;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scrollbar-width: thin;

		button {
			border: none;
			cursor: pointer;
		}

		@media only screen and (min-width: 1024px) {
			grid-template-rows: repeat(2, auto);
		}
	}

	.merch-scroll::-webkit-scrollbar {
		display: none;
	}

	.size-row {
		margin: 0;
		padding: 0;
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.size-badge {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #ff1a1a;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		font-weight: bold;
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

	.modal-overlay {
		position: fixed;
		display: flex;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.modal-content {
		background: var(--bg-2);
		color: var(--txt-1);
		border: var(--bord-2);
		max-width: 90vw;
		max-height: 90vh;
		overflow-y: auto;
		text-align: center;
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

	iframe {
		width: 90%;
		min-height: 70vh;
		border: none;
		margin: 5%;
	}
</style>
