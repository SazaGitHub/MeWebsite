<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<div class="縦揃え">
	<Card id="contact">
		<strong>Personal Information</strong>
		<br />
		Email:
		<a href="mailto:tachibana@saza.pink">tachibana@saza.pink</a>
		<br />
		Music Stats:
		<a href="https://listenbrainz.org/user/Saza/">Listen Brainz</a>
		<br />
		Youtube:
		<a href="https://www.youtube.com/@sazatachibana">Saza沙砂</a>
		<br />
		Twitch:
		<a href="https://www.twitch.tv/sazatachibana">SazaTachibana</a>
		<br />
		Discord: tachibanasaza
	</Card>
</div>

<Card
	>"As a text based AI language model I am unable to make a header for your
	personal website." - Anonymous LLM
</Card>

<Card id="bio">
	I am 橘沙砂 (Tachibana Saza), a professor of English in Japan at the
	collegiate level. I have studied Japanese since 2020, and lived in Japan for
	a period of time where I studied calligraphy and wrote poetry and novels in
	both English and Japanese. I also have studied martial arts since 2009, and
	as of writing hold a 2nd degree black belt. My focus in martial arts
	primarily falls under modern and traditional weapons. I was almost in a movie
	once. That then didn't end up happening. I am also [TITLE CARD].
</Card>

<Card id="bio">
	橘沙砂と申します。儂は、日本で大学の教授で働きます。2020年から日本語を学習しまして、少々日本に住みました。
	あの時に書道を学んだり詩や小説を書いたり日本語と英語で両方しました。
	そうして、2009年より格闘技の訓練が始まりまして、こちらを書く時に黒帯の二段を持ちしております。
	格闘技の中で伝統的と現代的な武器の専門家です。
	そういえば、映画に出そうになった事があるがそうはなりませんでした。最後に僕が[題字]
</Card>

<style>
	:global(#bio) {
		display: flex;
		font-family: "Yu Mincho", Times, serif;
		text-align: justify;
		margin-right: 2rem;
	}

	.縦揃え {
		display: flex;
		align-items: flex-start;
		float: right;
		margin-left: 1rem;
	}

	:global(#contact) {
		margin-left: auto;
		outline: solid 3px white;
	}
</style>
