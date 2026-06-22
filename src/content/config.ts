import { z, defineCollection } from 'astro:content';

const CATEGORIES = ['ai', 'faith', 'daily', 'conversations', 'philosophy'] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.enum(CATEGORIES).optional().default('ai'),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
