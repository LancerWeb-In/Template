import { Pool } from "pg";
import Database from "better-sqlite3";
import * as pgSchema from "./schema-pg";
import * as sqliteSchema from "./schema-sqlite";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { drizzle as drizzlePg } from "drizzle-orm/node-postgres";
import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
const databaseUrl = process.env.DATABASE_URL;
const isCloud = databaseUrl?.startsWith("postgres") || databaseUrl?.startsWith("postgresql");
let db: NodePgDatabase<typeof pgSchema> | BetterSQLite3Database<typeof sqliteSchema>;
let schema: typeof pgSchema | typeof sqliteSchema;
try {
	if (isCloud) {
		const pool = new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false }, max: 20, idleTimeoutMillis: 30000, connectionTimeoutMillis: 10000 });
		pool.on("error", err => {
			console.error("Unexpected error on idle PostgreSQL client", err);
		});
		db = drizzlePg(pool, { schema: pgSchema });
		schema = pgSchema;
	} else {
		const dbFile = databaseUrl && databaseUrl !== "DB" ? databaseUrl.replace("file:", "") : "database.db";
		const client = new Database(dbFile);
		db = drizzleSqlite(client, { schema: sqliteSchema });
		schema = sqliteSchema;
	}
} catch (error) {
	console.error("Failed to initialize database connection:", error);
	throw new Error(`Database connection failed. Ensure DATABASE_URL is properly configured. ${isCloud ? "Check your PostgreSQL connection string." : "For SQLite, ensure the file path is valid."}`);
}
export { db, schema };
export { isCloud };
