// @/sections/products/slug/content.tsx
"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/helpers/formatters";
import { ProductSize, ProductWithOptionalOffer } from "@/types/product";
import { AppBreadcrumb } from "@/layouts/app-breadcrumb";
import { SizeGuideDialog } from "@/sections/categories/slug/size-guide-dialog";
import { QuantitySelector } from "./quantity-selector";
import { SizeSelector } from "./size-selector";
import { OfferBanner } from "./offer-banner";
import { ProductMeta } from "./product-meta";
import { ShareProduct } from "@/components/product/share-product";
import { TrustBadges } from "./trust-badges";
import { CTA } from "./CTA";
import { ProductImage } from "./product-image";
import { calculateDiscountPrice } from "@/helpers/product";
import { cn } from "@/lib/utils";

type ProductContentProps = {
  product: ProductWithOptionalOffer;
  showBreadcrumb?: boolean;
};

export const ProductContent = ({
  product,
  showBreadcrumb,
}: ProductContentProps) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);

  const hasOffer = !!product.offer;

  const originalPrice = product.price;

  let discountedPrice = originalPrice;

  if (product.offer) {
    const { discountType, discountValue } = product.offer;
    discountedPrice = calculateDiscountPrice({
      originalPrice,
      discountType,
      discountValue,
    }).discountedPrice;
  }

  const savings = originalPrice - discountedPrice;

  const isOutOfStock = selectedSize ? selectedSize.stock < 1 : false;
  const isLowStock = selectedSize ? selectedSize.stock < 10 : false;

  return (
    <div className="section-small">
      <div className="container mx-auto space-y-4 py-6 md:py-12">
        {showBreadcrumb && <AppBreadcrumb />}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <ProductImage product={product} />

          {/* Right: Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-6">
                {product.brand && (
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {product.brand}
                  </span>
                )}
                <ShareProduct name={product.name} slug={product.slug} />
              </div>
              <h1 className="text-heading-2 font-bold tracking-tight leading-[1.1] text-foreground">
                {product.name}
              </h1>

              <div className="flex flex-col pt-1 gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "text-2xl md:text-3xl font-bold",
                      hasOffer && "text-primary",
                    )}
                  >
                    Ksh {formatPrice(discountedPrice)}
                  </span>
                  {hasOffer && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">
                        Ksh {formatPrice(product.price)}
                      </span>
                      <Badge variant="outline">
                        Save Ksh {formatPrice(savings)}
                      </Badge>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {isOutOfStock ? (
                    <Badge variant="destructive">Out of Stock</Badge>
                  ) : isLowStock ? (
                    <Badge variant="secondary">
                      Only {selectedSize?.stock} left
                    </Badge>
                  ) : (
                    <Badge variant="success">In Stock</Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Offer Banner */}
            {hasOffer && (
              <OfferBanner offer={product.offer} price={product.price} />
            )}

            {/* Description */}
            {product.description && (
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
            )}

            <Separator />

            <div className="space-y-6">
              {/* Sizes */}
              {product.sizes?.length > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <p className="font-medium">
                      Size{" "}
                      <span className="text-muted-foreground">
                        (
                        {selectedSize
                          ? `EU ${selectedSize.size}`
                          : "Select a size"}
                        )
                      </span>
                    </p>
                    <SizeGuideDialog />
                  </div>
                  <div className="flex w-full flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <SizeSelector
                        key={size.size}
                        size={size}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                      />
                    ))}
                  </div>
                </div>
              )}

              <QuantitySelector
                className="w-fit"
                quantity={quantity}
                setQuantity={setQuantity}
                selectedSize={selectedSize}
              />
            </div>

            <CTA
              selectedSize={selectedSize}
              product={product}
              quantity={quantity}
            />
            <TrustBadges />
            <ProductMeta product={product} selectedSize={selectedSize} />
          </div>
        </div>
      </div>
    </div>
  );
};
