// @/sections/categories/slug/category-products-grid.tsx
import { FilterPagination } from "@/components/filters/pagination";
import { SortSelect } from "@/components/filters/sort-select";
import { EmptyState } from "@/components/product/empty-state";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { getPaginatedProductsData } from "@/lib/data";
import { filterSchema, ValidFilters } from "@/schemas/filters";
import { SlugParam } from "@/types/category";
import { SearchParams } from "@/types/common";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function CategoryProductsGrid({
  params,
  searchParams,
}: SlugParam & SearchParams) {
  const { slug } = await params;
  const rawParams = await searchParams;

  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(rawParams)) {
    if (value === undefined) continue;
    normalized[key] = Array.isArray(value) ? value.join(",") : value;
  }

  const parsed = filterSchema.safeParse(normalized);
  const filters: ValidFilters = parsed.success
    ? parsed.data
    : { page: 1, limit: 15 };

  const { data, totalPages, totalCount } = await getPaginatedProductsData(
    filters,
    slug,
  );

  return (
    <div className="space-y-4">
      <Button
        size={"sm"}
        variant={"link"}
        className="w-fit justify-items-start"
        asChild
      >
        <Link href={"/categories"}>
          <ArrowLeft />
          All Categories
        </Link>
      </Button>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold md:text-2xl">
            {data[0] ? data[0]?.category?.name : ""}
          </h1>
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {data.length} of {totalCount} results
          </div>
        </div>
        <SortSelect className="hidden lg:inline-flex" />
      </div>

      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 @[900px]:grid-cols-3 @[1100px]:grid-cols-4 gap-6 mb-8">
            {data.map((product) => (
              <ProductCard
                key={product.id}
                showThumbnails={false}
                product={product}
                offer={product.offer ?? undefined}
                showStock={filters.collection === "limited"}
                showCreated={filters.collection === "new"}
              />
            ))}
          </div>
          <FilterPagination totalPages={totalPages} />
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
