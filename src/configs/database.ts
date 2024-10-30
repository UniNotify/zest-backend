import { config } from './app.config';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';

const sql = neon(config.database.url);
export const db = drizzle({ client: sql });
