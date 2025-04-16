<script lang="ts">
	import type { LayoutProps } from "./$types";
	import "../app.css";
	import Card from "$lib/Card.svelte";

	let { children, data }: LayoutProps = $props();
	let { backgroundImage } = data;
</script>

<div id="backgroundImageWrapper">
	{#if backgroundImage}
		{#if typeof backgroundImage.src === "string"}
			<img src={backgroundImage.src} alt="some alt text" id="backgroundImage"/>
		{:else}
			<enhanced:img src={backgroundImage.src} alt="some alt text" id="backgroundImage"/>
		{/if}
	{/if}
</div>

<div id = "pictureLocationFormat">
	<div>
		{@render children()}
	</div> <div id="ffeetooter">
	{#if backgroundImage}
		<Card id="photoText">
			Photo taken at {backgroundImage.filename}
		</Card>
	{/if}
	<Card id="realcopyright">
		<strong>©Saza LLC</strong>
	</Card>
</div> </div>

<!-- background image blur and settings -->
<style>
	#backgroundImageWrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
	}

	#backgroundImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.05);
		transform-origin: center;

		filter: blur(4px) brightness(40%);
	}

	#pictureLocationFormat {
		min-height: 100vh;        /* full viewport height */
		display: flex;
		flex-direction: column;   /* vertical stacking */
		justify-content: space-between;
	}

	:global(#photoText) {
		display: inline;
		width: fit-content;
	}

	#ffeetooter {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>