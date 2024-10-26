import { Hono } from 'hono';
import userRoute from './user.route';
import authRoute from './auth.route';
import utilRoute from './util.route';
import communityRoute from './community.route';
import postRoute from './post.route';
import commentRoute from './comment.route';

export const routes = new Hono();

routes
	.basePath('/api')
	.route('/user', userRoute)
	.route('/auth', authRoute)
	.route('/utils', utilRoute)
	.route('/communities', communityRoute)
	.route('/posts', postRoute)
	.route('/comments', commentRoute);
