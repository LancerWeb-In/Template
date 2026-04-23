"use client";
import { create } from "zustand";
interface AppState {
	activeRoute: string;
	setActiveRoute: (route: string) => void;
	isPageTransitioning: boolean;
	setPageTransitioning: (loading: boolean) => void;
	messages: { id: string; text: string; type: "success" | "error" | "info" }[];
	addMessage: (text: string, type?: "success" | "error" | "info") => void;
	dismissMessage: (id: string) => void;
}
export const useAppStore = create<AppState>(set => ({
	activeRoute: "/",
	setActiveRoute: route => set({ activeRoute: route }),
	isPageTransitioning: false,
	setPageTransitioning: loading => set({ isPageTransitioning: loading }),
	messages: [],
	addMessage: (text, type = "info") => set(state => ({ messages: [...state.messages, { id: crypto.randomUUID(), text, type }] })),
	dismissMessage: id => set(state => ({ messages: state.messages.filter(m => m.id !== id) })),
}));
