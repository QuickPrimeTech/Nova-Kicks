import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ProductCardSkeleton } from "@/components/product-card-skeleton"; // Adjust import path if needed

export const ProductDetailsSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* --- PRODUCT CONTENT SKELETON --- */}
      <div className="container mx-auto space-y-4 section-small py-6 md:py-12">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-4 w-48 rounded" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Images (Sticky matching client layout) */}
          <div className="w-full lg:sticky lg:top-24">
            <div className="relative space-y-2">
              {/* Main Image */}
              <Skeleton className="aspect-square w-full rounded-xl" />

              {/* Thumbnails Carousel */}
              <div className="flex justify-center gap-3 overflow-hidden pt-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="basis-1/5 md:basis-1/6 aspect-square rounded-md shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Header */}
            <div className="space-y-3">
              {/* Brand & Share row */}
              <div className="flex items-center justify-between gap-6">
                <Skeleton className="h-3 w-24 rounded" />
                <Skeleton className="size-8 rounded-md" />
              </div>

              {/* Product Title */}
              <div className="space-y-2">
                <Skeleton className="h-8 md:h-10 w-full rounded" />
                <Skeleton className="h-8 md:h-10 w-2/3 rounded" />
              </div>

              {/* Price & Stock Badge */}
              <div className="flex flex-col pt-1 gap-4">
                <Skeleton className="h-8 w-40 rounded" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-4/5 rounded" />
            </div>

            <Separator />

            {/* Selection Area (Sizes & Quantity) */}
            <div className="space-y-6">
              {/* Sizes */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-4 w-16 rounded" />
                </div>
                <div className="flex w-full flex-wrap gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 w-24 rounded-md" />
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded" />
                <Skeleton className="h-10 w-32 rounded-lg" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mt-5">
              <Skeleton className="h-12 w-full rounded-md" /> {/* Buy Now */}
              <Skeleton className="h-12 w-full rounded-md" />{" "}
              {/* Add to Cart */}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-16 rounded-xl" />
              ))}
            </div>

            {/* Product Meta Box */}
            <Skeleton className="h-36 w-full rounded-2xl" />
          </div>
        </div>
      </div>

      {/* --- SIMILAR PRODUCTS SKELETON --- */}
      <section className="mb-16">
        <div className="container mx-auto section-small mb-6 space-y-2">
          <Skeleton className="h-3 w-32 rounded" />
          <Skeleton className="h-7 w-64 md:w-80 rounded" />
        </div>

        {/* Carousel Grid fallback */}
        <div className="container mx-auto section overflow-hidden">
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="basis-7/10 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 shrink-0 grow-0"
              >
                <ProductCardSkeleton showThumbnails={false} showStock={false} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
