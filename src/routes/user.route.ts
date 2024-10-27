import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.get('/:username', c => {
	const { username } = c.req.param();
	return c.json(
		{ message: `User ${username} fetched successfully!` },
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

export default routes;
