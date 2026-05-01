// @/db/schemas/products.ts
import {
  pgTable,
  uuid,
  text,
  integer,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";
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
  // Pricing & Inventory
  // Storing Ksh as an integer to avoid floating-point math errors
  price: integer("price").notNull(),
  stockQuantity: integer("stock_quantity").notNull().default(0),
  isPublished: boolean("is_published").notNull().default(false),

  // JSONB Arrays for Shoe-Specific Attributes
  images: jsonb("images").$type<ProductImage[]>().notNull().default([]),

  // Store sizes (e.g., ['39', '40', '41', '42']) directly in the product
  // or use a more complex object if tracking inventory per size is needed
  availableSizes: jsonb("available_sizes")
    .$type<string[]>()
    .notNull()
    .default([]),

  // Store available colorways (e.g., ['Black', 'Oxford Brown'])
  colors: jsonb("colors").$type<string[]>().notNull().default([]),

  ...timestamps,
});

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
