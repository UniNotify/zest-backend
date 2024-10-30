import { env } from './env';

export const config = {
	server: {
		env: env.ENV,
		port: env.SERVER_PORT,
	},
	database: {
		url: env.DATABASE_URL,
	},
	log: {
		level: env.LOG_LEVEL,
		color: env.LOG_USE_COLORS,
	},
	kinde: {
		auth: {
			domain: env.KINDE_DOMAIN,
			client: { id: env.KINDE_CLIENT_ID, secret: env.KINDE_CLIENT_SECRET },
		},
		redirects: {
			uri: env.KINDE_REDIRECT_URI,
			logout: { uri: env.KINDE_LOGOUT_REDIRECT_URI },
		},
	},
};
