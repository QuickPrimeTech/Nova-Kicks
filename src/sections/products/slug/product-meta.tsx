import { ProductWithOptionalOffer } from "@/types/product";

interface Props {
  product: ProductWithOptionalOffer;
  selectedSize?: any;
  hasOffer: boolean;
  discountPercentage: number;
}

export const ProductMeta = ({
  product,
  selectedSize,
  hasOffer,
  discountPercentage,
}: Props) => {
  return (
    <div className="rounded-2xl bg-muted p-5 space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">SKU</span>
        <span>{product.slug.toUpperCase()}</span>
      </div>

      {product.brand && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Brand</span>
          <span>{product.brand}</span>
        </div>
      )}

      {selectedSize && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Stock</span>
          <span>{selectedSize.stock}</span>
        </div>
      )}

      {hasOffer && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Discount</span>
          <span className="text-destructive">{discountPercentage}%</span>
        </div>
      )}
    </div>
  );
};
