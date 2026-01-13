<script>
	import { Cds } from '$lib/data/warehouse/shirts';
	import { cart } from '$lib/stores/cart.svelte.js';

	let added0 = false;
	let added1 = false;

	function add(cd, index) {
		cart.addItem(cd, 'default');

		if (index === 0) added0 = true;
		if (index === 1) added1 = true;

		setTimeout(() => {
			if (index === 0) added0 = false;
			if (index === 1) added1 = false;
		}, 1500);
	}
</script>

<svelte:head>
	<title>Con-Crete store to buy merch</title>
	<meta
		name="description"
		content="Buy Con-Crete's official merchandise including shirts, hats, and CDs."
	/>
</svelte:head>

<h1>New Music</h1>
<main class="grid-Main">
	<section class="card-Topper">
		<img src={Cds[0].img} alt="" />
		<h2>{Cds[0].name}</h2>
		<p>{Cds[0].description}</p>
		<p>{Cds[0].availability}</p>
		<p>${Cds[0].price}</p>

		<button class="btn-Ghost" onclick={() => add(Cds[0], 0)}> Add to Cart </button>

		{#if added0}
			<p class="added-msg">Thank you, it's been added to your cart</p>
		{/if}
	</section>

	<section class="card-Topper">
		<img src={Cds[1].img} alt="" />
		<h2>{Cds[1].name}</h2>
		<p>{Cds[1].description}</p>
		<p>{Cds[1].availability}</p>
		<p>${Cds[1].price}</p>

		<button class="btn-Ghost" onclick={() => add(Cds[1], 1)}> Add to Cart </button>

		{#if added1}
			<p class="added-msg">Thank you, it's been added to your cart</p>
		{/if}
	</section>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.grid-Main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		align-items: center;
		justify-items: center;

		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.card-Topper {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: auto;

		img {
			padding: 0;
			margin: 0;
		}
	}

	h2,
	p {
		margin: 0;
		padding: 0;
	}

	.added-msg {
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}
</style>
