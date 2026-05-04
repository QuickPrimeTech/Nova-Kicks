import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProductCardSkeletonProps = {
  showThumbnails?: boolean;
  showStock?: boolean;
};

export const ProductCardSkeleton = ({
  showThumbnails = true,
  showStock = false,
}: ProductCardSkeletonProps) => {
  return (
    <div className="relative border bg-card rounded-md overflow-hidden h-full">
      {/* Wishlist Button Skeleton */}
      <Skeleton className="absolute top-3 right-3 z-20 h-9 w-9 rounded-full" />

      {/* Main Image Skeleton */}
      <Skeleton className="w-full aspect-square rounded-none" />

      {/* Thumbnails Skeleton */}
      {showThumbnails && (
        <div className="flex gap-1 px-2 mt-1 justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="basis-1/6 aspect-square rounded-md" />
          ))}
        </div>
      )}

      {/* Info Section Skeleton */}
      <div className="p-4 flex flex-col gap-2">
        {/* Product Name */}
        <Skeleton className="h-5 w-3/4" />

        {/* Brand */}
        <Skeleton className="h-3 w-1/3" />

        {/* Price Logic Space */}
        <div className="mt-2">
          <Skeleton className="h-6 w-1/2" />
        </div>

        {/* CTA Area */}
        <div
          className={cn(
            "flex justify-end mt-2 items-center",
            showStock && "justify-between",
          )}
        >
          {/* Optional Stock Badge */}
          {showStock && <Skeleton className="h-5 w-24 rounded-full" />}

          {/* Add to Cart Button (Plus icon) */}
          <Skeleton className="h-9 w-9 rounded-md" />
        </div>
      </div>
    </div>
  );
};
