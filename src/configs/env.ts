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
	BUN_ENV: z.preprocess(val => val === 'true', z.boolean()).default(true),
	SERVER_PORT: z
		.preprocess(val => Number(val as string), z.number())
		.default(3000),
	DATABASE_URL: z.string(),
	LOG_LEVEL: z.nativeEnum(LogLevel).default(LogLevel.INFO),
	LOG_USE_COLORS: z
		.preprocess(val => val === 'true', z.boolean())
		.default(true),
});

export const env = envSchema.parse(Bun.env);
