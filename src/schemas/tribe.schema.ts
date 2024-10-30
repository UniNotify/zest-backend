import {
	pgEnum,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core';

import { users } from './user.schema';

export const visibilityEnum = pgEnum('visibility', ['public', 'private']);

export const tribes = pgTable('tribes', {
	id: uuid('id').primaryKey().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
	description: text('description').notNull(),
	avatar: varchar('avatar', { length: 255 }),
	background: varchar('background', { length: 255 }),
	link: varchar('link', { length: 255 }),
	visibility: visibilityEnum('visibility').default('public').notNull(),
	createdBy: uuid('created_by').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const tribeMembers = pgTable('tribe_members', {
	tribeId: uuid('tribe_id').references(() => tribes.id),
	userId: uuid('user_id').references(() => users.id),
});

export const joinRequests = pgTable('join_requests', {
	tribeId: uuid('tribe_id').references(() => tribes.id),
	userId: uuid('user_id').references(() => users.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Tribe = typeof tribes.$inferSelect;
export type NewTribe = typeof tribes.$inferInsert;
