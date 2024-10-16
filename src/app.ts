import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { defaultRoutes } from './routes';
import { customLogger } from './utils/logger';

const app = new Hono();

app.use('*', logger(customLogger));

for (const route of defaultRoutes) {
	app.route(`${route.path}`, route.route);
}

export default app;
