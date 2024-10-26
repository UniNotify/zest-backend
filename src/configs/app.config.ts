import { env } from './env';

export const config = {
	server: { env: env.BUN_ENV, port: env.SERVER_PORT },
	database: {
		url: env.DATABASE_URL,
	},
	log: {
		level: env.LOG_LEVEL,
		color: env.LOG_USE_COLORS,
	},
	kinde: {
		domain: env.KINDE_DOMAIN,
		clientId: env.KINDE_CLIENT_ID,
		clientSecret: env.KINDE_CLIENT_SECRET,
		redirectUri: env.KINDE_REDIRECT_URI,
		logoutRedirectUri: env.KINDE_LOGOUT_REDIRECT_URI,
	},
};
