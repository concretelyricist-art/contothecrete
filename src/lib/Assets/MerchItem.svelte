<script>
	import { Canvas } from '@threlte/core';
	// import SceneAlt from '$lib/SceneAlt.svelte';
	let { shirt } = $props();

	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';

	import { cart } from '$lib/stores/cart.svelte.js';

	let selectedSize = $state(null);
	let error = $state('');
	let warning = $state(false);

	function handleAddToCart() {
		// 2. Validate that a size is selected
		if (!selectedSize) {
			warning = true;
			return;
		}

		// 3. Add to global cart store
		cart.addItem(shirt, selectedSize);

		// Optional: Reset state or provide success feedback
		warning = false;
	}
</script>

<article class="merch-card">
	<div class="shirtObject">
		<Canvas>
			<T.PerspectiveCamera
				makeDefault
				position={[0, -1, 6]}
				oncreate={(ref) => {
					ref.lookAt(1, 1, 1);
				}}
			>
				<OrbitControls
					enableDamping={true}
					dampingFactor={0.05}
					rotateSpeed={0.5}
					minDistance={3}
					maxDistance={10}
					minPolarAngle={MathUtils.degToRad(0)}
					maxPolarAngle={MathUtils.degToRad(90)}
				/>
			</T.PerspectiveCamera>

			<T.AmbientLight intensity={1} />
			<T.DirectionalLight position={[1, 5, 1]} castShadow />

			<!-- <Shirt /> -->

			<GLTF url={shirt.url} />
		</Canvas>
	</div>
	<h2>{shirt.name}</h2>

	<p><strong>Price:</strong> ${shirt.price}</p>

	<h3>Available Sizes</h3>
	<div class="size-row">
		{#each shirt.sizes as size}
			<span class="size-badge" class:active={selectedSize === size}>
				<button
					class="size-btn"
					onclick={() => {
						selectedSize = size;
						warning = false; // Clear warning when user selects a size
					}}
				>
					{size}
				</button></span
			>
		{/each}
	</div>

	{#if shirt.description}
		<p>{shirt.description}</p>
	{/if}

	{#if error}
		<p style="color: red;">{error}</p>
	{/if}

	<button class="btn-Ghost" onclick={handleAddToCart}>
		Add to Cart - ${shirt.price}
	</button>
</article>

<style>
	.merch-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.shirtObject {
		height: 400px;
		position: relative;
	}

	h2,
	h3,
	p {
		margin: 0.5rem 1rem;
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

	.size-btn {
		background: transparent;
		border: none;
	}

	/* Active state styling (when selected) */

	.size-badge.active {
		background: var(--color-active);
		transform: scale(1.25);
	}
</style>
