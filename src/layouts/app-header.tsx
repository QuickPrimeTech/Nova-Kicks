// @/layouts/app-header.tsx
import { getCategoriesWithCount } from "@/db/functions/category";
import { cacheLife } from "next/cache";
import { Navbar } from "./navbar";
import { getBrands, getProductsForNav } from "@/db/functions/product";

const getNavDataCached = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  // Parallelize the queries to reduce total execution time
  const [products, categories, brands] = await Promise.all([
    getProductsForNav(),
    getCategoriesWithCount(),
    getBrands(),
  ]);

  return { categories, products, brands };
};

export const AppHeader = async () => {
  const { categories, products, brands } = await getNavDataCached();

  return <Navbar categories={categories} brands={brands} products={products} />;
};
