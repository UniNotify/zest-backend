ALTER TABLE "community_users" RENAME TO "tribe_members";--> statement-breakpoint
ALTER TABLE "communities" RENAME TO "tribes";--> statement-breakpoint
ALTER TABLE "post_likes" RENAME TO "thread_likes";--> statement-breakpoint
ALTER TABLE "posts" RENAME TO "threads";--> statement-breakpoint
ALTER TABLE "comments" RENAME TO "nods";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "profile_picture" TO "avatar";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "background_picture" TO "background";--> statement-breakpoint
ALTER TABLE "tribes" RENAME COLUMN "profile_image" TO "avatar";--> statement-breakpoint
ALTER TABLE "tribes" RENAME COLUMN "cover_image" TO "background";--> statement-breakpoint
ALTER TABLE "tribe_members" RENAME COLUMN "community_id" TO "tribe_id";--> statement-breakpoint
ALTER TABLE "join_requests" RENAME COLUMN "community_id" TO "tribe_id";--> statement-breakpoint
ALTER TABLE "thread_likes" RENAME COLUMN "post_id" TO "thread_id";--> statement-breakpoint
ALTER TABLE "threads" RENAME COLUMN "community_id" TO "tribe_id";--> statement-breakpoint
ALTER TABLE "tribes" DROP CONSTRAINT "communities_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "tribe_members" DROP CONSTRAINT "community_users_community_id_communities_id_fk";
--> statement-breakpoint
ALTER TABLE "tribe_members" DROP CONSTRAINT "community_users_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "join_requests" DROP CONSTRAINT "join_requests_community_id_communities_id_fk";
--> statement-breakpoint
ALTER TABLE "thread_likes" DROP CONSTRAINT "post_likes_post_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "thread_likes" DROP CONSTRAINT "post_likes_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "threads" DROP CONSTRAINT "posts_community_id_communities_id_fk";
--> statement-breakpoint
ALTER TABLE "threads" DROP CONSTRAINT "posts_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "nods" DROP CONSTRAINT "comments_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "nods" DROP CONSTRAINT "comments_post_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "nods" ADD COLUMN "tribe_by" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribes" ADD CONSTRAINT "tribes_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_members" ADD CONSTRAINT "tribe_members_tribe_id_tribes_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_members" ADD CONSTRAINT "tribe_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join_requests" ADD CONSTRAINT "join_requests_tribe_id_tribes_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "thread_likes" ADD CONSTRAINT "thread_likes_thread_id_threads_id_fk" FOREIGN KEY ("thread_id") REFERENCES "public"."threads"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "thread_likes" ADD CONSTRAINT "thread_likes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "threads" ADD CONSTRAINT "threads_tribe_id_tribes_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "threads" ADD CONSTRAINT "threads_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nods" ADD CONSTRAINT "nods_tribe_by_tribes_id_fk" FOREIGN KEY ("tribe_by") REFERENCES "public"."tribes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nods" ADD CONSTRAINT "nods_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nods" ADD CONSTRAINT "nods_post_id_threads_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."threads"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "full_name";