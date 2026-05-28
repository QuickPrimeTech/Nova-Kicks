// @/helpers/whatsapp.ts
import { ProductSize, ProductWithOptionalOffer } from "@/types/product";
import { z } from "zod";
import { formatPrice } from "./formatters";
import { calculateDiscountPrice } from "./product";

const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .transform((val) => val.replace(/[\s+\-().]/g, ""))
  .refine((val) => /^\d+$/.test(val), "Phone number must contain only digits")
  .refine(
    (val) => val.length >= 10,
    "Phone number must have at least 10 digits",
  )
  .refine(
    (val) => val.length <= 15,
    "Phone number must have at most 15 digits",
  );

export function formatWhatsappNumber(phone: string | number): string {
  const raw = String(phone).trim();
  const digitsOnly = raw.replace(/[\s+\-().]/g, "");

  const parsed = phoneSchema.safeParse(digitsOnly);
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid phone number");
  }

  let normalized = parsed.data;

  if (normalized.startsWith("0")) {
    normalized = "254" + normalized.slice(1);
  }

  if (normalized.startsWith("7") || normalized.startsWith("1")) {
    normalized = "254" + normalized;
  }

  if (!/^254[71]\d{8}$/.test(normalized)) {
    throw new Error(
      "Invalid Kenyan phone number format. Expected: 07XX XXX XXX, 01XX XXX XXX, +254 7XX XXX XXX, or +254 1XX XXX XXX",
    );
  }

  return normalized;
}

export function buildWhatsAppMessage(
  product: ProductWithOptionalOffer,
  selectedSize: ProductSize | null,
  quantity: number,
): string {
  const hasOffer = !!product.offer;
  const price = calculateDiscountPrice({
    originalPrice: product.price,
    discountType: product.offer?.discountType,
    discountValue: product.offer?.discountValue,
  }).discountedPrice;

  const lines = [
    `Hi! I'm interested in ordering:`,
    ``,
    `*Product:* ${product.name}`,
    product.brand ? `*Brand:* ${product.brand}` : null,
    selectedSize ? `*Size:* ${selectedSize.size}` : `*Size:* _(not selected)_`,
    `*Quantity:* ${quantity}`,
    `*Price:* Ksh ${formatPrice(price * quantity)}`,
    hasOffer && product.offer
      ? `*Offer:* ${product.offer.discountType === "percentage" ? `${product.offer.discountValue}% off` : `Ksh ${formatPrice(product.offer.discountValue)} off`}`
      : null,
    ``,
    `Link: ${typeof window !== "undefined" ? window.location.href : `https://yourdomain.com/products/${product.slug}`}`,
  ];

  return lines.filter(Boolean).join("\n");
}
