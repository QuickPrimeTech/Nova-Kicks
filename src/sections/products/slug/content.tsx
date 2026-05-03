"use client";

import { useState } from "react";
import { ProductThumbnail } from "./product-thumbnail";
import { Separator } from "@/components/ui/separator";
import { ProductWithOptionalOffer } from "@/types/product";
import { getProductPricing } from "@/helpers/product";

import { ProductHeader } from "./product-header";
import { ProductPrice } from "./product-price";
import { ProductOfferBanner } from "./product-offer-banner";
import { ProductActions } from "./product-actions";
import { ProductMeta } from "./product-meta";

interface Props {
  product: ProductWithOptionalOffer;
}

export const ProductContent = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const pricing = getProductPricing(product);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="lg:sticky lg:top-24">
          <ProductThumbnail images={product.images} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />

          <ProductPrice product={product} selectedSize={selectedSize} />

          <ProductOfferBanner
            product={product}
            hasOffer={pricing.hasOffer}
            discountPercentage={pricing.discountPercentage}
          />

          <Separator />

          {/* (sizes + quantity stay here or can be split later) */}
          <ProductContent product={product} />
          <ProductActions
            product={product}
            selectedSize={selectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
            discountedPrice={pricing.discountedPrice}
          />

          <ProductMeta
            product={product}
            selectedSize={selectedSize}
            hasOffer={pricing.hasOffer}
            discountPercentage={pricing.discountPercentage}
          />
        </div>
      </div>
    </div>
  );
};
