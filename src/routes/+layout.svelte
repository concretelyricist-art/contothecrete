<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	import Header from '$lib/Assets/Menu.svelte';
	import Footer from '$lib/Assets/Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
