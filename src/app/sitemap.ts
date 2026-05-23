// @/app/sitemap.ts
import { MetadataRoute } from "next";
import { db } from "@/index";
import { products, categories } from "@/db/schema";
import { eq, isNotNull } from "drizzle-orm";

// Force exactly one canonical domain format
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://novakicks.quickprimetech.com"
)
  .replace(/\/$/, "") // No trailing slash on domain
  .replace(/^http:/, "https:"); // Force HTTPS

// Helper: builds the exact canonical URL used site-wide
const canonical = (path: string) => {
  const cleanPath = path.replace(/^\//, ""); // Remove leading slash if present
  return `${SITE_URL}/${cleanPath}`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date();

  // ── STATIC PAGES ──
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: canonical(""),
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: canonical("products"),
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: canonical("categories"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: canonical("checkout"),
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // ── PRODUCTS ──
  const allProducts = await db
    .select({ slug: products.slug, updatedAt: products.updatedAt })
    .from(products)
    .where(eq(products.isPublished, true));

  const productRoutes: MetadataRoute.Sitemap = allProducts.map((p) => ({
    url: canonical(`products/${p.slug}`),
    lastModified: p.updatedAt ?? today,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ── CATEGORIES ──
  const allCategories = await db
    .select({ slug: categories.slug, updatedAt: categories.updatedAt })
    .from(categories)
    .where(isNotNull(categories.slug));

  const categoryRoutes: MetadataRoute.Sitemap = allCategories.map((c) => ({
    url: canonical(`categories/${c.slug}`),
    lastModified: c.updatedAt ?? today,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes];
}
