import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { sentry } from '@hono/sentry';
import { defaultRoutes } from './routes';
import { customLogger } from './utils/logger';
import { errorHandler } from './middlewares/error';
import ApiError from './utils/api-error';
import { httpStatus, httpStatusMessages } from './utils/http-status';

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

for (const route of defaultRoutes) {
	app.route(`${route.path}`, route.route);
}

export default app;
