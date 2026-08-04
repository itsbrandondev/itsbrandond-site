// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Bumped by hand alongside each page's content edits: sitemap lastmod is
// meant to reflect when the page itself last changed, not the build date.
/** @type {Record<string, string>} */
const lastmod = {
	"/": "2026-08-04",
	"/live-show/": "2026-08-04",
	"/work/": "2026-08-04",
};

// https://astro.build/config
export default defineConfig({
	site: "https://itsbrandond.com",
	integrations: [
		sitemap({
			serialize(item) {
				const date = lastmod[new URL(item.url).pathname];
				return date ? { ...item, lastmod: date } : item;
			},
		}),
	],
});
