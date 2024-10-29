import type { Context } from 'hono';
import { httpStatus, httpStatusMessages } from './http-status';

export const handleApiError = (
	result: {
		success: boolean;
	},
	c: Context,
) => {
	if (!result.success) {
		return c.json(
			{ message: httpStatusMessages[httpStatus.BAD_REQUEST] },
			httpStatus.BAD_REQUEST,
		);
	}
};

export const sanitizeInput = (input: string): string => {
	return input.replace(/['";]/g, '').trim();
};
