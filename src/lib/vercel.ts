import { put } from "@vercel/blob";
import { Redis } from "@upstash/redis";
import { get, getAll } from "@vercel/edge-config";
let vercelKv: ReturnType<typeof Redis.fromEnv> | null = null;
try {
	vercelKv = Redis.fromEnv();
} catch {
	console.warn("Vercel KV (Redis) not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN env vars.");
}
export { vercelKv };
export const vercelBlob = { put };
export const vercelEdgeConfig = { get, getAll };
