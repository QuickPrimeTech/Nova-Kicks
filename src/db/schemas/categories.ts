// @/db/schemas/categories.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { timestamps } from "./common";

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(), // e.g., 'Running Shoes'
  slug: text("slug").notNull().unique(),
  image: text("image_url"),
  ...timestamps,
});

export type InsertCategory = typeof categories.$inferInsert;
export type SelectCategory = typeof categories.$inferSelect;
