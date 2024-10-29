import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.get('/username', c => {
	return c.json(httpStatus.OK);
});

export default routes;
