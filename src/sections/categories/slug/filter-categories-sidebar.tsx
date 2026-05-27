// @/sections/categories/slug/filter-categories-sidebar.tsx
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { getProductsData } from "@/lib/data";
import { SlugParam } from "@/types/category";
import { Suspense } from "react";

export async function FilterCateogriesidebar({ params }: SlugParam) {
  const { slug } = await params;
  const products = await getProductsData(slug); // Cached for 6 hours

  return (
    <Suspense>
      <FilterSidebar products={products} hideCategoryFilter={true} />
    </Suspense>
  );
}
