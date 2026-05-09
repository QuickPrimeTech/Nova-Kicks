// @/components/products/product-grid-skeleton.tsx

import { ProductCardSkeleton } from "./product-card-skeleton";

export const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 @[900px]:grid-cols-3 @[1100px]:grid-cols-4 gap-6 mb-8">
      {Array.from({ length: 20 }).map((_, i) => (
        <ProductCardSkeleton key={i} showThumbnails={true} />
      ))}
    </div>
  );
};
