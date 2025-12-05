<script lang="ts">
	const socials = [
		{ name: 'Facebook', url: 'https://www.facebook.com/THEDARKMINISTER' },
		{ name: 'Spotify', url: 'https://open.spotify.com/artist/653FzE8oWvxI1EvIYX8dUz' },
		{ name: 'Bandcamp', url: 'https://contothecrete.bandcamp.com/' },
		{ name: 'Apple Music', url: 'https://music.apple.com/us/artist/con-crete/1490522113' },
		{ name: 'Last.fm (Con-crete)', url: 'https://www.last.fm/music/Con-crete' },
		{
			name: 'Last.fm (Bloodshot + Con-Crete)',
			url: 'https://www.last.fm/music/Bloodshot+&+Con-Crete'
		},
		{ name: 'YouTube Music', url: 'https://www.youtube.com/channel/UCJmTU-WSjgIof5nYhZc7-cg' },
		{ name: 'YouTube Videos', url: 'https://www.youtube.com/concreteofficial' }
	];
</script>

<section class="contact-page">
	<h1>Contact & Follow</h1>

	<div class="contact-card">
		<h2>Contact Me</h2>
		<p>For booking, collaborations, or business inquiries:</p>

		<form class="classicForm" name="contact" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />

			<div style="display:none">
				<input name="bot-field" />
			</div>

			<label>
				Your Name
				<input type="text" name="name" required />
			</label>

			<label>
				Your Email
				<input type="email" name="email" required />
			</label>

			<label>
				Message
				<textarea name="message" required></textarea>
			</label>

			<button class="btn-Ghost" type="submit">Send Message</button>
		</form>
	</div>

	<div class="socials-card">
		<h2>Follow My Music</h2>
		<p>Find Con-Crete on every major platform:</p>

		<div class="social-grid">
			{#each socials as s}
				<a class="social-btn" href={s.url} target="_blank" rel="noopener">
					{s.name}
				</a>
			{/each}
		</div>
	</div>
</section>

<!--svelte-ignore css_unused_selector -->
<style>
	.threeDBox {
		height: 100vh;
	}
	.contact-page {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		color: var(--txt-1);
	}

	h1 {
		font-size: 2.8rem;
		margin-bottom: 2rem;
		text-transform: uppercase;
		letter-spacing: 3px;
	}

	h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: var(--accent-1, #ff1a1a);
	}

	/* CARDS */
	.contact-card,
	.socials-card,
	.merch-card {
		background: rgba(0, 0, 0, 0.45);
		border: 1px solid #333;
		padding: 2rem;
		margin-bottom: 2rem;
		border-radius: 12px;
		box-shadow: 0 0 20px rgba(255, 0, 0, 0.15);
		backdrop-filter: blur(6px);
	}

	/* EMAIL BUTTON */
	.email-btn {
		display: inline-block;
		padding: 0.8rem 1.4rem;
		margin-top: 1rem;
		background: #ff1a1a;
		color: black;
		font-weight: bold;
		border-radius: 8px;
		text-decoration: none;
		transition:
			transform 0.2s ease,
			background 0.2s;
	}
	.email-btn:hover {
		transform: scale(1.05);
		background: #ff4d4d;
	}

	/* SOCIAL GRID */
	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin-top: 1.5rem;
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

	/* MERCH */
	.merch-grid {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.merch-item {
		padding: 0.8rem 1.4rem;
		border: 1px solid #444;
		background: #181818;
		color: var(--txt-1);
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
