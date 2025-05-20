<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<div class="縦揃え">
	<Card id="contact">
		<strong>Personal Information</strong><br />
		Email: <a href="mailto:tachibana@saza.pink">tachibana@saza.pink</a><br />
		Music Stats:
		<a href="https://listenbrainz.org/user/Saza/">Listen Brainz</a><br />
		Youtube: <a href="https://www.youtube.com/@sazatachibana">Saza沙砂</a><br
		/>
		Twitch: <a href="https://www.twitch.tv/sazatachibana">SazaTachibana</a><br
		/>
		Discord: tachibanasaza
	</Card>
</div>

<div class="bio-column">
	<Card id="bio">
		"As a text based AI language model I am unable to make a header for your
		personal website." - Anonymous LLM
	</Card>

	<Card id="bio">
		I am 橘沙砂 (Tachibana Saza), a professor of English in Japan at the
		collegiate level. I have studied Japanese since 2020, and lived in Japan
		for a period of time where I studied calligraphy and wrote poetry and
		novels in both English and Japanese. I also have studied martial arts
		since 2009, and as of writing hold a 2nd degree black belt. My focus in
		martial arts primarily falls under modern and traditional weapons. I was
		almost in a movie once. That then didn't end up happening. I am also
		[TITLE CARD].
	</Card>

	<Card id="bio">
		橘沙砂と申します。儂は、日本で大学の教授で働きます。2020年から日本語を学習しまして、少々日本に住みました。
		あの時に書道を学んだり詩や小説を書いたり日本語と英語で両方しました。
		そうして、2009年より格闘技の訓練が始まりまして、こちらを書く時に黒帯の二段を持ちしております。
		格闘技の中で伝統的と現代的な武器の専門家です。
		そういえば、映画に出そうになった事があるがそうはなりませんでした。最後に僕が[題字]
	</Card>
</div>

<style>
	/* Layout container to hold both elements */
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(.縦揃え),
	.bio-column {
		display: inline-block;
		vertical-align: top;
	}

	:global(.縦揃え) {
		width: auto;
		max-width: 300px;
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.bio-column {
		width: calc(100% - 340px); /* 300px + margins, adjust if you change */
	}

	:global(#bio) {
		display: flex;
		font-family: "Yu Mincho", Times, serif;
		text-align: justify;
		margin-bottom: 1rem;
	}

	:global(#contact) {
		outline: solid 3px white;
	}

	/* Responsive */
	@media (max-width: 768px) {
		:global(.縦揃え),
		.bio-column {
			display: block;
			width: 100%;
		}

		:global(.縦揃え) {
			order: -1;
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 1rem;
		}

		.bio-column {
			width: 100%;
		}
	}
</style>
