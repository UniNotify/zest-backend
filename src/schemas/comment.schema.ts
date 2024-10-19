import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './user.schema';
import { posts } from './post.schema';

export const comments = pgTable('comments', {
	id: uuid('id').primaryKey().notNull(),
	createdBy: uuid('created_by')
		.references(() => users.id)
		.notNull(),
	postId: uuid('post_id')
		.references(() => posts.id)
		.notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
