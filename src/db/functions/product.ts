// @/db/functions/product.ts
import { db } from "@/index";
import { products, SelectProduct } from "@/db/schemas/products";
import { and, desc, eq, gte, lte } from "drizzle-orm";
import { offers } from "@/db/schemas/offers";

export async function getProducts(): Promise<SelectProduct[]> {
  // 1. Fetch base data
  const productsData = await db.select().from(products);
  return productsData;
}

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

export async function getDiscountedProducts() {
  const now = new Date();

  const rows = await db
    .select({
      product: products,
      offer: offers,
    })
    .from(products)
    .innerJoin(offers, eq(products.id, offers.productId))
    .where(
      and(
        eq(offers.isActive, true),
        lte(offers.startDate, now),
        gte(offers.endDate, now),
      ),
    );

  return rows.map(({ product, offer }) => {
    let discountedPrice = product.price;

    if (offer.discountType === "percentage") {
      discountedPrice =
        product.price - (product.price * offer.discountValue) / 100;
    }

    if (offer.discountType === "fixed_amount") {
      discountedPrice = product.price - offer.discountValue;
    }

    return {
      ...product,
      offer,
      discountedPrice: Math.max(discountedPrice, 0), // safety
    };
  });
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
