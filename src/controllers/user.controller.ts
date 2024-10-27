import { httpStatus } from '../utils/http-status';
import { response } from '../utils/response';

export const getUserByUsername = async c => {
	const { username } = c.req.param();
	return response(c, `Hello, ${username}!`, httpStatus.OK);
};

export const searchUsers = async c => {
	return response(c, 'Search results', httpStatus.OK);
};
