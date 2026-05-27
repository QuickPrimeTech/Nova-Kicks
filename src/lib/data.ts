// @/lib/data.ts
"use cache";
import { cacheLife } from "next/cache";
import { CACHE_PROFILES } from "./cache-config";
import {
  getBrands,
  getDiscountedProducts,
  getLatestProducts,
  getLimitedProducts,
  getPaginatedProducts,
  getProducts,
  getProductsForNav,
} from "@/db/functions/product";
import {
  getCategories,
  getCategoriesWithCount,
  getCategoryFromSlug,
} from "@/db/functions/category";

export const getHomePageData = async () => {
  cacheLife(CACHE_PROFILES.default);

  const [featuredProducts, categories, offers, limitedProducts, brands] =
    await Promise.all([
      getLatestProducts(),
      getCategories(),
      getDiscountedProducts(),
      getLimitedProducts(),
      getBrands(5),
    ]);

  return { featuredProducts, categories, offers, limitedProducts, brands };
};

export const fetchBrandPageData = async () => {
  cacheLife(CACHE_PROFILES.default);

  return await getBrands();
};

export const getCategoriesPageData = async () => {
  cacheLife(CACHE_PROFILES.default);

  return await getCategoriesWithCount();
};

export const getCategoryPageData = async (slug: string) => {
  cacheLife(CACHE_PROFILES.default);

  return await getCategoryFromSlug(slug);
};

export const getNavData = async () => {
  cacheLife(CACHE_PROFILES.default);

  // Parallelize the queries to reduce total execution time
  const [products, categories, brands] = await Promise.all([
    getProductsForNav(),
    getCategoriesWithCount(),
    getBrands(),
  ]);

  return { categories, products, brands };
};

export const getPaginatedProductsData = async (
  ...args: Parameters<typeof getPaginatedProducts>
) => {
  cacheLife(CACHE_PROFILES.default);

  return getPaginatedProducts(...args);
};

export const getProductsData = async (categorySlug?: string) => {
  cacheLife(CACHE_PROFILES.default);

  return await getProducts(categorySlug);
};
