import app from './app';
import { config } from './configs';
import { logger } from './utils/logger';

Bun.serve({
	development: config.server.env,
	port: config.server.port,
	fetch: app.fetch,
});

logger.info(`Server is running on http://127.0.0.1:${config.server.port}`);
