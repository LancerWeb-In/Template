"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
function NavbarContent() {
	const { data: session } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-12 items-center justify-between px-4 sm:px-6 md:h-14 lg:px-8">
				<div className="flex items-center gap-4 md:gap-6">
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-fluid-sm font-bold md:text-base">Template</span>
					</Link>
					<NavigationMenu className="hidden lg:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/about">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-2 md:gap-3">
					<button className="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 hover:bg-accent lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
						{mobileMenuOpen ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
					</button>
					<div className="hidden items-center gap-2 lg:flex">
						{session ? (
							<Button variant="ghost" size="sm" asChild>
								<Link href="/api/auth/signout">Sign Out</Link>
							</Button>
						) : (
							<Button size="sm" asChild>
								<Link href="/auth/signin">Sign In</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className="space-y-3 border-t bg-background px-4 py-4 lg:hidden">
					<Link href="/" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
						Home
					</Link>
					<Link href="/about" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
						About
					</Link>
					{session ? (
						<Button variant="ghost" className="w-full justify-start" asChild>
							<Link href="/api/auth/signout">Sign Out</Link>
						</Button>
					) : (
						<Button className="w-full justify-start" asChild>
							<Link href="/auth/signin">Sign In</Link>
						</Button>
					)}
				</div>
			)}
		</header>
	);
}
function NavbarSkeleton() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-12 items-center justify-between px-4 sm:px-6 md:h-14 lg:px-8">
				<div className="flex items-center gap-4 md:gap-6">
					<Skeleton className="h-6 w-24" />
					<div className="hidden gap-4 lg:flex">
						<Skeleton className="h-6 w-16" />
						<Skeleton className="h-6 w-16" />
					</div>
				</div>
				<div className="flex items-center gap-2 md:gap-3">
					<Skeleton className="h-9 w-9 rounded-full" />
					<Skeleton className="hidden h-9 w-20 lg:block" />
					<Skeleton className="h-11 w-11 lg:hidden" />
				</div>
			</div>
		</header>
	);
}
export function Navbar() {
	return (
		<Suspense fallback={<NavbarSkeleton />}>
			<NavbarContent />
		</Suspense>
	);
}
