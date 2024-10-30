import { z } from 'zod';

export const userSchema = z.object({
	name: z.string(),
	username: z.string(),
	profile: z.object({
		bio: z.string(),
		avatar: z.string(),
		background: z.string(),
	}),
});

export type UserInput = z.infer<typeof userSchema>;

export const validateUser = (data: unknown): UserInput => {
	return userSchema.parse(data);
};
