// @/db/functions/product.ts
import { db } from "@/index";
import { products, SelectProduct } from "@/db/schemas/products";
import { desc, eq, gte } from "drizzle-orm";

export async function getLatestProducts(): Promise<SelectProduct[]> {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  return db
    .select()
    .from(products)
    .where(gte(products.createdAt, thirtyDaysAgo))
    .orderBy(desc(products.createdAt))
    .limit(8);
}

export async function getProducts(): Promise<SelectProduct[]> {
  // 1. Fetch base data
  const productsData = await db.select().from(products);
  return productsData;
}

export async function getProductSlugs(): Promise<SelectProduct["slug"][]> {
  // 1. Fetch base data
  const rows = await db.select({ slug: products.slug }).from(products);
  return rows.map((row) => row.slug);
}

export async function getProductBySlug(
  slug: string,
): Promise<SelectProduct | null> {
  // 1. Get product
  const productRows = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1);

  return productRows[0];
}
