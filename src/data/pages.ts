/**
 * When each page's content last changed, bumped alongside the edit. The show
 * pipeline bumps "/live/" when it adds a stream, and `npm run check:lastmod`
 * fails the build when that date is older than the newest stream; the other
 * pages are bumped by hand and nothing checks them.
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
	"/live/": "2026-09-10",
	"/work/": "2026-08-07",
};
