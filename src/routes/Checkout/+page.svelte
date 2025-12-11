<script lang="ts">
	import { PUBLIC_SQUARE_APPLICATION_ID, PUBLIC_SQUARE_LOCATION_ID } from '$env/static/public';
	import { cart } from '$lib/stores/cart.svelte.js';
	import { goto } from '$app/navigation';
	import { Canvas } from '@threlte/core';
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';

	let form = $state({
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		country: 'US'
	});

	let payments = $state<any>(null);
	let card = $state<any>(null);
	let status = $state('Waiting');

	/* 🦕  🦖🦖🦖 🦕 🦕 Load Data  💀= 💣 🌠 */
	async function loadSquareSdk() {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
			script.onload = () => resolve((window as any).Square);
			script.onerror = reject;
			document.head.appendChild(script);
		});
	}

	/* 🦕  🦖🦖🦖 🦕 🦕 Payment  💀= 💣 🌠 */
	async function handlePayment() {
		status = 'Tokenizing...';
		const result = await card.tokenize();

		if (result.status !== 'OK') {
			status = 'Card tokenize failed: ' + (result.errors?.[0]?.message ?? 'Unknown');
			return;
		}

		status = 'Paying...';

		const simplifiedItems = cart.items.map((item) => ({
			name: item.name,
			size: item.selectedSize.label,
			price: item.price,
			quantity: item.quantity,
			catalogObjectId: item.selectedSize.catalogObjectId
		}));

		const response = await fetch('/api/pay', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				token: result.token,
				amount: Math.round(cart.totalPrice * 100),
				items: simplifiedItems,
				postal: {
					addressLine1: form.address1,
					addressLine2: form.address2,
					city: form.city,
					state: form.state,
					zip: form.zip,
					country: form.country
				}
			})
		});

		const data = await response.json();

		if (data.ok) {
			status = 'Payment successful!';
			cart.clear();

			goto('/pay-success');
		} else {
			status = 'Payment failed: ' + data.error;
		}
	}

	$effect(async () => {
		const SquareSdk = await loadSquareSdk();

		payments = await SquareSdk.payments(PUBLIC_SQUARE_APPLICATION_ID, PUBLIC_SQUARE_LOCATION_ID);

		card = await payments.card();
		await card.attach('#card-container'); // safe now
	});
</script>

<h1>Checkout</h1>

<div>
	<div>
		<h2>Your Cart ({cart.totalItems})</h2>
	</div>

	{#if cart.items.length === 0}
		<div class="empty-state">
			<p>Your cart is empty. Go get that dope gear.</p>
		</div>
	{:else}
		<section class="cart-Classic">
			{#each cart.items as item (item.cartItemId)}
				<article class="cart-item">
					<div class="model-preview">
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

							<GLTF url={item.url} />
						</Canvas>
					</div>

					<div class="cart-info">
						<h3>{item.name}</h3>
						<p class="size-label">{item.selectedSize.label}</p>
						<p class="price">${item.price}</p>
						<p class="description">{item.description}</p>

						<div class="quantity-controls">
							<button class="qty-btn" onclick={() => cart.updateQuantity(item.cartItemId, -1)}
								>-</button
							>

							<span class="qty-display">{item.quantity}</span>

							<button class="qty-btn" onclick={() => cart.updateQuantity(item.cartItemId, 1)}
								>+</button
							>
						</div>
					</div>
				</article>
			{/each}
		</section>

		<h1>Checkout</h1>

		<form class="classicForm" onsubmit={handlePayment}>
			<label>
				<input bind:value={form.address1} required placeholder="Address(Main)" />
			</label>
			<label>
				<input bind:value={form.address2} placeholder="Address(Secondary)" />
			</label>
			<label>
				<input bind:value={form.city} required placeholder="City" />
			</label>
			<label>
				<input bind:value={form.state} required placeholder="State" />
			</label>
			<label>
				<input bind:value={form.zip} required placeholder="Zip" />
			</label>
			<label>
				<input bind:value={form.country} required placeholder="Country" />
			</label>

			<div class="form-Footer">
				<div class="total-row">
					<p><span>Total: ${cart.totalPrice.toFixed(2)}</span></p>
				</div>

				<div id="card-container"></div>

				<button type="submit" class="btn-Ghost">Checkout</button>
				<p>{status}</p>
			</div>
		</form>
	{/if}
</div>

<div class="bottom-Line"></div>

<style>
	.empty-state {
		padding: 2rem;
		text-align: center;
	}
</style>
