import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { httpStatus } from '../utils/http-status';
import { userSchema } from '../validations/user.validation';
import { handleApiError } from '../utils/validation';
import { createUser, getUserByUsername } from '../controllers/user.controller';

export const route = new Hono();

// User routes
route.get('/:username', getUserByUsername);

route.post('/', zValidator('json', userSchema, handleApiError), createUser);

route.put('/:username', c => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} updated successfully!` },
		httpStatus.OK,
	);
});

route.delete('/:username', c => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} deleted successfully!` },
		httpStatus.NO_CONTENT,
	);
});

route.get('/search', c => {
	return c.json({ message: 'Search results' }, httpStatus.OK);
});

// Session routes
route.post('/refresh-token', c => {
	return c.json({ message: 'Token refreshed successfully!' }, httpStatus.OK);
});

route.post('/validate-token', c => {
	return c.json({ message: 'Token is valid!' }, httpStatus.OK);
});

route.post('/logout', c => {
	return c.json({ message: 'User logged out successfully!' }, httpStatus.OK);
});

// File upload route
route.post('/upload', async c => {
	const body = await c.req.parseBody();
	console.log(body.file); // File | string body['file']
});
