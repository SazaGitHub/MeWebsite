<script lang="ts">
	let { children, id = "", className = "" } = $props();
</script>

<div id={id ?? ""} class="card {className}">
	{@render children()}
</div>

<style>
	.card {
		display: inline-flex;
		background-color: oklch(0 0 0 / 0.7);
		display: inline-block;
		margin: 1em;
		padding: 1em;
		border-radius: 0.5em;
	}
</style>
