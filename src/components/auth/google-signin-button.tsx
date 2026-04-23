"use client";
import gsap from "gsap";
import { LuChrome } from "react-icons/lu";
import { useRef, useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
export function GoogleSignInButton() {
	const btnRef = useRef<HTMLButtonElement>(null);
	const { signIn, isSigningIn } = useAuthStore();
	useEffect(() => {
		if (btnRef.current) gsap.fromTo(btnRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.3 });
	}, []);
	return (
		<Button ref={btnRef} size="lg" className="h-10 w-full gap-2 text-fluid-sm sm:h-11" onClick={signIn} disabled={isSigningIn}>
			{isSigningIn ? <Spinner /> : <LuChrome className="size-4 sm:size-5" />}
			{isSigningIn ? "Signing in…" : "Sign in with Google"}
		</Button>
	);
}
