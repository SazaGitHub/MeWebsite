<script lang="ts">
	import type { LayoutProps } from "./$types";
	import "../app.css";
	import Card from "$lib/Card.svelte";
	import Copyright from "$lib/Copyright.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
	import EnhancedImage from "$lib/EnhancedImage.svelte";

	let { children, data }: LayoutProps = $props();
	let { backgroundImage } = data;
</script>

<div id="backgroundImageWrapper">
	<EnhancedImage
		src={backgroundImage.src}
		alt="A photo from Elite Dangerous."
		id="backgroundImage"
	/>
</div>

<NavigationBar />

<div id="pictureLocationFormat">
	<div>
		{@render children()}
	</div>
	<div id="ffeetooter">
		{#if backgroundImage}
			<Card id="photoText">
				Photo taken at <strong>{backgroundImage.filename}</strong>.
				<br />
				Reload or go to <strong>Backgrounds</strong> to see other images
				from
				<strong>Elite Dangerous</strong>!
			</Card>
		{/if}
		<Card id="realcopyright">
			<Copyright />
		</Card>
	</div>
</div>

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

	:global(#backgroundImage) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.05);
		transform-origin: center;

		filter: blur(4px) brightness(40%);
	}

	#pictureLocationFormat {
		min-height: 100vh; /* full viewport height */
		display: flex;
		flex-direction: column; /* vertical stacking */
		justify-content: space-between; /* vertical spacing */
	}

	:global(#photoText) {
		display: inline;
		width: fit-content;
	}

	#ffeetooter {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
