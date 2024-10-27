import { z } from 'zod';
import { config as loadEnv } from 'dotenv';

loadEnv();

enum LogLevel {
	TRACE = 'trace',
	DEBUG = 'debug',
	INFO = 'info',
	WARN = 'warn',
	ERROR = 'error',
	FATAL = 'fatal',
}

const envSchema = z.object({
	IS_PRODUCTION: z.preprocess(
		val => val === 'true' || val === true,
		z.boolean().default(true),
	),
	SERVER_PORT: z.preprocess(val => Number(val), z.number().default(3000)),
	DATABASE_URL: z.string().url(),
	LOG_LEVEL: z.nativeEnum(LogLevel).default(LogLevel.INFO),
	LOG_USE_COLORS: z.preprocess(
		val => val === 'true' || val === true,
		z.boolean().default(true),
	),
	KINDE_DOMAIN: z.string(),
	KINDE_CLIENT_ID: z.string(),
	KINDE_CLIENT_SECRET: z.string(),
	KINDE_REDIRECT_URI: z.string().url(),
	KINDE_LOGOUT_REDIRECT_URI: z.string().url(),
});

export const env = envSchema.parse(process.env);
