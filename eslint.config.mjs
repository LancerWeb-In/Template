import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";
import path from "node:path";
const eslintConfig = [
	...nextTs,
	...nextVitals,
	...tailwind.configs["flat/recommended"].map(conf => ({
		...conf,
		rules: { ...conf.rules, "tailwindcss/no-custom-classname": "off", "tailwindcss/enforces-negative-arbitrary-values": "off" },
		settings: { ...conf.settings, tailwindcss: { ...conf.settings?.tailwindcss, cssFiles: [path.resolve("src/app/globals.css")], config: path.resolve("src/app/globals.css") } },
	})),
	{ ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"] },
];
export default eslintConfig;
