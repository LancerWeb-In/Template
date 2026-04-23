"use client";
import { useEffect } from "react";
import { useUiStore } from "@/store/ui";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { LuHouse, LuLogIn, LuLayoutDashboard } from "react-icons/lu";
const NAV_ITEMS = [
	{ label: "Home", icon: LuHouse, href: "/" },
	{ label: "Sign In", icon: LuLogIn, href: "/auth/signin" },
	{ label: "Dashboard", icon: LuLayoutDashboard, href: "/dashboard" },
];
export function CommandPalette() {
	const { commandOpen, setCommandOpen } = useUiStore();
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setCommandOpen(!commandOpen);
			}
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [commandOpen, setCommandOpen]);
	return (
		<CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
			<CommandInput placeholder="Type a command or search…" />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Navigation">
					{NAV_ITEMS.map(item => (
						<CommandItem
							key={item.href}
							onSelect={() => {
								setCommandOpen(false);
								window.location.href = item.href;
							}}
						>
							<item.icon className="mr-2 size-4" />
							{item.label}
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
}
