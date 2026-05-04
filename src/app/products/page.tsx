// @/app/products/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import { ProductGrid } from "@/sections/products/product-grid";
import { FilterProductsSidebar } from "@/sections/products/filter-products-sidebar";
import { ProductCardSkeleton } from "@/components/product-card-skeleton";

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

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <ProductCardSkeleton key={i} showThumbnails={true} />
      ))}
    </div>
  );
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = await searchParams;
  const suspenseKey = new URLSearchParams(params as any).toString();
  return (
    <div className="min-h-screen relative flex bg-muted-30 max-sm:py-6 flex-col lg:flex-row w-full">
      <div className="flex max-sm:justify-end">
        <FilterProductsSidebar />
      </div>
      <div className="min-h-[200vh] flex-1 p-4 sm:p-6 lg:p-8">
        <Suspense key={suspenseKey} fallback={<ProductGridSkeleton />}>
          <ProductGrid searchParams={params} />
        </Suspense>
      </div>
    </div>
  );
}
