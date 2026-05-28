// @/db/functions/helpers

import { SelectOffer } from "@/db/schema";

export function stripCategoryId<T extends { categoryId?: string | null }>(
  product: T,
): Omit<T, "categoryId"> {
  const { categoryId: _, ...rest } = product;
  return rest;
}

export function getDiscountedPrice(price: number, offer?: SelectOffer | null) {
  if (!offer) return price;

  const discounted =
    offer.discountType === "percentage"
      ? price - (price * offer.discountValue) / 100
      : price - offer.discountValue;

  return Math.max(discounted, 0);
}
