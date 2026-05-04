// @/app/products/page.tsx
import { Metadata } from "next";
import { getProducts } from "@/db/functions/product";
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { cacheLife } from "next/cache";

const getProductsCached = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getProducts();
};
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

export default async function ProductsPage() {
  const products = await getProductsCached();

  return (
    <div className="min-h-screen relative flex bg-muted-30 max-sm:py-6 flex-col lg:flex-row w-full">
      <div className="flex max-sm:justify-end">
        <Suspense fallback={<Spinner />}>
          <FilterSidebar products={products} />
        </Suspense>
      </div>
      <div className="min-h-[200vh] flex-1 p-4 sm:p-6 lg:p-8">Content</div>
    </div>
  );
}
