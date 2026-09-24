# twentytwo-website

## Local preview

This site is built with Astro and requires Node.js 22.12 or newer.

Run `pnpm install` once, then use `pnpm dev` to view the site locally.
Use `pnpm build` to create the production site in `dist/`.
The homepage source is located at `src/pages/index.astro`.

Pull requests are deployed as Cloudflare preview builds. The Wrangler
`previews` setting in `wrangler.jsonc` is required by that preview command.
