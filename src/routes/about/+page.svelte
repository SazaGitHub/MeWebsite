<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

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
