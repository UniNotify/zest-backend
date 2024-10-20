import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { sentry } from '@hono/sentry';
import ApiError from './utils/api-error';
import { errorHandler } from './middlewares/error';
import { httpStatus, httpStatusMessages } from './utils/http-status';
import { customLogger } from './utils/logger';
import { routes } from './routes';

const app = new Hono();

app.use('*', logger(customLogger));
app.use('*', sentry());
app.use('*', cors());

app.notFound(() => {
	throw new ApiError(
		httpStatus.NOT_FOUND,
		httpStatusMessages[httpStatus.NOT_FOUND],
	);
});

app.onError(errorHandler);

for (const route of routes) {
	app.route(route.path, route.route);
}

export default app;
