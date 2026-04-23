/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import NextAuth from "next-auth";
import { db, schema } from "./db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getFirebaseAdmin } from "./lib/firebase-admin";
import Credentials from "next-auth/providers/credentials";
export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db as any, { usersTable: schema.users as any, accountsTable: schema.accounts as any, sessionsTable: schema.sessions as any, verificationTokensTable: schema.verificationTokens as any }),
	providers: [
		Credentials({
			name: "Firebase",
			credentials: { idToken: { label: "Firebase ID Token", type: "text" } },
			async authorize(credentials) {
				const parsed = z.object({ idToken: z.string() }).safeParse(credentials);
				if (!parsed.success) return null;
				const adminAuth = getFirebaseAdmin();
				const decoded = await adminAuth.verifyIdToken(parsed.data.idToken);
				return { id: decoded.uid, name: decoded.name ?? decoded.email?.split("@")[0], email: decoded.email!, image: decoded.picture };
			},
		}),
	],
	session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
	callbacks: {
		async jwt({ token, user, trigger }) {
			if (user) {
				token.id = user.id;
				token.image = user.image;
			}
			if (trigger === "update") return { ...token };
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
				session.user.image = token.image as string | null;
			}
			return session;
		},
	},
	pages: { signIn: "/auth/signin", error: "/auth/error" },
});
