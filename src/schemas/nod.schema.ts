import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { threads } from './thread.schema';
import { tribes } from './tribe.schema';
import { users } from './user.schema';

export const nods = pgTable('nods', {
	id: uuid('id').primaryKey().notNull(),
	tribeBy: uuid('tribe_by').references(() => tribes.id),
	createdBy: uuid('created_by')
		.references(() => users.id)
		.notNull(),
	postId: uuid('post_id')
		.references(() => threads.id)
		.notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Comment = typeof nods.$inferSelect;
export type NewComment = typeof nods.$inferInsert;
