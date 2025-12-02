<script lang="ts">
	const images = import.meta.glob('$lib/Images/gallery/*.jpg', { eager: true });

	const imageEntries = Object.entries(images).map(([path, module]) => {
		// Extract filename from path
		const fileName = path.split('/').pop(); // e.g., "01_sunset.jpg"

		// Separate number and label
		const [rawIndex, ...labelParts] = fileName.replace('.jpg', '').split('_');
		const index = parseInt(rawIndex, 10);
		const label = labelParts.join(' ');

		return {
			src: module.default,
			index,
			label
		};
	});

	// Optional: sort by index
	imageEntries.sort((a, b) => a.index - b.index);

	let selectedIndex = $state(null);

	function openImage(image) {
		selectedIndex = imageEntries.findIndex((img) => img.src === image.src);
	}

	function closeModal() {
		selectedIndex = null;
	}

	function showNext() {
		if (selectedIndex < imageEntries.length - 1) {
			selectedIndex += 1;
		}
	}

	function showPrevious() {
		if (selectedIndex > 0) {
			selectedIndex -= 1;
		}
	}
</script>

<h1 id="pictures-heading">Travel Gallery</h1>

<p>
	These are pictures of you magnificent people near and far. Thank you all for every minute. Thank
	you all for everything.
</p>

<section class="image-gallery" aria-labelledby="pictures-heading">
	{#each imageEntries as image}
		<figure class="image-card">
			<button
				type="button"
				class="image-button"
				onclick={() => openImage(image)}
				aria-label={`View image ${image.index}: ${image.label}`}
			>
				<img src={image.src} alt={`Image ${image.index}: ${image.label}`} />
			</button>
		</figure>
	{/each}
</section>
{#if selectedIndex !== null}
	<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1">
			<h2 id="modal-title" class="visually-hidden">Image preview</h2>
			<img src={imageEntries[selectedIndex].src} alt={imageEntries[selectedIndex].label} />

			<p>{imageEntries[selectedIndex].label}</p>

			<div class="modal-nav">
				<button
					type="button"
					class="btn-Pulse"
					onclick={showPrevious}
					aria-label="Previous image"
					disabled={selectedIndex === 0}
				>
					←
				</button>
				<button
					type="button"
					class="btn-Shadow"
					onclick={closeModal}
					aria-label="Close image preview">Close</button
				>

				<button
					type="button"
					class="btn-Pulse"
					onclick={showNext}
					aria-label="Next image"
					disabled={selectedIndex === imageEntries.length - 1}
				>
					→
				</button>
			</div>
		</div>
	</dialog>
{/if}

<style>
	.image-gallery {
		column-count: 3;
		column-gap: 1rem;

		@media only screen and (min-width: 1024px) {
			width: 70vw;
			margin-left: 15vw;
		}
	}

	.image-card {
		break-inside: avoid;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.image-card img {
		width: 100%;
		height: auto;
		display: block;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.modal-content {
		background: var(--bg-2);
		padding: 1rem;
		max-width: 90vw;
		max-height: 90vh;
		overflow: auto;
		text-align: center;
		overflow: hidden;

		& p {
			padding: 0;
			margin: var(--size-5) 0 0 0;
		}

		.btn-Shadow {
			padding: var(--size-3);
		}
	}

	.modal-content img {
		max-width: 100%;
		padding: 0;
		margin: 0;
		height: auto;

		@media only screen and (min-width: 768px) {
			max-width: 70%;
		}
	}

	.modal-nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-nav button {
		border: none;
		cursor: pointer;
	}

	.modal-nav button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
