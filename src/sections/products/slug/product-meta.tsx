// @/sections/products/slug/product-meta.tsx

import { ProductSize, ProductWithOptionalOffer } from "@/types/product";

type ProductMetaProps = {
  product: ProductWithOptionalOffer;
  selectedSize: ProductSize | null;
};

export const ProductMeta = ({ product, selectedSize }: ProductMetaProps) => {
  const hasOffer = !!product.offer;
  let discountPercentage = 0;

  if (product.offer) {
    const { discountType, discountValue } = product.offer;

    if (discountType === "percentage") {
      discountPercentage = discountValue;
    }

    if (discountType === "fixed_amount") {
      discountPercentage = Math.round((discountValue / product.price) * 100);
    }
  }

  return (
    <div className="rounded-2xl bg-muted p-5 space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">SKU</span>
        <span className="font-mono font-medium">
          {product.slug.toUpperCase()}
        </span>
      </div>

      {product.brand && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Brand</span>
          <span className="font-medium">{product.brand}</span>
        </div>
      )}

      {selectedSize && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Availability</span>
          <span className="font-medium">{selectedSize.stock} in stock</span>
        </div>
      )}

      {hasOffer && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Discount</span>
          <span className="font-medium text-destructive">
            {discountPercentage}% off
          </span>
        </div>
      )}
    </div>
  );
};
