// ================================================================================
"use client";
import Link from "next/link";
import { Suspense } from "react";
import { LuShieldAlert } from "react-icons/lu";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";
import { AuthErrorAlert } from "@/components/auth/auth-error-alert";
import { EmailSignInForm } from "@/components/auth/email-signin-form";
import { GoogleSignInButton } from "@/components/auth/google-signin-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// ================================================================================
export default function SignInPage() {
	return (
		<main className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
			<Suspense
				fallback={
					<div className="flex items-center justify-center">
						<Spinner />
					</div>
				}
			>
				<Card className="w-full max-w-sm sm:max-w-md">
					<CardHeader className="space-y-3 px-4 pt-6 text-center sm:px-6 sm:pt-8">
						<div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary/10 sm:size-12">
							<LuShieldAlert className="size-5 text-primary sm:size-6" />
						</div>
						<div>
							<CardTitle className="font-heading text-fluid-lg sm:text-xl">Sign In</CardTitle>
							<CardDescription className="mt-1 text-fluid-xs sm:text-sm">Sign in to your account to continue.</CardDescription>
						</div>
					</CardHeader>
					<CardContent className="space-y-4 px-4 pb-6 sm:px-6 sm:pb-8">
						<AuthErrorAlert searchError={undefined} />
						<GoogleSignInButton />
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-card px-2 text-muted-foreground">Or continue with</span>
							</div>
						</div>
						<EmailSignInForm />
						<Separator />
						<p className="text-center text-xs text-muted-foreground">
							By signing in, you agree to our{" "}
							<Link href="/terms" className="underline underline-offset-3 hover:text-foreground">
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link href="/privacy" className="underline underline-offset-3 hover:text-foreground">
								Privacy Policy
							</Link>
							.
						</p>
					</CardContent>
				</Card>
			</Suspense>
		</main>
	);
}
// ================================================================================
