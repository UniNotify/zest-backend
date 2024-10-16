import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { config } from './app.config';

const sql = neon(config.database.url);
export const db = drizzle({ client: sql });
