// @/db/schemas/products.ts
import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core";
import { categories } from "./categories";
import { timestamps } from "./common";

// TypeScript interfaces for our JSONB columns
export type ProductImage = {
  url: string;
  altText: string;
  isPrimary: boolean;
};

export const products = pgTable("products", {
  // Core Identifiers
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),

  // Details
  description: text("description"),
  brand: text("brand"),

  //Adding categoryId as a foreign key reference to categories table
  categoryId: uuid("category_id").references(() => categories.id),

  // Storing Ksh as an integer to avoid floating-point math errors
  price: integer("price").notNull(),
  isPublished: boolean("is_published").notNull().default(true),

  ...timestamps,
});

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
