import { env } from "./env";

export const config = {
	server: { env: env.BUN_ENV, port: env.SERVER_PORT },
	database: {
		url: env.DATABASE_URL,
	},
	log: {
		level: env.LOG_LEVEL,
		color: env.LOG_USE_COLORS,
	},
};
