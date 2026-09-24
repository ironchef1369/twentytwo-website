# twentytwo-website

## Local preview

This site is built with Astro and requires Node.js 22.12 or newer. The
Cloudflare build uses the version pinned in `.node-version`.

Run `pnpm install` once, then use `pnpm dev` to view the site locally.
Use `pnpm build` to create the production site in `dist/`.
The homepage source is located at `src/pages/index.astro`.

Pull requests are deployed as Cloudflare preview builds. The Wrangler
`previews` setting in `wrangler.jsonc` is required by that preview command.

## Publishing an update

Add one Markdown file to `src/content/updates/`. Astro validates the frontmatter,
adds featured entries to the homepage, and generates the archive and article URL.

```md
---
title: Fall Tryout Schedule
summary: Registration and schedule information for the upcoming season.
publishedAt: 2026-10-01
eventDate: 2026-10-18
expiresAt: 2026-10-19
category: Tryouts
featured: true
image: /assets/updates/fall-tryouts.jpg
imageAlt: Players at a Team TwentyTwo tryout
ctaLabel: Register now
ctaUrl: https://example.com/register
---

Write the update here using Markdown.
```

Future-dated entries are excluded until a build on or after `publishedAt`.
`expiresAt` removes an entry from the homepage while keeping it in the archive.
Images may use a local `/assets/` path or a hosted HTTPS URL.
