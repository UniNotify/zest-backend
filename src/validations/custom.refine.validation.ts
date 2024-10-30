import { z } from 'zod';

export const username = z
	.string()
	.min(3, 'Username must be at least 3 characters long.')
	.max(50, 'Username must be at most 50 characters long.')
	.regex(
		/^[a-zA-Z0-9_]+$/,
		'Username can only contain letters, numbers, and underscores.',
	);

export const password = z
	.string()
	.min(8, 'Password must be at least 8 characters long.')
	.regex(/\d/, 'Password must contain at least one number.')
	.regex(/[a-zA-Z]/, 'Password must contain at least one letter.');

export const bio = z.string().max(250, 'Bio must be at most 250 characters ');

export const url = z.string().url('Invalid URL format.');

export const title = z
	.string()
	.max(255, 'Title must be at most 255 characters.');

export const id = z.string().uuid('Invalid ID format.');

export const content = z
	.string()
	.min(1, 'Content must be at least 1 character long.');
