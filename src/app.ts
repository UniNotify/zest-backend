import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { defaultRoutes } from './routes';

const app = new Hono();

app.use('*', logger());

for (const route of defaultRoutes) {
	app.route(`${route.path}`, route.route);
}

export default app;
