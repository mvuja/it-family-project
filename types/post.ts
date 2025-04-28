import { z } from 'zod'

export const PostSchema = z.object({
	id: z.number(),
	title: z.string(),
	tags: z.array(z.string()).optional(),
	reactions: z.object({
		likes: z.number(),
		dislikes: z.number(),
	}),
})

export type Post = z.infer<typeof PostSchema>
