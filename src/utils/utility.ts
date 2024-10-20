import { nanoid, customAlphabet } from 'nanoid';

export const generateId = (): string => nanoid();

export const generateRandomHash = (size: number): string => {
	const string =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=?';
	const customNanoid = customAlphabet(string, size);
	return customNanoid();
};

export const generateRandomNumber = (size: number): string => {
	const string = '1234567890';
	const customNanoid = customAlphabet(string, size);
	return customNanoid();
};

export const generateRandomString = (size: number): string => {
	const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const customNanoid = customAlphabet(string, size);
	return customNanoid();
};

const usedUsernames = new Set<string>();

export const generateUsername = (): string => {
	const syllables = 'bcdfghjklmnpqrstvwxyz';
	const vowels = 'aeiou';
	const suffixes = 'rxonioniousered';

	const randomFromString = (str: string): string => {
		return str[Math.floor(Math.random() * str.length)];
	};

	const createSyllable = (): string => {
		return randomFromString(syllables) + randomFromString(vowels);
	};

	let username =
		createSyllable() + createSyllable() + randomFromString(suffixes);

	while (usedUsernames.has(username)) {
		username = createSyllable() + createSyllable() + randomFromString(suffixes);
	}

	usedUsernames.add(username);

	return username;
};
