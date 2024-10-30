import { defineConfig } from 'drizzle-kit';
import { config } from '@/configs';

export default defineConfig({
	out: './src/migrations',
	schema: './src/schemas/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: config.database.url,
	},
});
