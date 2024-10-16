import { route as userRoute } from './user.route';

const base_path = 'api';

export const defaultRoutes = [
	{
		path: `/${base_path}/users`,
		route: userRoute,
	},
];
