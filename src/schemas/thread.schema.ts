import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

import { tribes } from './tribe.schema';
import { users } from './user.schema';

export const threads = pgTable('threads', {
	id: uuid('id').primaryKey().notNull(),
	tribeId: uuid('tribe_id').references(() => tribes.id),
	createdBy: uuid('created_by')
		.references(() => users.id)
		.notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const threadLikes = pgTable('thread_likes', {
	threadId: uuid('thread_id').references(() => threads.id),
	userId: uuid('user_id').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Thread = typeof threads.$inferSelect;
export type NewThread = typeof threads.$inferInsert;
