<script>
	import Card from "$lib/Card.svelte";
	import { page } from "$app/state";
</script>

<svelte:head>
	<title>Error!</title>
	{#if page.error != null}
		<meta name="description" content={page.error.message} />
	{/if}
</svelte:head>

<Card>
	<h1>Error!</h1>
	{#if page.error != null}
		<h2>{page.error.message}</h2>
	{/if}
</Card>

<style>
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 1.5rem;
	}
</style>
