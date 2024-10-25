import { z } from 'zod';

export const commentSchema = z.object({
	createdBy: z.string().uuid(),
	postId: z.string().uuid(),
	content: z.string(),
});

export type CommentType = z.infer<typeof commentSchema>;

export const validateComment = (data: unknown): CommentType => {
	return commentSchema.parse(data);
};
