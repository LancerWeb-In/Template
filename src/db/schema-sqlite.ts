import type { AdapterAccount } from "@auth/core/adapters";
import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";
export const users = sqliteTable("user", { id: text("id").notNull().primaryKey(), name: text("name"), email: text("email").notNull(), emailVerified: integer("emailVerified", { mode: "timestamp_ms" }), image: text("image") });
export const accounts = sqliteTable(
	"account",
	{
		scope: text("scope"),
		id_token: text("id_token"),
		token_type: text("token_type"),
		expires_at: integer("expires_at"),
		access_token: text("access_token"),
		refresh_token: text("refresh_token"),
		session_state: text("session_state"),
		provider: text("provider").notNull(),
		providerAccountId: text("providerAccountId").notNull(),
		type: text("type").$type<AdapterAccount["type"]>().notNull(),
		userId: text("userId")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
	},
	account => ({ compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }) })
);
export const sessions = sqliteTable("session", {
	sessionToken: text("sessionToken").notNull().primaryKey(),
	expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});
export const verificationTokens = sqliteTable("verificationToken", { identifier: text("identifier").notNull(), token: text("token").notNull(), expires: integer("expires", { mode: "timestamp_ms" }).notNull() }, vt => ({
	compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
}));
