// @/helpers/product.ts

import { ProductSize, ProductWithOptionalOffer } from "@/types/product";
import { formatPrice } from "./formatters";
import { SelectOffer, SelectProduct } from "@/db/schema";

export function buildWhatsAppMessage(
  product: ProductWithOptionalOffer,
  selectedSize: ProductSize | null,
  quantity: number,
): string {
  const hasOffer = !!product.offer;
  const price = hasOffer
    ? (product.discountedPrice ?? product.price)
    : product.price;

  const lines = [
    `Hi! I'm interested in ordering:`,
    ``,
    `*Product:* ${product.name}`,
    product.brand ? `*Brand:* ${product.brand}` : null,
    selectedSize ? `*Size:* ${selectedSize.size}` : `*Size:* _(not selected)_`,
    `*Quantity:* ${quantity}`,
    `*Price:* Ksh ${formatPrice(price)}`,
    hasOffer && product.offer
      ? `*Offer:* ${product.offer.discountType === "percentage" ? `${product.offer.discountValue}% off` : `Ksh ${formatPrice(product.offer.discountValue)} off`}`
      : null,
    ``,
    `Link: ${typeof window !== "undefined" ? window.location.href : `https://yourdomain.com/products/${product.slug}`}`,
  ];

  return lines.filter(Boolean).join("\n");
}

type calculateDiscountProps = {
  originalPrice: SelectProduct["price"];
  discountType: SelectOffer["discountType"];
  discountValue: SelectOffer["discountValue"];
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

  if (discountType === "percentage") {
    discountPercentage = discountValue;
    discountedPrice = originalPrice - (originalPrice * discountValue) / 100;
  }

  if (discountType === "fixed_amount") {
    discountedPrice = originalPrice - discountValue;
    discountPercentage = Math.round((discountValue / originalPrice) * 100);
  }

  return { discountedPrice: Math.max(0, discountedPrice), discountPercentage };
}
