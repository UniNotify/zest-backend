import { httpStatus } from '../utils/http-status';

export const getUserByUsername = async (c: any) => {
	const { username } = c.req.param();
	return c.json({ message: `Hello, ${username}!` }, httpStatus.OK);
};

export const createUser = async (c: any) => {
	const data = c.req.valid('json');
	return c.json(
		{
			message: 'User created successfully!',
			info: { name: data.name, username: data.username, email: data.email },
		},
		httpStatus.CREATED,
	);
};

export const updateUser = async (c: any) => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} updated successfully!` },
		httpStatus.OK,
	);
};

export const deleteUser = async (c: any) => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} deleted successfully!` },
		httpStatus.NO_CONTENT,
	);
};

export const searchUsers = async (c: any) => {
	return c.json({ message: 'Search results' }, httpStatus.OK);
};

export const refreshToken = async (c: any) => {
	return c.json({ message: 'Token refreshed successfully!' }, httpStatus.OK);
};

export const validateToken = async (c: any) => {
	return c.json({ message: 'Token is valid!' }, httpStatus.OK);
};

export const logout = async (c: any) => {
	return c.json({ message: 'User logged out successfully!' }, httpStatus.OK);
};

export const uploadFile = async (c: any) => {
	const body = await c.req.parseBody();
	console.log(body.file); // File | string body['file']
};
