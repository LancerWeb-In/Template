// ================================================================================
"use client";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LuOctagon, LuHouse, LuRotateCw } from "react-icons/lu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// ================================================================================
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	const cardRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
			tl.fromTo(cardRef.current, { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 })
				.fromTo(headingRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
				.fromTo(contentRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3 }, "-=0.15")
				.fromTo(footerRef.current, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.25 }, "-=0.1");
		});
		return () => ctx.revert();
	}, []);
	return (
		<html>
			<body>
				<main className="flex min-h-screen items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
					<Card ref={cardRef} className="w-full max-w-sm sm:max-w-md">
						<CardHeader ref={headingRef} className="space-y-3 px-4 pt-6 text-center sm:px-6 sm:pt-8">
							<div className="mx-auto flex size-10 items-center justify-center rounded-full bg-destructive/10 sm:size-12">
								<LuOctagon className="size-5 text-destructive sm:size-6" />
							</div>
							<div>
								<CardTitle className="font-heading text-fluid-lg text-destructive sm:text-xl">Application Error</CardTitle>
								<CardDescription className="mt-1 text-fluid-xs sm:text-sm">A critical error occurred. Please try refreshing the page or contact support.</CardDescription>
							</div>
						</CardHeader>
						<CardContent ref={contentRef} className="space-y-3 px-4 sm:px-6">
							<Alert variant="destructive">
								<AlertTitle className="text-fluid-xs sm:text-sm">Error Details</AlertTitle>
								<AlertDescription className="font-mono text-xs break-all">{error.digest ? `Digest: ${error.digest}` : error.message}</AlertDescription>
							</Alert>
						</CardContent>
						<Separator />
						<CardFooter ref={footerRef} className="flex flex-col gap-2 px-4 pb-6 sm:flex-row sm:gap-3 sm:px-6 sm:pb-8">
							<Button variant="outline" className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:flex-1" onClick={() => (window.location.href = "/")}>
								<LuHouse className="size-4" />
								Go Home
							</Button>
							<Button className="h-10 w-full gap-2 text-fluid-sm sm:h-11 sm:flex-1" onClick={() => reset()}>
								<LuRotateCw className="size-4" />
								Try Again
							</Button>
						</CardFooter>
					</Card>
				</main>
			</body>
		</html>
	);
}
// ================================================================================
