// @/helpers/product.ts

import { ProductWithOptionalOffer } from "@/types/product";

export function getProductPricing(product: ProductWithOptionalOffer) {
  const originalPrice = product.price;

  if (!product.offer) {
    return {
      hasOffer: false,
      originalPrice,
      discountedPrice: originalPrice,
      discountPercentage: 0,
      savings: 0,
    };
  }

  const { discountType, discountValue } = product.offer;

  let discountedPrice = originalPrice;
  let discountPercentage = 0;

  if (discountType === "percentage") {
    discountPercentage = discountValue;
    discountedPrice = originalPrice - (originalPrice * discountValue) / 100;
  }

  if (discountType === "fixed_amount") {
    discountedPrice = originalPrice - discountValue;
    discountPercentage = Math.round((discountValue / originalPrice) * 100);
  }

  discountedPrice = Math.max(0, discountedPrice);

  return {
    hasOffer: true,
    originalPrice,
    discountedPrice,
    discountPercentage,
    savings: originalPrice - discountedPrice,
  };
}
