<script lang="ts">
	import type { Snippet } from "svelte";

	interface CardGridProps {
		minCardWidth?: string;
		children: Snippet;
	}

	let { minCardWidth = "300px", children }: CardGridProps = $props();
</script>

<div class="card-grid" style:--min-card-width={minCardWidth}>
	{@render children()}
</div>

<style lang="scss">
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--min-card-width), 1fr));
		gap: var(--spacing-lg);
		padding: var(--spacing-gutters);
		max-width: var(--site-max-width);
		margin: 0 auto;
	}
</style>
