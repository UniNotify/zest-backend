import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { sentry } from '@hono/sentry';
import ApiError from './utils/api-error';
import { errorHandler } from './middlewares/error';
import { httpStatus, httpStatusMessages } from './utils/http-status';
import { logger as customLogger } from './utils/logger';
import { routes } from './routes';

const app = new Hono();

app.use(
	'*',
	logger((message, ...rest) => customLogger.info(message, ...rest)),
);
app.use('*', sentry());
app.use('*', cors());

const apiRoute = app.route('/', routes);

app.notFound(() => {
	throw new ApiError(
		httpStatus.NOT_FOUND,
		httpStatusMessages[httpStatus.NOT_FOUND],
	);
});

app.onError(errorHandler);

export default app;
export type AppType = typeof apiRoute;
