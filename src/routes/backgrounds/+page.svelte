<script lang="ts">
	import Card from "$lib/Card.svelte";
	import EnhancedImage from "$lib/EnhancedImage.svelte";

	const images = (
		Object.entries(
			import.meta.glob(
				"/src/BackgroundImages/*.{bmp,avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
				{
					eager: true,
				},
			),
		) as any[]
	).map(([filename, image]) => ({
		filename,
		src: image ? image.default : null,
	}));

	let selectedImage: string | null = null;

	function openImage(src: string) {
		selectedImage = src;
	}

	function closeImage() {
		selectedImage = null;
	}
</script>

<div>
	<Card id="calligraphy info">
		All photos are taken from the game Elite Dangerous. I enjoy my time as a
		galactic photographer when I play this game.
	</Card>
</div>

<div id="gallery">
	{#each images as { src }}
		{#if src}
			<div
				class="imageLink"
				role="button"
				tabindex="0"
				aria-label="Open calligraphy image"
				on:click={() => openImage(src)}
				on:keydown={(e) => e.key === "Enter" && openImage(src)}
			>
				<EnhancedImage className="imageImg" {src} />
			</div>
		{/if}
	{/each}
</div>

{#if selectedImage}
	<div
		class="overlay"
		role="dialog"
		aria-modal="true"
		aria-label="Enlarged calligraphy image"
		on:click={closeImage}
	>
		<img
			src={selectedImage}
			class="focused-image"
			alt="Enlarged calligraphy"
		/>
	</div>
{/if}

<style>
	#gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.imageLink {
		display: flex;
		max-width: calc(25% - 1rem);
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
		cursor: pointer;
		max-height: 50vh + 5rem;
		outline: none;
	}

	.imageLink:focus {
		box-shadow: 0 0 0 3px #fff3;
	}

	:global(.imageImg) {
		height: 100%;
		object-fit: contain;
	}

	.image:hover {
		transform: scale(1.05);
		filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
		transition: transform 0.3s ease-in-out;
		z-index: 1;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99999999;
		cursor: zoom-out;
	}

	.focused-image {
		max-width: 90vw;
		max-height: 90vh;
		box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
		border-radius: 10px;
	}
</style>
