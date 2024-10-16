import { z } from 'zod';

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
	LOG_LEVEL: z
		.enum(Object.values(LogLevel) as [string, ...string[]])
		.default(LogLevel.INFO),
	LOG_USE_COLORS: z.boolean().default(true),
});

export const env = envSchema.parse(Bun.env);
