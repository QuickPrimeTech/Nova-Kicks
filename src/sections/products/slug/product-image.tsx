// @/sections/product/slug/product-image.tsx

"use client";

import { Badge } from "@/components/ui/badge";
import { Heart, Tag, Timer } from "lucide-react";
import { ProductThumbnail } from "./product-thumbnail";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWishlistStore, WishlistItem } from "@/store/wishlist";
import { ProductWithOptionalOffer } from "@/types/product";
import { calculateDiscountPrice } from "@/helpers/product";

type ProductImageProps = {
  product: ProductWithOptionalOffer;
};

export const ProductImage = ({ product }: ProductImageProps) => {
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id),
  );
  let discountPercentage = 0;

  const hasOffer = !!product.offer;
  let discountedPrice = null;

  if (product.offer) {
    discountedPrice = calculateDiscountPrice({
      originalPrice: product.price,
      discountType: product.offer?.discountType,
      discountValue: product.offer?.discountValue,
    }).discountedPrice;
  }

  const wishlistProduct: WishlistItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0].url,
    size: product.sizes[0]?.size ?? "",
    availableSizes: product.sizes,
    slug: product.slug,
    discountedPrice,
  };

  return (
    <div className="w-full lg:sticky lg:top-20">
      <div className="relative">
        {hasOffer && (
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <Badge>
              <Tag className="size-3.5 mr-1" />
              {discountPercentage}% OFF
            </Badge>
            {product.offer?.endDate && (
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                <Timer className="w-3 h-3 mr-1" />
                Limited time
              </Badge>
            )}
          </div>
        )}
        <div className="relative">
          <ProductThumbnail images={product.images} />
          <Button
            size="icon-lg"
            variant="outline"
            className="group absolute top-2 right-4"
            onClick={() => toggleWishlist(wishlistProduct)}
            aria-label={`${isInWishlist ? "Remove from" : "Add to"} wishlist`}
            title={`${isInWishlist ? "Remove from" : "Add to"} wishlist`}
          >
            <Heart
              className={cn(
                "size-5",
                isInWishlist && "fill-destructive text-destructive",
              )}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
