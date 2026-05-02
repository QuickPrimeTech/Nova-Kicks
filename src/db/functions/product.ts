// @/db/functions/fetch-featured-product.ts
import { db } from "@/index";
import { products, SelectProduct } from "@/db/schemas/products";
import { eq } from "drizzle-orm";

export async function getFeaturedProducts(): Promise<SelectProduct[]> {
  // 1. Fetch base data
  const productsData = await db.select().from(products);
  return productsData;
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
