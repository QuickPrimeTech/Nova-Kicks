// @/components/products/product-grid-skeleton.tsx

import { ProductCardSkeleton } from "./product-card-skeleton";

export const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <ProductCardSkeleton key={i} showThumbnails={true} />
      ))}
    </div>
  );
};
