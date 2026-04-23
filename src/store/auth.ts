"use client";
import { create } from "zustand";
import { signInWithFirebase, signOut as authSignOut } from "@/auth-actions";
import { auth as firebaseAuth } from "@/lib/firebase-config";
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

interface AuthState {
	isSigningIn: boolean;
	error: string | null;
	clearError: () => void;
	signIn: () => Promise<void>;
	signInWithEmail: (email: string, password: string) => Promise<void>;
	signUpWithEmail: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
	isSigningIn: false,
	error: null,

	async signIn() {
		set({ isSigningIn: true, error: null });
		try {
			if (!firebaseAuth) {
				set({ error: "Firebase Auth is not initialized. Check your .env.local Firebase credentials.", isSigningIn: false });
				return;
			}
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(firebaseAuth, provider);
			const idToken = await result.user.getIdToken();
			const authError = await signInWithFirebase(idToken);
			if (authError?.error) {
				set({ error: authError.error });
			}
		} catch (err) {
			if (err instanceof Error && err.message.includes("popup-closed-by-user")) return;
			set({ error: err instanceof Error ? err.message : "Failed to sign in" });
		} finally {
			set({ isSigningIn: false });
		}
	},

	async signInWithEmail(email: string, password: string) {
		set({ isSigningIn: true, error: null });
		try {
			if (!firebaseAuth) {
				set({ error: "Firebase Auth is not initialized. Check your .env.local Firebase credentials.", isSigningIn: false });
				return;
			}
			const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
			const idToken = await result.user.getIdToken();
			const authError = await signInWithFirebase(idToken);
			if (authError?.error) {
				set({ error: authError.error });
			}
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes("invalid-credential") || err.message.includes("wrong-password") || err.message.includes("user-not-found")) {
					set({ error: "Invalid email or password" });
				} else if (err.message.includes("popup-closed-by-user")) {
					return;
				} else {
					set({ error: err.message });
				}
			} else {
				set({ error: "Failed to sign in" });
			}
		} finally {
			set({ isSigningIn: false });
		}
	},

	async signUpWithEmail(email: string, password: string) {
		set({ isSigningIn: true, error: null });
		try {
			if (!firebaseAuth) {
				set({ error: "Firebase Auth is not initialized. Check your .env.local Firebase credentials.", isSigningIn: false });
				return;
			}
			const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
			const idToken = await result.user.getIdToken();
			const authError = await signInWithFirebase(idToken);
			if (authError?.error) {
				set({ error: authError.error });
			}
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes("email-already-in-use")) {
					set({ error: "An account with this email already exists" });
				} else if (err.message.includes("weak-password")) {
					set({ error: "Password is too weak. Use at least 6 characters." });
				} else {
					set({ error: err.message });
				}
			} else {
				set({ error: "Failed to create account" });
			}
		} finally {
			set({ isSigningIn: false });
		}
	},

	async signOut() {
		if (firebaseAuth) {
			try {
				await firebaseSignOut(firebaseAuth);
			} catch {
				// Already signed out
			}
		}
		await authSignOut();
	},

	clearError: () => set({ error: null }),
}));
