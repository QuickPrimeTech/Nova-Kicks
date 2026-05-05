// @/layouts/app-header.tsx
import { getCategoriesWithCount } from "@/db/functions/category";
import { cacheLife } from "next/cache";
import { Navbar } from "./navbar";
import { getProducts } from "@/db/functions/product";

const getCategoriesWithCountCached = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  const products = await getProducts();
  const categories = await getCategoriesWithCount();
  return { categories, products };
};

export const AppHeader = async () => {
  const { categories, products } = await getCategoriesWithCountCached();

  return <Navbar categories={categories} products={products} />;
};
