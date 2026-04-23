"use client";
import { LuX } from "react-icons/lu";
import { useAuthStore } from "@/store/auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
const errorMessages: Record<string, string> = {
	Verification: "Verification failed. Please try again.",
	OAuthCallbackError: "Error during sign-in. Please try again.",
	EmailSignIn: "Error sending sign-in email. Please try again.",
	OAuthSignin: "Error starting the sign-in flow. Please try again.",
	AccessDenied: "Access denied. You don't have permission to sign in.",
	CredentialsSignin: "Invalid or expired session. Please sign in again.",
	OAuthCreateAccountError: "Could not create your account. Please try again.",
	EmailCreateAccountError: "Could not create your account. Please try again.",
	Configuration: "A server configuration error occurred. Please contact support.",
};
export function AuthErrorAlert({ searchError }: { searchError?: string }) {
	const { error: storeError, clearError } = useAuthStore();
	const errorKey = searchError || storeError || undefined;
	const errorMessage = errorKey ? errorMessages[errorKey] || errorKey : null;
	if (!errorMessage) return null;
	return (
		<Alert variant="destructive" className="relative">
			<AlertDescription>{errorMessage}</AlertDescription>
			<button type="button" onClick={clearError} className="absolute top-2 right-2 rounded-sm opacity-70 transition-opacity hover:opacity-100" aria-label="Dismiss error">
				<LuX className="size-4" />
			</button>
		</Alert>
	);
}
