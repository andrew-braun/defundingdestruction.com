import { companiesTable } from "$db/schema-index";
import { db } from "../index";

export async function getCompanyData() {
	try {
		const response = await db
			.select({
				// Visa Program fields
				id: companiesTable.id,
				name: companiesTable.name,
				industry: companiesTable.industry,
				created_at: companiesTable.created_at
			})
			.from(companiesTable);

		const formattedData = response;

		return formattedData;
	} catch (error) {
		console.error(error);
		return [];
	}
}
