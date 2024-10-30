import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';
import { sendResponse } from '../utils/response';

const routes = new Hono();

routes.get('/get/:username', async c => {
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

export default routes;
