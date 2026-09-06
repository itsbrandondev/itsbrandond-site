// @ts-check
// Fails when /live/'s sitemap lastmod is older than the newest stream on the
// built page. The archive entry and the lastmod bump are meant to land in one
// commit, and this is what notices when they do not. Runs on dist/, after
// `astro build`, as `npm run check:lastmod`.
import { readFileSync } from "node:fs";

const sitemap = readFileSync("dist/sitemap-0.xml", "utf8");
const live = readFileSync("dist/live/index.html", "utf8");

const lastmod = sitemap.match(
	/<loc>https:\/\/itsbrandond\.com\/live\/<\/loc><lastmod>(\d{4}-\d{2}-\d{2})/,
)?.[1];
const newest = [...live.matchAll(/"uploadDate":"(\d{4}-\d{2}-\d{2})"/g)]
	.map((m) => m[1])
	.sort()
	.at(-1);

if (!lastmod || !newest) {
	console.error(
		`check-lastmod: could not read the /live/ lastmod (${lastmod}) or the newest uploadDate (${newest}) out of dist/`,
	);
	process.exit(2);
}
if (lastmod < newest) {
	console.error(
		`check-lastmod: /live/ lastmod ${lastmod} is older than the newest stream ${newest}; bump "/live/" in src/data/pages.ts`,
	);
	process.exit(1);
}
console.log(
	`check-lastmod: /live/ lastmod ${lastmod}, newest stream ${newest}`,
);
