import { Hono } from 'hono';
import { generateUsername } from '../utils/utility';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.get('/username', c => {
	const usernames = Array.from({ length: 6 }, () => generateUsername());
	return c.json({ usernames }, httpStatus.OK);
});

export default routes;
