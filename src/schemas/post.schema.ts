import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './user.schema';
import { communities } from './community.schema';

export const posts = pgTable('posts', {
	id: uuid('id').primaryKey().notNull(),
	communityId: uuid('community_id').references(() => communities.id),
	createdBy: uuid('created_by')
		.references(() => users.id)
		.notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const postLikes = pgTable('post_likes', {
	postId: uuid('post_id').references(() => posts.id),
	userId: uuid('user_id').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
