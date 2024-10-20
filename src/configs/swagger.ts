import type { Hono, Context } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';

export const swaggerConfig = {
	openapi: '3.0.0',
	info: {
		title: 'Zest API',
		version: '1.0.0',
		description: 'API documentation for Zest backend',
	},
	servers: [
		{
			url: 'http://localhost:3000',
			description: 'Development server',
		},
	],
};

export const createSwaggerDocs = (app: Hono) => {
	app.get('/swagger.json', (c: Context) => c.json(swaggerConfig));
	app.get('/swagger', swaggerUI({ url: '/swagger.json' }));
};
