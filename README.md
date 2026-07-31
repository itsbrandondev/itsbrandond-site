# itsbrandond.com

Source for [itsbrandond.com](https://itsbrandond.com), Brandon Davenport's personal site.

Built with [Astro](https://astro.build), deployed as a static [Cloudflare Worker](https://developers.cloudflare.com/workers/static-assets/) (no adapter, no server runtime).

## Commands

| Command                | Action                               |
| :--------------------- | :----------------------------------- |
| `npm install`          | Install dependencies                 |
| `npm run dev`          | Start the local dev server           |
| `npm run build`        | Build the static site to `./dist/`   |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Lint with ESLint                     |
| `npm run format`       | Format with Prettier                 |
| `npm run format:check` | Check formatting without writing     |
| `npm run typecheck`    | Type-check with `astro check`        |

## Deploy

Pushes to `main` auto-deploy via Cloudflare Workers Builds. `wrangler.jsonc` configures the static-assets Worker, including `_redirects` for the legacy Squarespace URL mappings and `_headers` for baseline security headers.
