import { httpStatus } from '../utils/http-status';
import { sendResponse } from '../utils/response';

export const getUserByUsername = async c => {
	const { username } = c.req.param();
	return sendResponse(c, httpStatus.OK, { username: `${username}!` });
};

export const searchUsers = async c => {
	return sendResponse(c, httpStatus.OK, { users: [] });
};
