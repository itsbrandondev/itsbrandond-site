## What this repo is

Brandon Davenport's personal site. Astro, static output, no adapter and no server runtime, deployed to Cloudflare Workers static assets via `wrangler.jsonc`.

There are no framework integrations (no React, Vue or Svelte), no Tailwind or any CSS framework, no content collections, and a single locale. Do not reach for those guides: this site is plain `.astro` components, hand-written CSS, and two typed data modules.

## Layout and CSS

`src/styles/global.css` holds the design tokens and every shared pattern. Read it before adding a rule anywhere else.

Two things there are load-bearing and easy to break:

- **The rail lives on `main`, not on `main > *`.** The prose cap `main :is(p, h1, h2, h3, blockquote)` has higher specificity than a `main > *` rail would, so moving the rail back to the children silently re-creates a `(--rail - --measure) / 2` misalignment on any text element that is a direct child of `<main>`.
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
