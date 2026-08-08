// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		rules: {
			// role="list" on .list-reset <ul>s is deliberate, not redundant:
			// list-style: none makes Safari/VoiceOver drop list semantics, and
			// the explicit role restores them. Keep the rule strict elsewhere.
			"astro/jsx-a11y/no-redundant-roles": ["error", { ul: ["list"] }],
		},
	},
	{
		languageOptions: {
			globals: {
				window: "readonly",
				document: "readonly",
			},
		},
	},
	{
		ignores: ["dist/", ".astro/", "node_modules/"],
	},
];
