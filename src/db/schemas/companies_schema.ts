import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const companiesTable = pgTable("companies", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	industry: text("industry").notNull(),
	regime_support: boolean("regime_support").notNull(),
	created_at: timestamp("created_at").notNull().defaultNow()
});
