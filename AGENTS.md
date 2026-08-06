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

## Colour

Four tokens: `--bg` (`#0000cc`, the field), `--fg` (white), `--muted` and `--rule`. The working bar is WCAG 2.2 AA, so any text tier must clear 4.5:1 against the field; white is 11.22:1 and `--muted` is 7.22:1.

**`--muted` and `--rule` are translucent white, not fixed greys.** They composite against whatever sits behind them, which is the field almost everywhere but is not guaranteed to be. Putting `.meta` text on a surface that is not `--bg` gives a different colour than the numbers above, so check the contrast there rather than assuming it. This is also what lets them follow the field: the old fixed `#a5a5a5` fell to 3.49:1 the moment the field stopped being black, whereas the move from `#0000ff` to `#0000cc` needed no change to either tier.

**The alpha is fixed and the contrast floats.** Do not re-tune an alpha to hit a target ratio after a field change; that is the fixed-value habit these tokens exist to avoid. Check that the tiers still clear their bar, and leave them alone if they do.

`--rule` does two jobs, hairline borders and fill areas (the player letterbox, the thumbnail placeholder). Both want the same value, so it stays one token.

**`.modal::backdrop` is the exception and needs re-checking by hand.** It is a fixed colour rather than a tier of the ink, so it only separates the panel while it stays meaningfully darker than the field. It had to darken with the field to hold its 1.35:1.

`::selection` and `a:focus-visible` are set explicitly rather than left to the user agent. Every engine's default selection highlight is a blue, so it lands on a blue page: the highlight itself stays visible here (Chrome's is 3.73:1) but the selected text on it sits at 3.01:1, under the bar the rest of the site clears. Safari draws its focus ring in the system accent, blue by default, and the other engines vary; overriding a default ring takes on a 3:1 obligation, which white clears at 11.22:1. The ring is scoped to links because links are every focusable element the site owns; adding a button or a form control means widening that selector.

The `og-image.jpg` field and the favicon marks are still `#0000ff`, one field-change behind ✓ Brandon 2026-08-05 (leave the art alone for now). They are not page-composited, so nothing renders wrong; the site and its own social card simply no longer agree on the blue.

## Links

Off-site links carry `target="_blank" rel="noopener noreferrer"` (social links additionally keep `rel="me"` for IndieAuth). Internal pages and `mailto:` links stay same-tab.

Check this on every new outbound link. It is easy to miss and has been: the Connect modal's social links, the Google Form and X-follow CTAs, and the stream replay links in `StreamPlayer.astro` and `StreamThumbnail.astro` all shipped same-tab before being brought into line.

## Data

`src/data/work.ts` and `src/data/streams.ts` are hand-maintained typed literals. `src/data/pages.ts` holds each page's last-content-change date and is imported by both `astro.config.mjs` (sitemap lastmod) and the homepage (ProfilePage `dateModified`); keep it import-free, since config loads before the Astro runtime exists.

**Bump a page's `lastmod` in the same commit as the content edit.** Nothing computes it and nothing checks it, so it silently goes stale, which it has done before.

## Commands

`npm run dev`, `npm run build`, `npm run typecheck`, `npm run lint`, `npm run format`.

CI runs typecheck, lint, `format:check`, build, and a lychee link check. Run `npm run format` before committing: `format:check` covers Markdown too.

## Documentation

Astro docs: https://docs.astro.build. The guides worth consulting here are [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [images](https://docs.astro.build/en/guides/images/), and [styling](https://docs.astro.build/en/guides/styling/).
