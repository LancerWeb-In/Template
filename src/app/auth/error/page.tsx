// ================================================================================
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LuTriangleAlert, LuArrowLeft, LuRotateCw } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// ================================================================================
const errorMessages: Record<string, { title: string; description: string }> = {
	Configuration: {
		title: "Configuration Error",
		description: "There is a problem with the server configuration. Please contact support if this issue persists.",
	},
	AccessDenied: {
		title: "Access Denied",
		description: "You do not have permission to sign in. Please contact the administrator.",
	},
	Verification: {
		title: "Verification Expired",
		description: "The sign-in link has expired or has already been used. Please request a new one.",
	},
	OAuthAccountNotLinked: {
		title: "Account Not Linked",
		description: "This email is already associated with a different sign-in method. Please use the original method.",
	},
	SessionRequired: {
		title: "Sign In Required",
		description: "You must be signed in to access this page.",
	},
	Default: {
		title: "Authentication Error",
		description: "An unexpected error occurred during authentication. Please try again.",
	},
};
// ================================================================================
export default async function AuthErrorPage(props: { searchParams: Promise<{ error?: string }> }) {
	const searchParams = await props.searchParams;
	const errorKey = searchParams.error || "Default";
	const { title, description } = errorMessages[errorKey] || errorMessages.Default;
	return (
		<main className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
			<Card className="animate-fade-in w-full max-w-sm sm:max-w-md">
				<CardHeader className="space-y-3 px-4 pt-6 text-center sm:px-6 sm:pt-8">
					<div className="mx-auto flex size-10 items-center justify-center rounded-full bg-destructive/10 sm:size-12">
						<LuTriangleAlert className="size-5 text-destructive sm:size-6" />
					</div>
					<div>
						<CardTitle className="font-heading text-fluid-lg text-destructive sm:text-xl">{title}</CardTitle>
						<CardDescription className="mt-1 text-fluid-xs sm:text-sm">{description}</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="px-4 sm:px-6">
					<Alert variant="destructive">
						<AlertDescription className="font-mono text-xs">Error code: {errorKey}</AlertDescription>
					</Alert>
				</CardContent>
				<Separator />
				<CardFooter className="flex flex-col gap-2 px-4 pb-6 sm:flex-row sm:gap-3 sm:px-6 sm:pb-8">
					<Button asChild variant="outline" className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:flex-1">
						<Link href="/">
							<LuArrowLeft className="size-4" />
							Back to Home
						</Link>
					</Button>
					<Button asChild className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:flex-1">
						<Link href="/auth/signin">
							<LuRotateCw className="size-4" />
							Try Again
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
// ================================================================================
