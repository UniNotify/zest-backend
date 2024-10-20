import userRoute from './user.route';
import authRoute from './auth.route';
import utilRoute from './util.route';
import communityRoute from './community.route';
import postRoute from './post.route';
import commentRoute from './comment.route';

const base_path = 'api';

export const routes = [
	{
		path: `/${base_path}/user`,
		route: userRoute,
	},
	{
		path: `/${base_path}/auth`,
		route: authRoute,
	},
	{
		path: `/${base_path}/utils`,
		route: utilRoute,
	},
	{
		path: `/${base_path}/communities`,
		route: communityRoute,
	},
	{
		path: `/${base_path}/posts`,
		route: postRoute,
	},
	{
		path: `/${base_path}/comments`,
		route: commentRoute,
	},
];
