import { Hono } from 'hono';
import { httpStatus } from '../utils/http-status';

const routes = new Hono();

routes.post('/', c => {
	return c.json(
		{ message: 'Community created successfully!' },
		httpStatus.CREATED,
	);
});

routes.get('/', c => {
	return c.json(
		{ message: 'Communities fetched successfully!' },
		httpStatus.OK,
	);
});

routes.get('/:communityId', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Community ${communityId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.put('/:communityId', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Community ${communityId} updated successfully!` },
		httpStatus.OK,
	);
});

routes.delete('/:communityId', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Community ${communityId} deleted successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:communityId/join', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Joined community ${communityId} successfully!` },
		httpStatus.OK,
	);
});

routes.post('/:communityId/leave', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Left community ${communityId} successfully!` },
		httpStatus.OK,
	);
});

routes.get('/:communityId/members', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Members of community ${communityId} fetched successfully!` },
		httpStatus.OK,
	);
});

routes.get('/:communityId/join-requests', c => {
	const { communityId } = c.req.param();
	return c.json(
		{
			message: `Join requests for community ${communityId} fetched successfully!`,
		},
		httpStatus.OK,
	);
});

routes.post('/:communityId/approve', c => {
	const { communityId } = c.req.param();
	return c.json(
		{
			message: `Join request for community ${communityId} approved successfully!`,
		},
		httpStatus.OK,
	);
});

routes.post('/:communityId/reject', c => {
	const { communityId } = c.req.param();
	return c.json(
		{ message: `Join request for community ${communityId} rejected!` },
		httpStatus.OK,
	);
});

export default routes;
