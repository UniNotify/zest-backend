import { httpStatusMessages } from './http-status';
import type { Context } from 'hono';

export const sendResponse = (
	c: Context,
	status: number,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data?: Record<string, any> | string,
	message?: string,
) => {
	interface Response {
		message: string;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		data?: Record<string, any> | string;
		timestamp: string;
	}

	const response: Response = {
		message: message || httpStatusMessages[status] || 'Unknown status',
		...(data !== undefined && { data }), // Only add `data` if it's provided
		timestamp: new Date().toISOString(),
	};

	return c.json(response, { status });
};
