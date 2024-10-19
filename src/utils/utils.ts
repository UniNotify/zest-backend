import { logger } from './logger';
import { nanoid, customAlphabet } from 'nanoid';

export const generateId = (): string => nanoid();

export const generateRandomHash = (size: number): string => {
	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=?';
	const customNanoid = customAlphabet(chars, size);
	return customNanoid();
};
