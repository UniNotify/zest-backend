import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { generateId } from '../utils/utils';

export const users = pgTable('users', {
	id: uuid('id').default(generateId()).primaryKey(),
	fullName: varchar('full_name', { length: 255 }).notNull(),
	username: varchar('username', { length: 50 }).notNull().unique(),
	password: varchar('password', { length: 255 }).notNull(),
	bio: text('bio'),
	profilePicture: varchar('profile_picture', { length: 255 }),
	backgroundPicture: varchar('background_picture', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
