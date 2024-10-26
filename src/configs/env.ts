import { z } from 'zod';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

enum LogLevel {
	TRACE = 'trace',
	DEBUG = 'debug',
	INFO = 'info',
	WARN = 'warn',
	ERROR = 'error',
	FATAL = 'fatal',
}

const envSchema = z.object({
	BUN_ENV: z.boolean().default(true),
	SERVER_PORT: z.number().default(3000),
	DATABASE_URL: z.string(),
	LOG_LEVEL: z.nativeEnum(LogLevel).default(LogLevel.INFO),
	LOG_USE_COLORS: z.boolean().default(true),
	KINDE_DOMAIN: z.string(),
	KINDE_CLIENT_ID: z.string(),
	KINDE_CLIENT_SECRET: z.string(),
	KINDE_REDIRECT_URI: z.string().url(),
	KINDE_LOGOUT_REDIRECT_URI: z.string().url(),
});

export const env = envSchema.parse(process.env);
