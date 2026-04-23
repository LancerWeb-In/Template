"use client";
import gsap from "gsap";
import { PropsWithChildren, useRef, useEffect } from "react";
export default function GSAPProvider({ children }: PropsWithChildren) {
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.set(containerRef.current, { autoAlpha: 0, y: 10 });
		gsap.to(containerRef.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
	}, []);
	return <div ref={containerRef}>{children}</div>;
}
