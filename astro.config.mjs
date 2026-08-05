// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Sitemap lastmod reflects when the page itself last changed, not the build
// date. Shared with the homepage's ProfilePage dateModified so the two cannot
// drift; see src/data/pages.ts.
import { lastmod } from "./src/data/pages";

// https://astro.build/config
export default defineConfig({
	site: "https://itsbrandond.com",
	image: {
		/*
		 * Responsive images by default: Astro emits srcset and sizes from each
		 * <Image>'s declared width, so a declared width must be the real maximum
		 * render width or the hints are wrong.
		 *
		 * responsiveStyles stays off. It would inject zero-specificity
		 * :where([data-astro-image]) rules that fight the components' own CSS.
		 * The global `img { max-width: 100%; height: auto }` in global.css is
		 * what makes that safe: do not delete it.
		 *
		 * Note the srcset ceiling is 2x the declared width (Astro caps at
		 * min(width * 2, source width)), so this buys 2x density, not 3x.
		 */
		layout: "constrained",
	},
	integrations: [
		sitemap({
			filter: (page) => new URL(page).pathname !== "/elements/",
			serialize(item) {
				const date = lastmod[new URL(item.url).pathname];
				return date ? { ...item, lastmod: date } : item;
			},
		}),
	],
});
