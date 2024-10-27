import { z } from 'zod';

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
	username: z.string().min(1, 'Username is required'),
	email: z.string().min(1, 'Email is required'),
	password: z.string().min(5, 'Password must be at least 5 characters long'),
});

export type SignupValidationType = z.infer<typeof signupValidationSchema>;

export const ForgotPasswordValidationSchema = z.object({
	email: z.string().min(1, 'Email is required'),
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
