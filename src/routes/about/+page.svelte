<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<div class="縦揃え">
	<Card>HELLO????</Card>

	<Card>
		<a class="link" href="/">Return to main page</a>
    </Card>

	<Card id="contact">
		<strong>Contact</strong> Email: <a href="mailto:tachibana@saza.pink">Tachibana@saza.pink</a>
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
</style>