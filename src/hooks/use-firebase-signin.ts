"use client";
import { useState } from "react";
import { useFirebase } from "@/providers/firebase";
import { signInWithFirebase } from "@/auth-actions";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export function useFirebaseGoogleSignIn() {
	const { auth } = useFirebase();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	async function signIn() {
		if (!auth) {
			setError("Firebase Auth is not initialized");
			return;
		}
		setLoading(true);
		setError(null);
		try {
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);
			const idToken = await result.user.getIdToken();
			const authError = await signInWithFirebase(idToken);
			if (authError?.error) setError(authError.error);
		} catch (err) {
			if (err instanceof Error && err.message.includes("popup-closed-by-user")) return;
			setError(err instanceof Error ? err.message : "Failed to sign in");
		} finally {
			setLoading(false);
		}
	}
	return { signIn, loading, error };
}
