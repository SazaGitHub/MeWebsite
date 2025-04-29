<script>
	import { onMount } from "svelte";
	import { writable, get } from "svelte/store";

	const nanoTime = writable(0);

	let startTime = 0;
	let animationFrame = -1;
	let running = false;

	const update = () => {
		nanoTime.set(performance.now() - startTime);
		animationFrame = requestAnimationFrame(update);
	};

	const start = () => {
		if (!running) {
			startTime = performance.now() - get(nanoTime);
			animationFrame = requestAnimationFrame(update);
			running = true;
		}
	};

	const stop = () => {
		if (running) {
			cancelAnimationFrame(animationFrame);
			running = false;
		}
	};

	const reset = () => {
		cancelAnimationFrame(animationFrame);
		running = false;
		nanoTime.set(0);
	};

	onMount(() => {
		start(); // optional: auto-start on load
		return () => cancelAnimationFrame(animationFrame);
	});

	const formatTime = (time) => {
		const seconds = (time / 1000).toFixed(3);
		return `${seconds}`;
	};
</script>

<div class="clock">
	<p>NanoClock™ Precision Clock</p>
	<p>{$nanoTime && formatTime($nanoTime)}</p>
	<p>
		Behold, the sacred count of ephemeral instants since this arcane
		instrument commenced its sacred measure.
	</p>

	<div class="buttons">
		<button on:click={start}>Start</button>
		<button on:click={stop}>Stop</button>
		<button on:click={reset}>Reset</button>
	</div>
</div>

<style>
	.clock {
		font-family:
			playwrite ro,
			monospace;
		font-size: 2rem;
		text-align: center;
		margin-top: 20vh;
		margin-left: 2rem;
		margin-right: 2rem;
		color: #ffffff;
		background-color: #000;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 0 20px #ffffff;
		animation: rgbCycle 5s infinite linear;
	}

	.buttons {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		animation: rgbCycle 5s infinite linear;
	}

	button {
		background: #111;
		color: #ffffff;
		border: 2px solid #ffffff;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
		animation: rgbCycle 5s infinite linear;
	}

	button:hover {
		background: #00ffcc;
		color: #000;
	}

	@keyframes rgbCycle {
		0% {
			color: red;
		}
		33% {
			color: lime;
		}
		66% {
			color: blue;
		}
		100% {
			color: red;
		}
	}
</style>
