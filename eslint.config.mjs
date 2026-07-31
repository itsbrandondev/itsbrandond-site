// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		languageOptions: {
			globals: {
				window: "readonly",
				document: "readonly",
				localStorage: "readonly",
			},
		},
	},
	{
		ignores: ["dist/", ".astro/", "node_modules/"],
	},
];
