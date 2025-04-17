<script lang="ts">
	import Card from "./Card.svelte";

	let lastScrollY = $state(0);
	let scrollY = $state(0);
	let hidden = $state(false);
</script>

<!-- on scroll up show -->
<!-- on scroll down hide -->
<svelte:window
	on:wheel={(event) => {
		hidden = event.deltaY > 0;
	}}
/>

<nav class={{ hidden }}>
	<a href="/"><strong>Home</strong></a>

	<a href="/about"><strong>About</strong></a>

	<a href="/calligraphy"><strong>Calligraphy</strong></a>

	<a href="/writing"><strong>Writing</strong></a>
</nav>

<style>
	nav {
		display: flex;
		background-color: oklch(0.33 0.111 280.06 / 0.6);
		justify-content: space-around;
		padding: 1em;
		outline: none;
		backdrop-filter: blur(20px);

		position: sticky;
		top: 0;

		transform: translateY(0);
		transition-duration: 200ms;
		box-shadow: 0 0 10px oklch(0.33 0.111 280.06 / 0.6);
	}
	nav.hidden {
		transform: translateY(-100%);
	}
	a {
		color: oklch(0.85 0.0641 267.14);
		text-decoration: none;
	}
</style>
