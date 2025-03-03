import { getCompanyData } from "$db/fetch/get-company-data";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export async function load(): Promise<ReturnType<PageServerLoad>> {
	const companyData = await getCompanyData();

	return {
		props: {
			companyData
		}
	};
}
