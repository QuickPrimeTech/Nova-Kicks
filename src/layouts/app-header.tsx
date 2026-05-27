// @/layouts/app-header.tsx
import { Navbar } from "./navbar";
import { getNavData } from "@/lib/data";

export const AppHeader = async () => {
  const { categories, products, brands } = await getNavData();

  return <Navbar categories={categories} brands={brands} products={products} />;
};
