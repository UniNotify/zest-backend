import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.post('/', async c => {
	const userData = await c.req.json();
	return c.json(
		{ message: 'User created successfully!', user: userData },
		httpStatus.CREATED,
	);
});

routes.get('/:username', c => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.put('/:userId', async c => {
	const { userId } = c.req.param();
	const updatedData = await c.req.json();
	return c.json(
		{ message: `User ${userId} updated successfully!`, user: updatedData },
		httpStatus.OK,
	);
});

routes.delete('/:userId', c => {
	const { userId } = c.req.param();
	return c.json(
		{ message: `User ${userId} deleted successfully!` },
		httpStatus.OK,
	);
});

routes.get('/:userId/saved', c => {
	const { userId } = c.req.param();
	return c.json(
		{ message: `Saved posts for user ${userId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.get('/search', c => {
	const { query } = c.req.query();
	return c.json(
		{ message: `Search results for query: ${query}` },
		httpStatus.OK,
	);
});

routes.get('/active', c => {
	return c.json(
		{ message: 'Active users fetched successfully!' },
		httpStatus.OK,
	);
});

routes.post('/:userId/profile', async c => {
	const { userId } = c.req.param();
	return c.json(
		{ message: `Profile picture uploaded successfully for user ${userId}!` },
		httpStatus.OK,
	);
});

routes.post('/:userId/background', async c => {
	const { userId } = c.req.param();
	return c.json(
		{
			message: `Background picture uploaded successfully for user ${userId}!`,
		},
		httpStatus.OK,
	);
});

export default routes;
