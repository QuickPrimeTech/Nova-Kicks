// @/helpers/product.ts
import { ProductWithOptionalOffer } from "@/types/product";
import { SelectOffer, SelectProduct } from "@/db/schema";
import { WishlistItem } from "@/store/wishlist";

type calculateDiscountProps = {
  originalPrice: SelectProduct["price"];
  discountType?: SelectOffer["discountType"];
  discountValue?: SelectOffer["discountValue"];
};

export function calculateDiscountPrice({
  originalPrice,
  discountType,
  discountValue,
}: calculateDiscountProps): {
  discountedPrice: number;
  discountPercentage: number;
} {
  let discountedPrice = originalPrice;
  let discountPercentage = 0;

  if (discountType && discountValue) {
    if (discountType === "percentage") {
      discountPercentage = discountValue;
      discountedPrice = originalPrice - (originalPrice * discountValue) / 100;
    }

    if (discountType === "fixed_amount") {
      discountedPrice = originalPrice - discountValue;
      discountPercentage = Math.round((discountValue / originalPrice) * 100);
    }
  }
  return { discountedPrice: Math.max(0, discountedPrice), discountPercentage };
}

export function createWishlistItem(
  product: Omit<ProductWithOptionalOffer, "category" | "discountedPrice">,
): WishlistItem {
  let discountedPrice = product.offer
    ? calculateDiscountPrice({
        originalPrice: product.price,
        discountType: product.offer.discountType,
        discountValue: product.offer.discountValue,
      }).discountedPrice
    : null;

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0]?.url ?? "",
    availableSizes: product.sizes,
    slug: product.slug,
    discountedPrice,
  };
}
