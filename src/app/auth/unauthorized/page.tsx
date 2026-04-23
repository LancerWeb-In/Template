// ================================================================================
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuLock, LuLogIn } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// ================================================================================
export default function UnauthorizedPage() {
	return (
		<main className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm sm:max-w-md">
				<CardHeader className="space-y-3 px-4 pt-6 text-center sm:px-6 sm:pt-8">
					<div className="mx-auto flex size-10 items-center justify-center rounded-full bg-amber-500/10 sm:size-12">
						<LuLock className="size-5 text-amber-500 sm:size-6" />
					</div>
					<div>
						<CardTitle className="font-heading text-fluid-lg sm:text-xl">Unauthorized</CardTitle>
						<CardDescription className="mt-1 text-fluid-xs sm:text-sm">You need to be signed in to access this page.</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="px-4 sm:px-6">
					<Alert>
						<AlertDescription className="text-fluid-xs sm:text-sm">Please sign in with your account to continue accessing this content.</AlertDescription>
					</Alert>
				</CardContent>
				<Separator />
				<CardFooter className="justify-center px-4 pb-6 sm:px-6 sm:pb-8">
					<Button asChild className="h-10 gap-2 text-fluid-sm sm:h-11">
						<Link href="/auth/signin">
							<LuLogIn className="size-4" />
							Sign In
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
// ================================================================================
