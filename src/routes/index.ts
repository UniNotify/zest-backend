import { Hono } from 'hono';
import authRoute from './auth.route';
import commentRoute from './comment.route';
import communityRoute from './community.route';
import postRoute from './post.route';
import userRoute from './user.route';
import utilRoute from './util.route';

export const routes = new Hono();

routes
	.basePath('/api')
	.route('/user', userRoute)
	.route('/auth', authRoute)
	.route('/utils', utilRoute)
	.route('/communities', communityRoute)
	.route('/posts', postRoute)
	.route('/comments', commentRoute);
