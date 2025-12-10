<script lang="ts">
	import { PUBLIC_SQUARE_APPLICATION_ID, PUBLIC_SQUARE_LOCATION_ID } from '$env/static/public';
	import { cart } from '$lib/stores/cart.svelte.js';
	import { goto } from '$app/navigation';

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

	async function loadSquareSdk() {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
			script.onload = () => resolve((window as any).Square);
			script.onerror = reject;
			document.head.appendChild(script);
		});
	}

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
			size: item.selectedSize,
			price: item.price,
			quantity: item.quantity
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

<div class="cart-content">
	<div class="cart-header">
		<h2>Your Cart ({cart.totalItems})</h2>
	</div>

	{#if cart.items.length === 0}
		<div class="empty-state">
			<p>Your cart is empty. Go get that dope gear.</p>
		</div>
	{:else}
		<ul class="cart-list">
			{#each cart.items as item (item.cartItemId)}
				<li class="cart-item">
					<div class="item-details">
						<h3>{item.name}</h3>
						<span class="badge">{item.selectedSize}</span>
						<p>${item.price}</p>
						<p>{item.description}</p>
					</div>
					<div class="qty-controls">
						<button onclick={() => cart.updateQuantity(item.cartItemId, -1)}>-</button>
						<span>{item.quantity}</span>
						<button onclick={() => cart.updateQuantity(item.cartItemId, 1)}>+</button>
					</div>
				</li>
			{/each}
		</ul>

		<h1>Checkout</h1>

		<form class="classicForm" onsubmit={handlePayment}>
			<label>
				Address Line 1
				<input bind:value={form.address1} required />
			</label>
			<label>
				Address Line 2
				<input bind:value={form.address2} />
			</label>
			<label>
				City
				<input bind:value={form.city} required />
			</label>
			<label>
				State
				<input bind:value={form.state} required />
			</label>
			<label>
				ZIP
				<input bind:value={form.zip} required />
			</label>
			<label>
				Country
				<input bind:value={form.country} required />
			</label>

			<div class="cart-footer">
				<div class="total-row">
					<span>Total:</span>
					<span>${cart.totalPrice.toFixed(2)}</span>
				</div>

				<div id="card-container"></div>

				<button type="submit" class="btn-checkout">Checkout</button>
				<p>{status}</p>
			</div>
		</form>
	{/if}
</div>

<style>
	.cart-content {
		max-width: 100vw;
		background: var(--bg-2, #222);
		color: var(--txt-1, #fff);
		height: 100%;
		display: flex;
		flex-direction: column;
		box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
		padding: 1.5rem;
	}
	.cart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		border-bottom: 1px solid #444;
		padding-bottom: 1rem;
	}
	.cart-list {
		flex: 1;
		overflow-y: auto;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.cart-item {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		align-items: center;
		background: rgba(255, 255, 255, 0.05);
		padding: 0.5rem;
		border-radius: 4px;
	}
	.shirtObject {
		height: 200px;
		position: relative;
	}
	.item-details {
		flex: 1;
	}
	.item-details h3 {
		margin: 0;
		font-size: 1rem;
	}
	.badge {
		background: #ff1a1a;
		color: #000;
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: bold;
	}
	.qty-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.qty-controls button {
		width: 24px;
		height: 24px;
		cursor: pointer;
	}
	.cart-footer {
		border-top: 1px solid #444;
		padding-top: 1rem;
		margin-top: auto;
	}
	.total-row {
		display: flex;
		justify-content: space-between;
		font-size: 1.25rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
	.btn-checkout {
		width: 100%;
		padding: 1rem;
		background: #ff1a1a;
		border: none;
		font-weight: bold;
		cursor: pointer;
	}
	.btn-close {
		background: transparent;
		border: 1px solid #fff;
		color: #fff;
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
</style>
