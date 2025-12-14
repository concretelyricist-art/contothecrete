<script lang="ts">
	import { Socials } from '$lib/data/shows/contactPoints';
</script>

<main>
	<div class="socials-card">
		<h2>Follow My Music</h2>
		<p>Find Con-Crete on every major platform:</p>

		<div class="social-grid">
			{#each Socials as s}
				<a class="btn-Ghost" href={s.url} target="_blank" rel="noopener">
					{s.name}
				</a>
			{/each}
		</div>
	</div>

	<div class="video-Frame">
		<!-- Lake of fire  -->
		<iframe
			src="https://www.youtube.com/embed/ffZ4t26jLLM?si=HRLWmvdW_eHUI_Dy?wmode=transparent"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>

		<!-- Boss -->
		<iframe
			src="https://www.youtube.com/embed/LVhXAPrIUG8?si=oSqTTEDdl_satCKF?wmode=transparent"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
		<!-- One day -->
		<iframe
			src="https://www.youtube.com/embed/pK3heUpR0cw?si=LbGrLfaI4s7V3j_B?wmode=transparent"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
		<!-- Funeral procession -->
		<iframe
			src="https://www.youtube.com/embed/dEtaABZ1yAs?si=3q7cPoJjPPcbnkaX?wmode=transparent"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
		<!-- All for you -->
		<iframe
			src="https://www.youtube.com/embed/_XkgKsf_47k?si=TX2gpZJV_nvQZWBN?wmode=transparent"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</main>
<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.video-Frame {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		width: 100%;
		max-width: 1000px;
		margin: 2rem auto;
		@media only screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.video-Frame iframe {
		position: relative;
		z-index: 1;
	}

	iframe {
		display: block;
		width: 100%;
		max-width: 560px;
		aspect-ratio: 16/9;
		margin: 2rem auto;
		border-radius: 8px;
		z-index: 0;
	}

	/* SOCIAL GRID */
	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin: 1.5rem auto;
		width: 80vw;

		@media only screen and (min-width: 1024px) {
			width: 60vw;
			margin: 1.5rem auto;
		}
	}
</style>
