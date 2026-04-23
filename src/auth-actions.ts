"use server";
import { AuthError } from "next-auth";
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "@/auth";
export async function signInWithFirebase(idToken: string) {
	try {
		await nextAuthSignIn("credentials", { idToken, redirectTo: "/" });
	} catch (error) {
		if (error instanceof AuthError) return { error: error.type };
		throw error;
	}
}
export async function signOut() {
	await nextAuthSignOut({ redirectTo: "/" });
}
