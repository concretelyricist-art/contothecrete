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
	<section class="grid-SideScroll">
		{#each Shirts as shirt}
			<button class="card-Topper" onclick={() => openMerch(shirt)}>
				<img src={shirt.img} alt={shirt.description} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>
				<div class="size-row">
					{#each shirt.sizes as size}
						<span class="size-badge">{size.label}</span>
					{/each}
				</div>
			</button>
		{/each}
	</section>

	<h2>Hats</h2>

	<section class="grid-SideScroll">
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

	<section class="grid-SideScroll">
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
	.grid-SideScroll {
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

	.grid-SideScroll::-webkit-scrollbar {
		display: none;
	}
</style>
