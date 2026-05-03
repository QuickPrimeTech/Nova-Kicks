"use client";

import { Badge } from "@/components/ui/badge";
import { ProductWithOptionalOffer } from "@/types/product";
import { formatPrice } from "@/helpers/formatters";
import { getProductPricing } from "@/helpers/product";

interface Props {
  product: ProductWithOptionalOffer;
  selectedSize?: { stock: number } | null;
}

export const ProductPrice = ({ product, selectedSize }: Props) => {
  const {
    hasOffer,
    discountedPrice,
    originalPrice,
    savings,
    discountPercentage,
  } = getProductPricing(product);

  const isOutOfStock = selectedSize ? selectedSize.stock < 1 : false;
  const isLowStock = selectedSize ? selectedSize.stock < 5 : false;

  return (
    <div className="flex flex-col pt-1 gap-4">
      <div className="flex flex-wrap items-baseline gap-3">
        {hasOffer ? (
          <>
            <span className="text-2xl md:text-3xl font-bold text-destructive">
              Ksh {formatPrice(discountedPrice)}
            </span>

            <span className="text-lg text-muted-foreground line-through">
              Ksh {formatPrice(originalPrice)}
            </span>

            <Badge variant="outline" className="text-destructive">
              Save Ksh {formatPrice(savings)}
            </Badge>
          </>
        ) : (
          <span className="text-2xl md:text-3xl font-bold">
            Ksh {formatPrice(originalPrice)}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isOutOfStock ? (
          <Badge variant="destructive">Out of Stock</Badge>
        ) : isLowStock ? (
          <Badge variant="secondary">Low Stock</Badge>
        ) : (
          <Badge variant="success">In Stock</Badge>
        )}
      </div>
    </div>
  );
};
