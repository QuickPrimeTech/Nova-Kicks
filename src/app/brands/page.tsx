// @/app/brands/page.tsx

import { cacheLife } from "next/cache";
import { getBrands } from "@/db/functions/product";
import { BrandCard } from "@/components/brand-card";

const fetchBrandsCached = async () => {
  "use cache";
  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getBrands();
};

export default async function BrandsPage() {
  const brands = await fetchBrandsCached();

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
          Explore
        </p>
        <h1 className="font-display text-heading-2 md:text-heading-1 uppercase">
          Shop by Brand
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {brands.length} premium brands · free shipping on orders over KSH
          5,000
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {brands.map((brand) => (
          <BrandCard key={brand} brand={brand} />
        ))}
      </div>
    </div>
  );
}
