import { content, id, title } from './custom.refine.validation';

import { z } from 'zod';

export const thread = z.object({
	tribeId: id,
	createdBy: id,
	title: title,
	content: content,
});
