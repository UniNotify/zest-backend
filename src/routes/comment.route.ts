import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.post('/comments', c => {
	return c.json(
		{ message: 'Comment created successfully!' },
		httpStatus.CREATED,
	);
});

routes.get('/posts/:postId/comments', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Comments for post ${postId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.put('/comments/:commentId', c => {
	const { commentId } = c.req.param();
	return c.json(
		{ message: `Comment ${commentId} updated successfully!` },
		httpStatus.OK,
	);
});

routes.delete('/comments/:commentId', c => {
	const { commentId } = c.req.param();
	return c.json(
		{ message: `Comment ${commentId} deleted successfully!` },
		httpStatus.OK,
	);
});

routes.get('/comments/:commentId', c => {
	const { commentId } = c.req.param();
	return c.json(
		{ message: `Comment ${commentId} fetched successfully!` },
		httpStatus.OK,
	);
});

export default routes;
