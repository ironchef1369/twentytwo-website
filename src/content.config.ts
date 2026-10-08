import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const updates = defineCollection({
  loader: glob({ base: "./src/content/updates", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    eventDate: z.coerce.date().optional(),
    expiresAt: z.coerce.date().optional(),
    category: z.string(),
    featured: z.boolean().default(false),
    homepagePinned: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    kicker: z.string(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imagePosition: z.string().default("center"),
    statement: z.string(),
    principles: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
  }),
});

export const collections = { updates, pages };
