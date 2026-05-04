// @/app/categories/[slug]/page.tsx
import { ProductGridSkeleton } from "@/components/product-grid-skeleton";
import { Spinner } from "@/components/ui/spinner";
import { getCategories, getCategoryFromSlug } from "@/db/functions/category";
import { CategoryProductsGrid } from "@/sections/categories/slug/category-products-grid";
import { FilterCateogriesidebar } from "@/sections/categories/slug/filter-categories-sidebar";
import { SlugParam } from "@/types/category";
import { SearchParams } from "@/types/common";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Suspense, use } from "react";

const getCategoryFromSlugCached = async (slug: string) => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getCategoryFromSlug(slug);
};
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryFromSlugCached(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name}`,
    description: `Shop the latest ${category.name} collection. Find top styles, great prices, and exclusive deals.`,
    openGraph: {
      title: category.name,
      description: `Browse ${category.name} products`,
      images: category.image ? [category.image] : [],
    },
  };
}

function CategoryGridWrapper({
  params,
  searchParams,
}: SlugParam & SearchParams) {
  const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);
  const suspenseKey = JSON.stringify({
    ...resolvedParams,
    ...resolvedSearchParams,
  });

  return (
    <Suspense key={suspenseKey} fallback={<ProductGridSkeleton />}>
      <CategoryProductsGrid params={params} searchParams={searchParams} />
    </Suspense>
  );
}

function FilterSidebarWrapper({ params }: SlugParam) {
  const resolvedParams = use(params);
  const suspenseKey = JSON.stringify(resolvedParams);

  return (
    <Suspense key={suspenseKey} fallback={<Spinner />}>
      <FilterCateogriesidebar params={params} />
    </Suspense>
  );
}

export default function CategoryPage({
  params,
  searchParams,
}: SlugParam & SearchParams) {
  return (
    <div className="min-h-screen relative flex bg-muted-30 max-sm:py-6 flex-col lg:flex-row w-full">
      <div className="flex max-sm:justify-end">
        <Suspense fallback={<span>Loading...</span>}>
          <FilterSidebarWrapper params={params} />
        </Suspense>
      </div>
      <div className="min-h-[200vh] flex-1 p-4 sm:p-6 lg:p-8">
        <Suspense fallback={<ProductGridSkeleton />}>
          <CategoryGridWrapper params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
