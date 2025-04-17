<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<div class="縦揃え">
	<Card id="contact">
		<strong>Contact</strong> Email:
		<a href="mailto:tachibana@saza.pink">tachibana@saza.pink</a>
	</Card>
</div>

<div>
	<Card id="bio">
		I am 橘沙砂 (Tachibana Saza), a Japanese-American software engineer based
		in San Francisco, California. (According to some autocomplete suggestions)
		In reality, I am an English professor who works in Japanese colleges. I
		have studied the art of Japanese since 2020, and lived there for a period
		of time where I studied calligraphy and the art of writing poetry and
		novels. I also have studied martial arts since 2009, thus as of writing
		holding a 2nd degree black belt. I was almost in a movie once. That then
		didn't happen. I am the ruiner of everything fun according to those around
		me. I am also [TITLE CARD].
	</Card>
</div>

<style>
	.縦揃え {
		display: flex;
		align-items: flex-start;
	}

	:global(#contact) {
		margin-left: auto;
		outline: solid 3px white;
	}
</style>
