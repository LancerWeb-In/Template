// ================================================================================
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LuArrowLeft, LuSearch } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// ================================================================================
export default function NotFound() {
	return (
		<main className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm text-center sm:max-w-md">
				<CardHeader className="px-4 pt-6 sm:px-6 sm:pt-8">
					<div className="text-center">
						<span className="animate-bounce font-heading text-5xl font-bold tracking-tighter text-primary sm:text-7xl">404</span>
					</div>
					<div className="mt-2">
						<CardTitle className="text-fluid-lg sm:text-xl">Page Not Found</CardTitle>
						<CardDescription className="mt-1 text-fluid-xs sm:text-sm">The page you&apos;re looking for doesn&apos;t exist or has been moved.</CardDescription>
					</div>
				</CardHeader>
				<Separator />
				<CardContent className="px-4 pt-4 sm:px-6">
					<Badge variant="outline" className="gap-1.5 text-fluid-xs">
						<LuSearch className="size-3" />
						URL Not Found
					</Badge>
				</CardContent>
				<Separator />
				<CardFooter className="flex flex-col justify-center gap-2 px-4 pb-6 sm:flex-row sm:gap-3 sm:px-6 sm:pb-8">
					<Button asChild variant="outline" className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:w-auto">
						<Link href="/">
							<LuArrowLeft className="size-4" />
							Back to Home
						</Link>
					</Button>
					<Button asChild className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:w-auto">
						<Link href="/auth/signin">Sign In</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
// ================================================================================
