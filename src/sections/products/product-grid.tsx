// @/sections/products/product-grid.tsx
import { FilterPagination } from "@/components/filters/pagination";
import { SortSelect } from "@/components/filters/sort-select";
import { EmptyState } from "@/components/product/empty-state";
import { ProductCard } from "@/components/product/product-card";
import { AppBreadcrumb } from "@/layouts/app-breadcrumb";
import { getPaginatedProductsData } from "@/lib/data";
import { filterSchema, ValidFilters } from "@/schemas/filters";
import { SearchParams } from "@/types/common";

export async function ProductGrid({ searchParams }: SearchParams) {
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

  const { data, totalPages, totalCount } =
    await getPaginatedProductsData(filters);

  return (
    <div className="space-y-5">
      <div className="flex gap-4 justify-between">
        <div className="space-y-4">
          <AppBreadcrumb />
          <h2 className="mb-4 text-sm text-muted-foreground">
            Showing {data.length} of {totalCount} results
          </h2>
        </div>
        <SortSelect className="hidden lg:inline-flex" />
      </div>
      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 @[800px]:grid-cols-3 @[1100px]:grid-cols-4 gap-6 mb-8">
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
        <EmptyState showProductButton={false} />
      )}
    </div>
  );
}
