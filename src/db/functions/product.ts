// @/db/functions/product.ts
import { db } from "@/index";
import { products, SelectProduct } from "@/db/schemas/products";
import {
  and,
  asc,
  count,
  desc,
  eq,
  gte,
  ilike,
  inArray,
  isNotNull,
  lte,
  ne,
  or,
  sql,
} from "drizzle-orm";
import { offers, SelectOffer } from "@/db/schemas/offers";
import {
  EnrichedProduct,
  LimitedProduct,
  ProductWithOptionalOffer,
} from "@/types/product";
import { categories } from "../schemas";
import { ValidFilters } from "@/schemas/filters";

// Add this import at the top of your file
// import { categories } from "@/db/schemas/categories";

export async function getSimilarProducts(
  productSlug: string,
): Promise<ProductWithOptionalOffer[]> {
  "use cache";
  // 1. Get reference product first
  const [baseProduct] = await db
    .select()
    .from(products)
    .where(eq(products.slug, productSlug))
    .limit(1);

  if (!baseProduct) return [];

  // 2. Fetch all candidates in a single optimized query
  const results = await db
    .select({
      product: products,
      offer: offers,
    })
    .from(products)
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        // Use standard Date objects for build-time stability
        lte(offers.startDate, new Date()),
        gte(offers.endDate, new Date()),
      ),
    )
    .where(
      and(
        eq(products.isPublished, true),
        ne(products.id, baseProduct.id), // Exclude the current product
        or(
          baseProduct.categoryId
            ? eq(products.categoryId, baseProduct.categoryId)
            : undefined,
          baseProduct.brand ? eq(products.brand, baseProduct.brand) : undefined,
          baseProduct.gender
            ? eq(products.gender, baseProduct.gender)
            : undefined,
        ),
      ),
    )
    .orderBy(
      // Weighted sorting: Category matches are highest priority, then Brand
      sql`CASE 
        WHEN ${products.categoryId} = ${baseProduct.categoryId as any} THEN 1
        WHEN ${products.brand} = ${baseProduct.brand as any} THEN 2
        ELSE 3 
      END ASC`,
    )
    .limit(8);

  // 3. Map results to your return type
  return results.map((row) => ({
    ...row.product,
    offer: row.offer,
    discountedPrice: getDiscountedPrice(row.product.price, row.offer),
  }));
}

export async function getProducts(
  categorySlug?: string,
): Promise<EnrichedProduct[]> {
  // 1. Fetch base data with joins
  const query = db
    .select({
      product: products,
      offer: offers,
      category: categories, // Ensure categories is imported
    })
    .from(products)
    // Join active offers
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    // Join categories (Assuming products table has a categoryId column)
    .leftJoin(categories, eq(products.categoryId, categories.id));

  const rows = categorySlug
    ? await query.where(eq(categories.slug, categorySlug))
    : await query;

  // 2. Map and enrich the data
  return rows.map(({ product, offer, category }) => {
    // Calculate stock size based on the pattern used in getLimitedProducts
    const sizes = product.sizes ?? [];
    const totalStock = sizes.reduce((sum, s) => sum + (s.stock ?? 0), 0);

    return {
      ...product,
      category: category ?? null,
      offer: offer ?? null,
      discountedPrice: getDiscountedPrice(product.price, offer),
      totalStock,
      sizesWithStock: sizes,
    };
  });
}

export async function getProductsForNav() {
  "use cache";
  const rows = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      price: products.price,
      brand: products.brand,
      images: products.images, // We will pick the first one in the map
    })
    .from(products)
    .where(eq(products.isPublished, true));

  return rows.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    price: p.price,
    brand: p.brand,
    image: p.images?.[0] ?? null, // Extract only the first image
  }));
}

export async function getBrands(limit?: number) {
  "use cache";

  const query = db
    .selectDistinct({
      brand: products.brand,
    })
    .from(products)
    .where(eq(products.isPublished, true));

  const rows = limit !== undefined ? await query.limit(limit) : await query;

  return rows.map((row) => row.brand);
}

export async function getPaginatedProducts(
  filters: ValidFilters,
  categorySlug?: string,
): Promise<{
  data: EnrichedProduct[];
  totalPages: number;
  totalCount: number;
}> {
  const { page = 1, limit = 15 } = filters;
  const offset = (page - 1) * limit;

  // Build WHERE conditions
  const conditions = [eq(products.isPublished, true)];

  if (categorySlug) {
    conditions.push(eq(categories.slug, categorySlug));
  }

  if (filters.gender) {
    conditions.push(eq(products.gender, filters.gender));
  }

  if (filters.category) {
    const slugs = filters.category.split(",");
    conditions.push(inArray(categories.slug, slugs));
  }

  if (filters.brand) {
    const brands = filters.brand.split(",");
    if (brands.length === 1) {
      conditions.push(ilike(products.brand, brands[0]));
    } else {
      // Postgres array literal: '{Nike,Adidas,Puma}'
      const arrayLiteral = `{${brands.join(",")}}`;
      conditions.push(sql`${products.brand} ILIKE ANY(${arrayLiteral})`);
    }
  }

  if (filters.minPrice !== undefined && filters.minPrice > 0) {
    conditions.push(gte(products.price, filters.minPrice));
  }
  if (filters.maxPrice !== undefined && filters.maxPrice > 0) {
    conditions.push(lte(products.price, filters.maxPrice));
  }

  if (filters.inStock) {
    conditions.push(
      sql`jsonb_path_exists(${products.sizes}, '$[*] ? (@.stock > 0)')`,
    );
  }

  if (filters.collection) {
    switch (filters.collection) {
      case "new": {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        conditions.push(gte(products.createdAt, thirtyDaysAgo));
        break;
      }
      case "discounted": {
        conditions.push(isNotNull(offers.id));
        break;
      }
      case "limited": {
        conditions.push(
          sql`(
          SELECT COALESCE(SUM((s->>'stock')::int), 0) 
          FROM jsonb_array_elements(${products.sizes}) AS s
        ) BETWEEN 1 AND 20`,
        );
        break;
      }
    }
  }

  const whereClause = and(...conditions);

  // Count
  const countResult = await db
    .select({ totalCount: count() })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .where(whereClause);

  const totalCount = Number(countResult[0]?.totalCount ?? 0);
  const totalPages = Math.ceil(totalCount / limit);

  // Sort order
  const effectivePrice = sql<number>`
  CASE 
    WHEN ${offers.id} IS NOT NULL AND ${offers.discountType} = 'percentage' 
      THEN (${products.price} * (100.0 - ${offers.discountValue}) / 100.0)
    WHEN ${offers.id} IS NOT NULL AND ${offers.discountType} = 'fixed_amount' 
      THEN ${products.price} - ${offers.discountValue}
    ELSE ${products.price}
  END
`;

  // Sort order
  let orderBy;
  switch (filters.sort) {
    case "name_asc":
      orderBy = asc(products.name);
      break;
    case "name_desc":
      orderBy = desc(products.name);
      break;
    case "price_asc":
      orderBy = sql`${effectivePrice} ASC`;
      break;
    case "price_desc":
      orderBy = sql`${effectivePrice} DESC`;
      break;
    case "date_asc":
      orderBy = asc(products.createdAt);
      break;
    case "date_desc":
      orderBy = desc(products.createdAt);
      break;
    default:
      orderBy = desc(products.createdAt);
  }

  // Fetch paginated data
  const rows = await db
    .select({
      product: products,
      offer: offers,
      category: categories,
    })
    .from(products)
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(whereClause)
    .orderBy(orderBy)
    .limit(limit)
    .offset(offset);

  const data = rows.map(({ product, offer, category }) => {
    const sizes = product.sizes ?? [];
    const totalStock = sizes.reduce((sum, s) => sum + (s.stock ?? 0), 0);

    return {
      ...product,
      category: category ?? null,
      offer: offer ?? null,
      discountedPrice: getDiscountedPrice(product.price, offer),
      totalStock,
      sizesWithStock: sizes,
    };
  });

  return { data, totalPages, totalCount };
}

export function getDiscountedPrice(price: number, offer?: SelectOffer | null) {
  if (!offer) return price;

  const discounted =
    offer.discountType === "percentage"
      ? price - (price * offer.discountValue) / 100
      : price - offer.discountValue;

  return Math.max(discounted, 0);
}

export async function getLatestProducts(): Promise<ProductWithOptionalOffer[]> {
  const rows = await db
    .select({
      product: products,
      offer: offers,
    })
    .from(products)
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .where(gte(products.createdAt, sql`now() - interval '30 days'`))
    .orderBy(desc(products.createdAt))
    .limit(8);

  return rows.map(({ product, offer }) => {
    return {
      ...product,
      offer,
      discountedPrice: getDiscountedPrice(product.price, offer),
    };
  });
}

export async function getDiscountedProducts() {
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
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .limit(8);

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
): Promise<ProductWithOptionalOffer | null> {
  const rows = await db
    .select({
      product: products,
      offer: offers,
    })
    .from(products)
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .where(eq(products.slug, slug))
    .limit(1);

  if (!rows.length) return null;

  const { product, offer } = rows[0];

  return {
    ...product,
    offer,
    discountedPrice: getDiscountedPrice(product.price, offer),
  };
}

export async function getLimitedProducts(): Promise<LimitedProduct[]> {
  const rows = await db
    .select({
      product: products,
      offer: offers,
    })
    .from(products)
    .leftJoin(
      offers,
      and(
        eq(products.id, offers.productId),
        eq(offers.isActive, true),
        lte(offers.startDate, sql`now()`),
        gte(offers.endDate, sql`now()`),
      ),
    )
    .where(
      // Sum stock inside the JSONB sizes array directly in SQL
      sql`(
        SELECT COALESCE(SUM((s->>'stock')::int), 0)
        FROM jsonb_array_elements(${products.sizes}) AS s
      ) BETWEEN 1 AND 20`,
    )
    .limit(8);

  return rows.map(({ product, offer }) => {
    const sizes = product.sizes ?? [];
    return {
      ...product,
      offer: offer ?? null,
      discountedPrice: getDiscountedPrice(product.price, offer),
      totalStock: sizes.reduce((sum, s) => sum + (s.stock ?? 0), 0),
      sizesWithStock: sizes,
    };
  });
}
