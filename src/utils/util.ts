import { nanoid, customAlphabet, customRandom, random } from 'nanoid';

export const generateUniqueId = (size?: number): string => nanoid(size);

export const generateRandomString = (size: number): string => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=?';
	const customNanoid = customAlphabet(characters, size);
	return customNanoid();
};

export const generateRandomNumericString = (size: 6): string => {
	const digits = '1234567890';
	const customNanoid = customRandom(digits, size, random);
	return customNanoid();
};
