"use client";
import { useEffect } from "react";
import { useUiStore } from "@/store/ui";
export function ScrollTracker() {
	const setScrollY = useUiStore(state => state.setScrollY);
	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [setScrollY]);
	return null;
}
