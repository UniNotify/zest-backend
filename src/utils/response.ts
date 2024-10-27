export const response = (
	c,
	message: string,
	status: number,
	data?: JSON | string,
) => {
	interface Response {
		path: string;
		message: string;
		timestamp: string;
		data?: JSON | string;
	}

	const response: Response = {
		path: c.req.originalUrl,
		message: message,
		timestamp: new Date().toISOString(),
	};

	if (data !== undefined) {
		response.data = data;
	}

	c.json(response, status);
};
