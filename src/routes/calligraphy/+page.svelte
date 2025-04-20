<script lang="ts">
	import Card from "$lib/Card.svelte";
	import EnhancedImage from "$lib/EnhancedImage.svelte";
	import Masonry from "svelte-bricks";

	const images = (
		Object.entries(
			import.meta.glob(
				"/src/CalligraphyImages/*.{bmp,avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
				{
					eager: true,
					query: {
						enhanced: true,
					},
				},
			),
		) as any[]
	).map(([filename, image]) => ({
		filename,
		src: image ? image.default : null,
	}));

	let [minColWidth, maxColWidth, gap] = [200, Infinity, 20];
</script>

<div>
	<Card id="calligraphy info">
		I started calligraphy while in a Japanese college for the first time, and
		ever since then it has become an important part of my life. I primarily
		write in what is called 草書 (Sousho), meaning "grass write" which is a
		highly cursive style.
	</Card>
</div>

<div id="gallery">
	{#each images as { filename, src }}
		{#if src}
			<a class="imageLink" href={filename} target="_blank">
				<EnhancedImage className="imageImg" {src} />
			</a>
		{/if}
	{/each}
</div>

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

		max-width: calc(33% - 2rem);
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
		cursor: pointer;
		max-height: 50vh;
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
</style>
