<script lang="ts">
	let { src, id = "", className = "", alt = "" } = $props();
</script>

{#if typeof src === "string"}
	<img {id} class={className} {src} {alt} />
{:else}
	<enhanced:img {id} class={className} {src} {alt} />
{/if}
