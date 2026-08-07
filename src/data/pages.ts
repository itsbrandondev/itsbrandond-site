/**
 * When each page's content last changed, bumped by hand alongside the edit.
 *
 * One map, two consumers: the sitemap's lastmod (astro.config.mjs) and the
 * homepage's ProfilePage dateModified (src/pages/index.astro). These used to be
 * two hand-kept constants and had already drifted two days apart.
 *
 * This module is imported by astro.config.mjs, which is loaded before the Astro
 * runtime exists. Keep it free of imports: pulling in anything that touches
 * astro:assets or an image asset breaks config loading.
 */
export const lastmod: Record<string, string> = {
	"/": "2026-08-07",
	"/live/": "2026-08-07",
	"/work/": "2026-08-07",
};
