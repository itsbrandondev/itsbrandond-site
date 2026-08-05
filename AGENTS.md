## What this repo is

Brandon Davenport's personal site. Astro, static output, no adapter and no server runtime, deployed to Cloudflare Workers static assets via `wrangler.jsonc`.

There are no framework integrations (no React, Vue or Svelte), no Tailwind or any CSS framework, no content collections, and a single locale. Do not reach for those guides: this site is plain `.astro` components, hand-written CSS, and two typed data modules.

## Layout and CSS

`src/styles/global.css` holds the design tokens and every shared pattern. Read it before adding a rule anywhere else.

**The site is slim by default and widens only where a section earns it.** `--rail` (34rem) is the slim reading column that the header, the footer and all prose sit on; `--rail-wide` (57rem) is the opt-in track. Both are content widths, and the page grid supplies the gutter, so neither has padding baked in.

`main` is a five-column grid: gutter, breakout half, slim rail, breakout half, gutter. Every direct child spans `slim` unless it carries `class="breakout"`, which spans `wide`. Today the breakouts are the `/work` category sections and three `/elements` specimen sections; the `/live-show` player was one until 2026-08-05, when it moved to the slim rail to match the body. A page has exactly two possible left edges and both are declared in `global.css`, never per page.

Three things there are load-bearing and easy to break:

- **Width belongs to the grid, never to a `max-width` on a child of `main`.** The prose cap `main :is(p, h1, h2, h3, blockquote)` is specificity (0,0,2) and outranks a `main > *` rule at (0,0,1), so a child-level width rule gets silently overridden on text elements and misaligns them by `(--rail-wide - --rail) / 2`. Place with `grid-column`.
- **The grid's track sizing is what removes the need for media queries.** The breakout halves have a min of 0 and collapse first, the slim track is capped at what the gutters leave, and the gutters give way last. At and below `--rail + 2 * --gutter` (592px today) every breakout is already a full-width block. Change a track min and you can reintroduce horizontal overflow at 320px.
- **`img { max-width: 100%; height: auto }`** is what makes `image.layout: "constrained"` safe while `responsiveStyles` stays off. Deleting it breaks every responsive image.

Layout is container-relative or intrinsic. There are deliberately zero `@media` rules; `grep -rn "@media (" src/` returning nothing is the regression test. (Match on the open paren, not on `@media` alone: the policy comment at the top of `global.css` names the at-rule.) A genuine viewport dependency may add one, but it needs a comment saying why the viewport rather than the container is the thing being measured.

Shared patterns to reuse rather than re-declare: `.meta` (secondary text), `.lede`, `.list-reset`, `.card-grid` (set `--card-min` to change the column floor), `.bullet-list`.

`/elements` is a `noindex` sandbox rendering every pattern, including a container width ramp that shows column counts changing without the window moving. Add a specimen there when adding a pattern.

## Data

`src/data/work.ts` and `src/data/streams.ts` are hand-maintained typed literals. `src/data/pages.ts` holds each page's last-content-change date and is imported by both `astro.config.mjs` (sitemap lastmod) and the homepage (ProfilePage `dateModified`); keep it import-free, since config loads before the Astro runtime exists.

## Commands

`npm run dev`, `npm run build`, `npm run typecheck`, `npm run lint`, `npm run format`.

CI runs typecheck, lint, `format:check`, build, and a lychee link check. Run `npm run format` before committing: `format:check` covers Markdown too.

## Documentation

Astro docs: https://docs.astro.build. The guides worth consulting here are [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [images](https://docs.astro.build/en/guides/images/), and [styling](https://docs.astro.build/en/guides/styling/).
