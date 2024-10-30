import { bio, password, url, username } from './custom.refine.validation';

import { z } from 'zod';

export const authSchema = z.object({
	username: username,
	bio: bio,
	avatar: url,
	background: url,
	password: password,
});

export const loginSchema = authSchema.omit({
	bio: true,
	avatar: true,
	background: true,
});

export const updateSchema = z.object({
	username: username.optional(),
	bio: bio.optional(),
	avatar: url.optional(),
	background: url.optional(),
	password: password.optional(),
});
