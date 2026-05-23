// @/app/products/page.tsx
import { Metadata } from "next";
import { Suspense, use } from "react";
import { ProductGrid } from "@/sections/products/product-grid";
import { FilterProductsSidebar } from "@/sections/products/filter-products-sidebar";
import { ProductGridSkeleton } from "@/components/product/product-grid-skeleton";
import { SearchParams } from "@/types/common";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Products",
    description:
      "Browse our curated collection of premium sneakers, running shoes, basketball kicks, and lifestyle footwear.",
    openGraph: {
      title: "Shop All Products",
      description: "Discover premium footwear for every stride.",
      type: "website",
    },
    alternates: {
      canonical: "/products",
    },
  };
}

function ProductGridWrapper({ searchParams }: SearchParams) {
  const resolvedParams = use(searchParams);
  const suspenseKey = JSON.stringify(resolvedParams);

  return (
    <Suspense key={suspenseKey} fallback={<ProductGridSkeleton />}>
      <ProductGrid searchParams={searchParams} />
    </Suspense>
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  return (
    <div className="relative flex bg-muted-30 max-lg:py-6 flex-col gap-6 lg:flex-row w-full">
      <div className="flex max-lg:justify-between max-lg:px-4">
        <FilterProductsSidebar />
      </div>
      <div className="@container min-h-[200vh] flex-1 p-4 sm:p-6 lg:p-8">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGridWrapper searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
