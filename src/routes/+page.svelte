<script lang="ts">
	import Card from "../components/cards/Card.svelte";
	import CardGrid from "../components/cards/CardGrid.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const companies = data.props.companyData;
</script>

<main>
	<CardGrid>
		{#each companies as company (company.id)}
			<Card
				title={company.name}
				tags={[company.industry]}
				status={{
					text: company.regime_support ? "Supporting Regime" : "Not Supporting Regime",
					variant: company.regime_support ? "error" : "success"
				}}
			/>
		{/each}
	</CardGrid>
</main>

<style lang="scss">
	main {
		background: var(--background, #f5f5f5);
		min-height: 100vh;
	}
</style>
