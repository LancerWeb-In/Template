"use client";
import { useState } from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { LuMail, LuLock, LuEye, LuEyeOff } from "react-icons/lu";

export function EmailSignInForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSignUp, setIsSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signInWithEmail, signUpWithEmail, isSigningIn, error, clearError } = useAuthStore();

	useEffect(() => {
		if (formRef.current) {
			gsap.fromTo(formRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.4 });
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		clearError();
		if (isSignUp) {
			await signUpWithEmail(email, password);
		} else {
			await signInWithEmail(email, password);
		}
	};

	const toggleMode = () => {
		setIsSignUp(!isSignUp);
		clearError();
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-1.5 sm:space-y-2">
				<Label htmlFor="email" className="text-fluid-xs sm:text-sm">
					Email
				</Label>
				<div className="relative">
					<LuMail className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground sm:size-4" />
					<Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-10 pr-4 pl-10 text-fluid-sm sm:h-11" disabled={isSigningIn} autoComplete="email" />
				</div>
			</div>
			<div className="space-y-1.5 sm:space-y-2">
				<Label htmlFor="password" className="text-fluid-xs sm:text-sm">
					Password
				</Label>
				<div className="relative">
					<LuLock className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground sm:size-4" />
					<Input
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder={isSignUp ? "Create a password" : "Enter your password"}
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						minLength={6}
						className="h-10 pr-10 pl-10 text-fluid-sm sm:h-11"
						disabled={isSigningIn}
						autoComplete={isSignUp ? "new-password" : "current-password"}
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute top-1/2 right-2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center p-1.5 text-muted-foreground hover:text-foreground sm:right-3 sm:p-2"
						aria-label={showPassword ? "Hide password" : "Show password"}
					>
						{showPassword ? <LuEyeOff className="size-4" /> : <LuEye className="size-4" />}
					</button>
				</div>
			</div>
			{error && <p className="text-fluid-xs text-destructive sm:text-sm">{error}</p>}
			<Button type="submit" size="lg" className="h-10 w-full text-fluid-sm sm:h-11" disabled={isSigningIn}>
				{isSigningIn ? <Spinner /> : isSignUp ? "Create Account" : "Sign In with Email"}
			</Button>
			<p className="text-center text-fluid-xs text-muted-foreground sm:text-sm">
				{isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
				<button type="button" onClick={toggleMode} className="text-primary hover:underline">
					{isSignUp ? "Sign in" : "Create one"}
				</button>
			</p>
		</form>
	);
}
