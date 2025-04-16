<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<div class="縦揃え">
	<Card>
		<a class="link" href="/">Return to main page</a>
    </Card>

	<Card id="contact">
		<strong>Contact</strong> Email: <a href="mailto:tachibana@saza.pink">tachibana@saza.pink</a>
	</Card>
</div>

<div>
	<Card id="bio">
		I am 橘沙砂 (Tachibana Saza)
	</Card>
</div>

<style>
.縦揃え {
    display: flex;
    align-items: flex-start;
}

:global(#contact) {
	margin-left: auto;
}

:global(#bio) {
	
}
</style>