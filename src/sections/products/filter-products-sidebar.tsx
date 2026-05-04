// @/sections/products/filter-products-sidebar.tsx

import { getProducts } from "@/db/functions/product";
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

const getProductsCached = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getProducts();
};

export async function FilterProductsSidebar() {
  const products = await getProductsCached(); // Cached for 6 hours

  return (
    <Suspense>
      <FilterSidebar products={products} />
    </Suspense>
  );
}
