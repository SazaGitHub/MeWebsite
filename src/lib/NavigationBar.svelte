<script lang="ts">
	import Card from "$lib/Card.svelte";

	let lastScrollTop = $state(0);
	let hidden = $state(false);
</script>

<!-- on scroll up show -->
<!-- on scroll down hide -->
<svelte:window
	on:scroll={(event) => {
		const scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			hidden = true;
		} else {
			hidden = false;
		}
		lastScrollTop = scrollTop;
	}}
/>

<nav class={{ hidden }}>
	<a href="/"><strong>Home</strong></a>
	<a href="/nanocock"><strong>NanoClock™</strong></a>
	<a href="/calligraphy"><strong>Calligraphy</strong></a>
</nav>

<style>
	nav {
		display: flex;
		background-color: oklch(0.33 0.111 280.06 / 0.6);
		justify-content: space-around;
		align-items: center;
		padding: 1em;
		outline: none;
		backdrop-filter: blur(20px);

		position: sticky;
		top: 0;

		transform: translateY(0);
		transition-duration: 400ms;
		transform-style: ease-in-out;
		box-shadow: 0 0 10px oklch(0.33 0.111 280.06 / 0.6);
		z-index: 9999999;
		height: 64px;
	}
	nav.hidden {
		/* transform: translateY(-75%); */
		height: 6px;
	}
	a {
		color: oklch(0.85 0.0641 267.14);
		text-decoration: none;
	}
</style>
