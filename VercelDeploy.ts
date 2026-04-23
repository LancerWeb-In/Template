import path from "path";
import { spawnSync } from "child_process";
import { readFileSync, existsSync } from "fs";
function getGitRemoteUrl(): string {
	const gitRemoteResult = spawnSync("git", ["remote", "get-url", "origin"], { stdio: "pipe", encoding: "utf-8" });
	if (gitRemoteResult.status !== 0) {
		console.error("❌ Failed to get Git remote URL. Ensure you have a Git repository with an 'origin' remote.");
		process.exit(1);
	}
	let gitUrl = gitRemoteResult.stdout.trim();
	if (gitUrl.startsWith("git@")) gitUrl = gitUrl.replace(/^git@([^:]+):(.+)$/, "https://$1/$2").replace(/\.git$/, "");
	return gitUrl;
}
const packageJsonPath = path.resolve("package.json");
if (!existsSync(packageJsonPath)) {
	console.error("package.json not found.");
	process.exit(1);
}
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
const gitUrl = getGitRemoteUrl();
const vercelDir = path.resolve(".vercel");
const projectName = packageJson.name.toLowerCase();
const isLinked = existsSync(path.resolve(vercelDir, "project.json"));
if (isLinked) console.log(`✅ ${projectName} is already linked to Vercel.`);
else {
	console.log(`🚀 Linking ${projectName} to Vercel...`);
	const linkResult = spawnSync("vercel", ["link", "--project", projectName, "--yes", "--scope team_cOtXZ1rYLP9JNOM6jFpBOnts"], { stdio: "inherit", shell: true });
	if (linkResult.status !== 0) {
		console.error("❌ Linking failed.");
		process.exit(linkResult.status ?? 1);
	}
}
console.log(`🚀 Checking Git connection for ${projectName}...`);
const gitConnectResult = spawnSync("vercel", ["git", "connect", gitUrl, "--yes", "--scope", "team_cOtXZ1rYLP9JNOM6jFpBOnts"], { stdio: "pipe", shell: true, encoding: "utf-8" });
if (gitConnectResult.status !== 0) {
	const output = (gitConnectResult.stdout || "") + (gitConnectResult.stderr || "");
	if (output.includes("already connected")) console.log("✅ Git repository is already connected.");
	else {
		console.warn("⚠️ Git connection failed, but continuing with deployment...");
		console.warn(output);
	}
} else console.log("✅ Git connection established.");
console.log(`🚀 Deploying ${projectName} to production...`);
const deployResult = spawnSync("vercel", ["deploy", "--prod", "--yes", "--name", projectName, "--scope", "team_cOtXZ1rYLP9JNOM6jFpBOnts"], { stdio: "inherit", shell: true });
if (deployResult.status === 0) console.log("✅ Deployment successful!");
else {
	console.error("❌ Deployment failed.");
	process.exit(deployResult.status ?? 1);
}
