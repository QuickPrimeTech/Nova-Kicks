// @/app/products/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductGrid } from "@/sections/products/product-grid";
import { FilterProductsSidebar } from "@/sections/products/filter-products-sidebar";

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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  return (
    <div className="min-h-screen relative flex bg-muted-30 max-sm:py-6 flex-col lg:flex-row w-full">
      <div className="flex max-sm:justify-end">
        <FilterProductsSidebar />
      </div>
      <div className="min-h-[200vh] flex-1 p-4 sm:p-6 lg:p-8">
        <Suspense fallback={<Skeleton className="w-full h-20" />}>
          <ProductGrid searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
