import { Hono } from 'hono';
import { httpStatus } from '../utils/httpStatus';

export const route = new Hono();

route.get('/:username', c => {
	const { username } = c.req.param();
	return c.json({ message: `Hello, ${username}!` }, httpStatus.OK);
});

route.post('/', c => {
	return c.json({ message: 'User created successfully!' }, httpStatus.CREATED);
});

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

route.post('/refresh-token', c => {
	return c.json({ message: 'Token refreshed successfully!' }, httpStatus.OK);
});

route.post('/validate-token', c => {
	return c.json({ message: 'Token is valid!' }, httpStatus.OK);
});

route.post('/logout', c => {
	return c.json({ message: 'User logged out successfully!' }, httpStatus.OK);
});
