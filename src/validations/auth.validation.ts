import { z } from 'zod';
import { validate } from '../utils/validation';

export const loginValidationSchema = z
	.object({
		username: z.string(),
		email: z.string(),
		password: z.string().min(1, 'Password is required'),
	})
	.refine(data => data.username || data.email, {
		message: 'Either username or email is required',
		path: ['username', 'email'],
	});

export type LoginValidationType = z.infer<typeof loginValidationSchema>;

export const signupValidationSchema = z.object({
	fullName: z.string().min(1, 'Full name is required'),
	username: z
		.string()
		.min(1, 'Username is required')
		.refine(val => validate.username(val).isValid, {
			message: 'Username must be between 3 and 20 characters',
		}),
	email: z
		.string()
		.min(1, 'Email is required')
		.refine(val => validate.email(val).isValid, {
			message: 'Invalid email address',
		}),
	password: z.string().min(5, 'Password must be at least 5 characters long'),
});

export type SignupValidationType = z.infer<typeof signupValidationSchema>;

export const ForgotPasswordValidationSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.refine(val => validate.email(val).isValid, {
			message: 'Invalid email address',
		}),
});

export type ForgotPasswordValidationType = z.infer<
	typeof ForgotPasswordValidationSchema
>;

export const ResetPasswordValidationSchema = z.object({
	token: z.string().length(8, 'Token is invalid'),
	password: z.string().min(5, 'Password must be at least 5 characters long'),
});

export type ResetPasswordValidationType = z.infer<
	typeof ResetPasswordValidationSchema
>;
