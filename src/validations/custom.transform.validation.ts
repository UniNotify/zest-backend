export const hashPassword = async (value: string): Promise<string> => {
	const hashedPassword = await Bun.password.hash(value, {
		algorithm: 'bcrypt',
		cost: 10,
	});
	return hashedPassword;
};

export const verifyPassword = async (
	password: string,
	hash: string,
): Promise<boolean> => {
	const isVerified = await Bun.password.verify(password, hash);
	return isVerified;
};
