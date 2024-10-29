import { httpStatusMessages } from './http-status';

export const sendResponse = (
	c,
	status: number,
	message?: string,
	data?: Record<string, any> | string,
) => {
	interface Response {
		message: string;
		data?: Record<string, any> | string;
		timestamp: string;
	}

	const response: Response = {
		message: message || httpStatusMessages[status] || 'Unknown status',
		timestamp: new Date().toISOString(),
		...(data && { data }), // Only add `data` if it's provided
	};

	c.status(status).json(response);
};
