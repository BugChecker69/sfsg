import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
  }),
});

const album = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/album" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    location: z.string().optional(),
    heroImage: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, album };
