// ================================================================================
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import { Navbar, Toaster } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const viewport: Viewport = { themeColor: "#3b82f6", colorScheme: "dark" };
// ================================================================================
import { Geist } from "next/font/google";
const geist = Geist({ subsets: ["latin"], weight: "400", variable: "--font-sans" });
export const metadata: Metadata = {
	creator: "Shovit Dutta",
	applicationName: "Template",
	authors: [{ name: "Shovit Dutta" }],
	metadataBase: new URL("https://LancerWeb-Template.vercel.app"),
	title: { default: "Template", template: "%s | Template" },
	description: "LancerWeb template project with dark mode support.",
};
// ================================================================================
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const shouldInjectToolbar = process.env.NODE_ENV === "development";
	return (
		<html lang="en" className={cn(geist.variable, "font-sans")} suppressHydrationWarning>
			<body className="bg-background text-foreground antialiased">
				<Providers>
					<TooltipProvider>
						<Navbar />
						{children}
						<Toaster />
					</TooltipProvider>
				</Providers>
				{shouldInjectToolbar && <VercelToolbar />}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
// ================================================================================
