import { DATABASE_CONNECTION_STRING } from "$env/static/private";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!DATABASE_CONNECTION_STRING) {
	throw new Error("DATABASE_CONNECTION_STRING is not set");
}

// Disable prefetch as it is not supported for "Transaction" pool mode
export const pgClient = postgres(DATABASE_CONNECTION_STRING, { prepare: false });
export const db = drizzle(pgClient);
