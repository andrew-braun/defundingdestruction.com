<script lang="ts">
	interface StatusProps {
		text: string;
		variant?: "success" | "error" | "warning" | "info";
	}

	interface CardProps {
		title: string;
		subtitle?: string;
		tags?: string[];
		content?: string;
		status?: StatusProps;
	}

	let {
		title,
		subtitle = undefined,
		tags = [],
		content = undefined,
		status = undefined
	}: CardProps = $props();
</script>

<div class="card">
	<div class="card-header">
		<h3>{title}</h3>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
		{#if tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
	<div class="card-body">
		{#if content}
			<p class="content">{content}</p>
		{/if}
		{#if status}
			<div
				class="status"
				class:status-success={status.variant === "success"}
				class:status-error={status.variant === "error"}
				class:status-warning={status.variant === "warning"}
				class:status-info={status.variant === "info"}
			>
				{status.text}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		background: var(--color-background-light);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--light-shadow-md);
		padding: var(--spacing-lg);
		transition:
			transform var(--transition-md),
			box-shadow var(--transition-md);

		&:hover {
			transform: translateY(-2px);
			box-shadow: var(--light-shadow-lg);
		}
	}

	.card-header {
		margin-bottom: var(--spacing-md);

		h3 {
			margin: 0 0 var(--spacing-xs) 0;
			font-size: var(--font-size-lg);
			color: var(--color-text-light);
		}
	}

	.subtitle {
		margin: 0 0 var(--spacing-xs) 0;
		color: var(--color-text-mid);
		font-size: var(--font-size-sm);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		margin-top: var(--spacing-sm);
	}

	.tag {
		display: inline-block;
		padding: var(--spacing-xs) var(--spacing-md);
		background: var(--color-background-mid);
		border-radius: var(--border-radius-xl);
		font-size: var(--font-size-xs);
		color: var(--color-text-mid);
	}

	.content {
		margin: 0 0 var(--spacing-md) 0;
		color: var(--color-text);
		line-height: var(--line-height);
	}

	.status {
		display: inline-block;
		padding: var(--spacing-sm) var(--spacing-md);
		border-radius: var(--border-radius-md);
		font-weight: 500;

		&.status-success {
			background: var(--color-accent-2);
			color: var(--color-accent-2-text);
		}

		&.status-error {
			background: var(--color-primary);
			color: var(--color-secondary-text);
		}

		&.status-warning {
			background: var(--color-accent-1);
			color: var(--color-accent-1-text);
		}

		&.status-info {
			background: var(--color-accent-3);
			color: var(--color-accent-3-text);
		}
	}
</style>
