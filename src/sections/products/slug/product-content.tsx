"use client";

import { Separator } from "@/components/ui/separator";
import { ProductWithOptionalOffer } from "@/types/product";

interface Props {
  product: ProductWithOptionalOffer;
}

export const ProductContent = ({ product }: Props) => {
  return (
    <>
      {/* DESCRIPTION */}
      {product.description && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Description
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {product.description}
          </p>
        </div>
      )}

      <Separator />

      {/* OPTIONAL EXTENSIONS (future-proof) */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Details
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
    </>
  );
};
