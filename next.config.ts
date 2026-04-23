import withVercelToolbar from "@vercel/toolbar/plugins/next";
import withPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";
import { existsSync } from "fs";
import { resolve } from "path";
function findMonorepoRoot(dir: string): string {
	const fallback = dir;
	while (dir !== resolve(dir, "..")) {
		if (["bun.lock"].some(file => existsSync(resolve(dir, file)))) return dir;
		dir = resolve(dir, "..");
	}
	return fallback;
}
const nextConfig: NextConfig = {
	cacheComponents: true,
	turbopack: { root: findMonorepoRoot(__dirname) },
	serverExternalPackages: ["pg", "better-sqlite3"],
	experimental: { optimizePackageImports: ["@/components"] },
	images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "Referrer-Policy", value: "origin-when-cross-origin" },
					{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
				],
			},
		];
	},
};
export default withVercelToolbar()(withPWA({ dest: "public", register: true, disable: process.env.NODE_ENV === "development", workboxOptions: { skipWaiting: true } })(nextConfig));
