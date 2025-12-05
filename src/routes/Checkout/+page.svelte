<script>
	import { cart } from '$lib/stores/cart.svelte.js';
</script>

<div class="cart-content">
	<div class="cart-header">
		<h2>Your Cart ({cart.totalItems})</h2>
	</div>
	<!-- NETLIFY CONTACT FORM -->
	<!-- <form
		name="checkout"
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
		data-netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="checkout" />

		<div style="display:none">
			<input name="bot-field" />
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
							<button type="button" on:click={() => cart.updateQuantity(item.cartItemId, -1)}
								>-</button
							>
							<span>{item.quantity}</span>
							<button type="button" on:click={() => cart.updateQuantity(item.cartItemId, 1)}
								>+</button
							>
						</div>
					</li>

					<input type="hidden" name="item-name" value={item.name} />
					<input type="hidden" name="item-size" value={item.selectedSize} />
					<input type="hidden" name="item-price" value={item.price} />
					<input type="hidden" name="item-quantity" value={item.quantity} />

					<input type="hidden" name="cart-data" value={JSON.stringify(cart.items)} />
					<input type="hidden" name="total-items" value={cart.totalItems} />
					<input type="hidden" name="total-price" value={cart.totalPrice.toFixed(2)} />
				{/each}
			</ul>

			<div class="cart-footer">
				<div class="total-row">
					<span>Total:</span>
					<span>${cart.totalPrice.toFixed(2)}</span>
					<input type="hidden" name="total-items" value={cart.totalItems} />
					<input type="hidden" name="total-price" value={cart.totalPrice.toFixed(2)} />
				</div>
				<button type="submit" class="btn-checkout">Checkout</button>
			</div>
		{/if}
	</form> -->
</div>
<form name="checkout" method="POST" data-netlify="true" netlify-honeypot="bot-field">
	<input type="hidden" name="form-name" value="checkout" />
	<div style="display:none">
		<input name="bot-field" />
	</div>

	{#each cart.items as item, i (item.cartItemId)}
		<input type="hidden" name={`item-${i}-name`} value={item.name} />
		<input type="hidden" name={`item-${i}-size`} value={item.selectedSize} />
		<input type="hidden" name={`item-${i}-price`} value={item.price} />
		<input type="hidden" name={`item-${i}-quantity`} value={item.quantity} />
	{/each}

	<input type="hidden" name="total-items" value={cart.totalItems} />
	<input type="hidden" name="total-items" value={cart} />
	<input type="hidden" name="total-price" value={cart.totalPrice.toFixed(2)} />

	<button type="submit">Checkout</button>
</form>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.cart-content {
		width: 100vw;
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
