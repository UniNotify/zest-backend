import { z } from 'zod';
import { validate } from '../utils/validation';

export const userSchema = z.object({
	name: z.string().nonempty('Full name is required'),
	username: z
		.string()
		.nonempty('Username is required')
		.refine(val => validate.username(val).isValid, {
			message: 'Username must be between 3 and 20 characters',
		}),
	email: z
		.string()
		.nonempty('Email is required')
		.refine(val => validate.email(val).isValid, {
			message: 'Invalid email address',
		}),
	password: z
		.string()
		.nonempty('Password is required')
		.min(5, 'Password must be at least 5 characters long'),
});

export type UserInput = z.infer<typeof userSchema>;

export const validateUser = (data: unknown): UserInput => {
	return userSchema.parse(data);
};
