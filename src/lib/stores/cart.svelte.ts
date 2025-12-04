// $lib/stores/cart.svelte.js
import { onMount } from 'svelte';

class CartStore {
	items = $state([]);

	constructor() {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('cart_v1');
			if (saved) this.items = JSON.parse(saved);
		}
	}

	get totalPrice() {
		return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
	}

	get totalItems() {
		return this.items.reduce((total, item) => total + item.quantity, 0);
	}

	addItem(product, size) {
		const cartItemId = `${product.id}-${size}`;
		const existingItem = this.items.find((i) => i.cartItemId === cartItemId);

		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			this.items.push({
				...product,
				cartItemId,
				selectedSize: size,
				quantity: 1
			});
		}
		this.save();
	}

	removeItem(cartItemId) {
		this.items = this.items.filter((i) => i.cartItemId !== cartItemId);
		this.save();
	}

	updateQuantity(cartItemId, delta) {
		const item = this.items.find((i) => i.cartItemId === cartItemId);
		if (item) {
			item.quantity += delta;
			if (item.quantity <= 0) this.removeItem(cartItemId);
		}
		this.save();
	}

	clear() {
		this.items = [];
		this.save();
	}

	save() {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart_v1', JSON.stringify(this.items));
		}
	}
}

export const cart = new CartStore();
