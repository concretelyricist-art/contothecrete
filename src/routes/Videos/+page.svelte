<script lang="ts">
	import { Socials } from '$lib/data/shows/contactPoints';
</script>

<div class="socials-card">
	<h2>Follow My Music</h2>
	<p>Find Con-Crete on every major platform:</p>

	<div class="social-grid">
		{#each Socials as s}
			<a class="social-btn" href={s.url} target="_blank" rel="noopener">
				{s.name}
			</a>
		{/each}
	</div>
</div>

<!-- Lake of fire  -->
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/ffZ4t26jLLM?si=HRLWmvdW_eHUI_Dy"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<!-- Boss -->
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/LVhXAPrIUG8?si=oSqTTEDdl_satCKF"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
<!-- One day -->
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/pK3heUpR0cw?si=LbGrLfaI4s7V3j_B"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
<!-- Funeral procession -->
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/dEtaABZ1yAs?si=3q7cPoJjPPcbnkaX"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
<!-- All for you -->
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/_XkgKsf_47k?si=TX2gpZJV_nvQZWBN"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	iframe {
		margin: 2rem 1rem;
		border-radius: 8px;
	}

	/* SOCIAL GRID */
	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin: 1.5rem auto;
		width: 80vw;
	}

	.social-btn {
		display: block;
		padding: 0.8rem;
		border-radius: 8px;
		background: #111;
		border: 1px solid #444;
		color: var(--txt-1);
		text-decoration: none;
		font-weight: bold;
		transition:
			background 0.15s,
			transform 0.15s;
		box-shadow: 0 0 8px rgba(255, 0, 0, 0.25);
	}
	.social-btn:hover {
		background: #222;
		transform: translateY(-3px);
	}
</style>
