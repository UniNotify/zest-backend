import { z } from 'zod';

export const userSchema = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string(),
	password: z.string().min(5, 'Password must be at least 5 characters long'),
});

export type UserInput = z.infer<typeof userSchema>;

export const validateUser = (data: unknown): UserInput => {
	return userSchema.parse(data);
};
