import {
	uuid,
	pgEnum,
	pgTable,
	varchar,
	text,
	timestamp,
} from 'drizzle-orm/pg-core';
import { users } from './user.schema';

export const visibilityEnum = pgEnum('visibility', ['public', 'private']);

export const communities = pgTable('communities', {
	id: uuid('id').primaryKey().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
	description: text('description').notNull(),
	profileImage: varchar('profile_image', { length: 255 }),
	coverImage: varchar('cover_image', { length: 255 }),
	link: varchar('link', { length: 255 }),
	visibility: visibilityEnum('visibility').default('public').notNull(),
	createdBy: uuid('created_by').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const communityUsers = pgTable('community_users', {
	communityId: uuid('community_id').references(() => communities.id),
	userId: uuid('user_id').references(() => users.id),
});

export const joinRequests = pgTable('join_requests', {
	communityId: uuid('community_id').references(() => communities.id),
	userId: uuid('user_id').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Community = typeof communities.$inferSelect;
export type NewCommunity = typeof communities.$inferInsert;
