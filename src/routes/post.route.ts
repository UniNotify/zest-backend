import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

// Use name block
routes.post('/', c => {
	return c.json({ message: 'Post created successfully!' }, httpStatus.CREATED);
});

routes.get('/', c => {
	return c.json({ message: 'Posts fetched successfully!' }, httpStatus.OK);
});

routes.get('/:postId', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.put('/:postId', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} updated successfully!` },
		httpStatus.OK,
	);
});

routes.delete('/:postId', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} deleted successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:postId/like', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} liked successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:postId/unlike', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} unliked successfully!` },
		httpStatus.OK,
	);
});

routes.get('/:postId/likes', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Likes for post ${postId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:postId/bookmark', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} bookmarked successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:postId/remove-bookmark', c => {
	const { postId } = c.req.param();
	return c.json(
		{ message: `Post ${postId} bookmark removed successfully!` },
		httpStatus.OK,
	);
});

export default routes;
