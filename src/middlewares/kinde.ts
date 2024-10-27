import {
	createKindeServerClient,
	GrantType,
	type SessionManager,
	type UserType,
} from '@kinde-oss/kinde-typescript-sdk';
import type { Context } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';
import { config } from '../configs';

// Client for authorization code flow
export const kindeClient = createKindeServerClient(
	GrantType.AUTHORIZATION_CODE,
	{
		authDomain: config.kinde.domain,
		clientId: config.kinde.clientId,
		clientSecret: config.kinde.clientSecret,
		redirectURL: config.kinde.redirectUri,
		logoutRedirectURL: config.kinde.logoutRedirectUri,
	},
);

const store: Record<string, unknown> = {};

export const sessionManager = (c: Context): SessionManager => ({
	async getSessionItem(key: string) {
		const result = getCookie(c, key);
		return result;
	},
	async setSessionItem(key: string, value: unknown) {
		const cookieOptions = {
			httpOnly: true,
			secure: true,
			sameSite: 'Lax',
		} as const;
		if (typeof value === 'string') {
			setCookie(c, key, value, cookieOptions);
		} else {
			setCookie(c, key, JSON.stringify(value), cookieOptions);
		}
	},
	async removeSessionItem(key: string) {
		deleteCookie(c, key);
	},
	async destroySession() {
		for (const key of ['id_token', 'access_token', 'user', 'refresh_token']) {
			deleteCookie(c, key);
		}
	},
});

type Env = {
	Variables: {
		user: UserType;
	};
};

export const getUser = createMiddleware<Env>(async (c, next) => {
	try {
		const manager = sessionManager(c);
		const isAuthenticated = await kindeClient.isAuthenticated(manager);
		if (!isAuthenticated) {
			return c.json({ error: 'Unauthorized' }, 401);
		}
		const user = await kindeClient.getUserProfile(manager);
		c.set('user', user);
		await next();
	} catch (e) {
		console.error(e);
		return c.json({ error: 'Unauthorized' }, 401);
	}
});
