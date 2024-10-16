import { defineConfig } from 'drizzle-kit';
import { config } from './src/configs';

export default defineConfig({
	out: './src/migrations',
	schema: './src/schemas/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: config.database.url,
	},
});
