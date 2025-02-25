import { defineCollection, z } from "astro:content";

const project = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: z.string(),
    }),
});

export const collection = {project};