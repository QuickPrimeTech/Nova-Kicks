// @/layouts/app-header.tsx
import { getCategoriesWithCount } from "@/db/functions/category";
import { cacheLife } from "next/cache";
import { Navbar } from "./navbar";

const getCategoriesWithCountCached = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getCategoriesWithCount();
};

export const AppHeader = async () => {
  const categories = await getCategoriesWithCountCached();

  return <Navbar categories={categories} />;
};
