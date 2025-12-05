<script>
	import img1 from '$lib/Images/con12.jpg';
</script>

<main class="showPage" style={`background-image: url(${img1});`}>
	<h1>Con-crete!</h1>

	<h3>
		Age : 783 years old<br />
		Height : 12'3"<br />
		Weight : 2 tons<br />
		Likes : Long walks on the beach, crushing small buildings and sunsets<br />
		Dislikes : Being chipped away at, water and pigeons<br />
	</h3>

	<p>
		The story of our band didn’t begin on a stage or in a studio — it started in small rooms filled
		with mismatched gear, borrowed cables, and late-night conversations about what music should feel
		like. Before a single song was recorded, we were just a couple of friends trying to make sense
		of the noise in our heads, chasing that moment when a chord progression hits just right and
		everything else falls away. Those early days weren’t glamorous, but they were honest, and that
		honesty still sits at the core of everything we create.
	</p>

	<p>
		We spent years experimenting, shifting between genres, and carving out our identity one messy
		demo at a time. There were nights when we played the same riff for hours, changing tiny details
		until something clicked and we all looked at each other with that silent, shared “there it is”.
		The process taught us patience and trust — trust in each other, trust in our instincts, and
		trust that the music would guide us if we stayed open to it.
	</p>

	<p>
		What kept us moving forward wasn’t a clear plan but a shared obsession: the need to write songs
		that actually meant something. Music has always been more than entertainment for us. It’s a way
		to process what life throws at you — the heavy moments, the strange ones, the ones you can’t
		quite talk about. Each track became its own little confession, a snapshot of whatever stage of
		life we were moving through.
	</p>

	<p>
		Our first shows were small enough that we could recognize every face in the room, but even then,
		the energy was unmistakable. People connected with the rawness of the sound, the imperfections,
		and the stories behind the songs. Those early supporters were a reminder that music doesn’t need
		fireworks or production tricks to matter — it just needs to be real. And real is something we’ve
		always had in abundance.
	</p>

	<p>
		As the band grew, so did the scope of our projects. We began working with new collaborators,
		experimenting with different recording techniques, and pushing our sound in directions we never
		expected in the beginning. Every album or single became a snapshot of who we were at that time —
		a reflection of our growth both musically and personally. We’re proud of that evolution, because
		it shows that we’re not afraid to change, question ourselves, or start fresh when the music asks
		for it.
	</p>

	<p>
		The road has had its fair share of challenges. Long drives, unpredictable gigs, equipment
		failures, and those weird moments where everything seems to go wrong at once — we’ve been
		through all of it. But somehow, those chaotic nights became the stories we laugh about later.
		They reminded us why we started this in the first place: not for perfection, but for connection,
		for the rush of giving everything onstage, and for the simple joy of creating something
		together.
	</p>

	<p>
		What keeps us inspired today is the community that has grown around our music. Over the years,
		we’ve met people who found comfort, motivation, or clarity in songs that started as our own
		private journals. Knowing that something we made in a quiet room can echo out into someone
		else’s life is still the most surreal and rewarding part of this whole journey. It’s a
		relationship we never take for granted.
	</p>

	<p>
		As we look ahead, our goal is simple: keep growing, keep experimenting, and keep telling the
		truth through our music. We’re excited for what’s coming next — the new songs, the new stages,
		and the new people we’ll get to share it all with. The story is still being written, and every
		chapter feels like a chance to push a little further and say something worth hearing. We hope
		you’ll be there with us for the next part of the journey.
	</p>
</main>
<div class="bottom-Line"></div>

<style>
	main {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		margin: 0;
		padding: 5rem 0;

		@media only screen and (min-width: 1440px) {
			background-size: 70%;
		}
	}

	h1,
	h3 {
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);

		width: fit-content;
		margin: 2rem auto;
		padding: 1rem;
	}

	p {
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);
		width: 70%;
		margin: 2rem auto;
		padding: 1rem;

		@media only screen and (min-width: 1440px) {
			width: 50%;
		}
	}
</style>
