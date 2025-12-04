<script>
	import { Shirts, Hats, Stickers } from '$lib/data/warehouse/shirts';

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

	import Cart from '$lib/Assets/Cart.svelte';
	import { cart } from '$lib/stores/cart.svelte.js';

	let cartOpen = $state(false);
</script>

<h1>Shop</h1>

<p>
	Buy some dope gear so that everyone wants to take you to bed and makes your boss want to give you
	a raise.
</p>

<h2>Shirts</h2>

<main class="grid-Main">
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

	<h2>Hats</h2>

	<section class="merch-scroll">
		{#each Hats as hat}
			<button class="card-Topper" onclick={() => openMerch(hat)}>
				<img src={hat.img} alt={hat.description} />
				<h2>{hat.name}</h2>
				<p class="price">${hat.price}</p>
				<div class="size-row">
					{#each hat.sizes as size}
						<span class="size-badge">{size}</span>
					{/each}
				</div>
			</button>
		{/each}
	</section>

	<h2>Stickers</h2>

	<section class="merch-scroll">
		{#each Stickers as sticker}
			<button class="card-Topper" onclick={() => openMerch(sticker)}>
				<img src={sticker.img} alt={sticker.description} />
				<h2>{sticker.name}</h2>
				<p class="price">${sticker.price}</p>
				<div class="size-row">
					{#each sticker.sizes as size}
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

	<Cart isOpen={cartOpen} close={() => (cartOpen = false)} />
</main>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.cart-trigger {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 100;
		padding: 0.75rem 1.5rem;
		background: #ff1a1a;
		color: white;
		border: 2px solid #000;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	}
	.cart-trigger:hover {
		transform: scale(1.05);
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
		width: fit-content;
		padding: 0.25rem 0.5rem;
		border-radius: 25%;
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
</style>
