import { NextRequest, NextResponse } from "next/server";
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 30;
import { handlers } from "@/auth";
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
function rateLimit(ip: string): boolean {
	const now = Date.now();
	const record = ipRequestCounts.get(ip);
	if (!record || now > record.resetTime) {
		ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
		return true;
	}
	if (record.count >= MAX_REQUESTS_PER_WINDOW) return false;
	record.count++;
	return true;
}
export const GET = async (req: NextRequest) => {
	const ip = req.headers.get("x-forwarded-for") || "unknown";
	if (!rateLimit(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
	return handlers.GET(req);
};
export const POST = async (req: NextRequest) => {
	const ip = req.headers.get("x-forwarded-for") || "unknown";
	if (!rateLimit(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
	return handlers.POST(req);
};
