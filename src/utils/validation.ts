import type { Context } from 'hono';
import { httpStatus, httpStatusMessages } from './http-status';

export const handleApiError = (
	result: {
		success: boolean;
	},
	c: Context,
) => {
	if (!result.success) {
		return c.json(
			{ message: httpStatusMessages[httpStatus.BAD_REQUEST] },
			httpStatus.BAD_REQUEST,
		);
	}
};

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const validateUsername = (username: string): boolean => {
	return username.length >= 3 && username.length <= 20;
};

export const validatePhone = (phone: string): boolean => {
	const phoneRegex = /^\+?[1-9]\d{1,14}$/;
	return phoneRegex.test(phone);
};

export type ValidationResult = {
	isValid: boolean;
	error?: string;
};

export const validate = {
	email: (email: string): ValidationResult => {
		const isValid = validateEmail(email);
		return {
			isValid,
			error: isValid ? undefined : 'Invalid email address',
		};
	},
	username: (username: string): ValidationResult => {
		const isValid = validateUsername(username);
		return {
			isValid,
			error: isValid
				? undefined
				: 'Username must be between 3 and 20 characters',
		};
	},
};

export const sanitizeInput = (input: string): string => {
	return input.replace(/['";]/g, '').trim();
};
