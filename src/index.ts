import app from './app';
import { config } from './configs';

Bun.serve({
	development: config.server.env,
	port: config.server.port,
	fetch: app.fetch,
});
