<script lang="ts">
	import { Socials } from '$lib/data/shows/contactPoints';
</script>

<section class="contact-page">
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
			{#each Socials as s}
				<a class="btn-Ghost" href={s.url} target="_blank" rel="noopener">
					{s.name}
				</a>
			{/each}
		</div>
	</div>
</section>

<div class="bottom-Line"></div>

<!--svelte-ignore css_unused_selector -->
<style>
	.contact-page {
		max-width: 100vw;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr;
		@media (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.contact-card {
		p {
			padding: 0;
			margin: 0;
		}
	}

	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin-top: 1.5rem;
	}
</style>
