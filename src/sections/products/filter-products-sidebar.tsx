// @/sections/products/filter-products-sidebar.tsx
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { Suspense } from "react";
import { getProductsData } from "@/lib/data";

export async function FilterProductsSidebar() {
  const products = await getProductsData(); // Cached for 6 hours

  return (
    <Suspense>
      <FilterSidebar products={products} />
    </Suspense>
  );
}
