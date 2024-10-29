import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';
import { sendResponse } from '../utils/response';

const routes = new Hono();

routes.get('/:username', async c => {
	const { username } = c.req.param();
	return sendResponse(c, httpStatus.OK, { username: `${username}` });
});

routes.get('/search', async c => {
	const { query } = c.req.query();
	return c.json(
		{ message: `Search results for query: ${query}` },
		httpStatus.OK,
	);
});

routes.get('/active', async c => {
	return c.json(
		{ message: 'Active users fetched successfully!' },
		httpStatus.OK,
	);
});

export default routes;
