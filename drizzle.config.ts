import "dotenv/config";
import { defineConfig } from "drizzle-kit";
const databaseUrl = process.env.DATABASE_URL || "database.db";
const isCloud = databaseUrl?.startsWith("postgres") || databaseUrl?.startsWith("postgresql");
export default defineConfig({
	out: "./drizzle",
	dialect: isCloud ? "postgresql" : "sqlite",
	schema: isCloud ? "./src/db/schema-pg.ts" : "./src/db/schema-sqlite.ts",
	dbCredentials: { url: isCloud ? databaseUrl : databaseUrl.replace("file:", "") },
});
