<script>
	import { Shirts, Hats, Stickers, Cds } from '$lib/data/warehouse/shirts';

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
</script>

<h1>Shop</h1>

<p>
	Buy some dope gear so that everyone wants to take you to bed and makes your boss want to give you
	a raise.
</p>

<h2>Cds</h2>
<main class="grid-Main">
	<section class="grid-SideScroll">
		{#each Cds as cd}
			<button class="card-Topper" onclick={() => openMerch(cd)}>
				<img src={cd.img} alt={cd.description} />
				<h2>{cd.name}</h2>
				<p class="price">${cd.price}</p>
			</button>
		{/each}
	</section>

	<h2>Shirts</h2>

	<section class="grid-SideScroll">
		{#each Shirts as shirt}
			<button class="card-Topper" onclick={() => openMerch(shirt)}>
				<img src={shirt.img} alt={shirt.description} />
				<h2>{shirt.name}</h2>
				<p class="price">${shirt.price}</p>
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
			</button>
		{/each}
	</section>

	<!-- <h2>Stickers</h2>

	<section class="grid-SideScroll">
		{#each Stickers as sticker}
			<button class="card-Topper" onclick={() => openMerch(sticker)}>
				<img src={sticker.img} alt={sticker.description} />
				<h2>{sticker.name}</h2>
				<p class="price">${sticker.price}</p>
				<div class="size-row">
					{#each sticker.sizes as stickerSize}
						<span class="size-badge">{stickerSize}</span>
					{/each}
				</div>
			</button>
		{/each}
	</section> -->

	{#if merchItem}
		<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
			<div class="modal-content" tabindex="-1" autofocus>
				<MerchItem shirt={selectedShirt} />
				<button class="btn-Ghost" onclick={closeMerch}> Close </button>
			</div>
		</dialog>
	{/if}
</main>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.grid-SideScroll {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scrollbar-width: thin;
	}
</style>
