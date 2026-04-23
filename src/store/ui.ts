"use client";
import { create } from "zustand";
interface UiState {
	scrollY: number;
	isScrolled: boolean;
	mobileNavOpen: boolean;
	commandOpen: boolean;
	setScrollY: (y: number) => void;
	toggleMobileNav: () => void;
	setMobileNavOpen: (open: boolean) => void;
	toggleCommand: () => void;
	setCommandOpen: (open: boolean) => void;
}
export const useUiStore = create<UiState>(set => ({
	scrollY: 0,
	isScrolled: false,
	mobileNavOpen: false,
	commandOpen: false,
	setScrollY: y => set({ scrollY: y, isScrolled: y > 20 }),
	toggleMobileNav: () => set(state => ({ mobileNavOpen: !state.mobileNavOpen })),
	setMobileNavOpen: open => set({ mobileNavOpen: open }),
	toggleCommand: () => set(state => ({ commandOpen: !state.commandOpen })),
	setCommandOpen: open => set({ commandOpen: open }),
}));
