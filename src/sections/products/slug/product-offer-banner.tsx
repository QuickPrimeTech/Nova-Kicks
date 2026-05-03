import { ProductWithOptionalOffer } from "@/types/product";
import { Tag } from "lucide-react";

interface Props {
  product: ProductWithOptionalOffer;
  hasOffer: boolean;
  discountPercentage: number;
}

export const ProductOfferBanner = ({
  product,
  hasOffer,
  discountPercentage,
}: Props) => {
  if (!hasOffer) return null;

  return (
    <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4 space-y-2">
      <div className="flex items-center gap-2 text-destructive font-semibold">
        <Tag className="w-4 h-4" />
        <span>Special Offer</span>
      </div>

      <p className="text-sm text-muted-foreground">
        {product.offer?.description ||
          `Get ${discountPercentage}% off this item`}
      </p>

      {product.offer?.endDate && (
        <p className="text-xs text-destructive font-medium">
          Ends {new Date(product.offer.endDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};
