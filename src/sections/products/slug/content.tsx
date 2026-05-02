// @/sections/products/slug/content.tsx
"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { SelectProduct } from "@/db/schemas";
import { ProductThumbnail } from "./product-thumbnail";

interface ProductContentProps {
  product: SelectProduct;
}

export const ProductContent = ({ product }: ProductContentProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [selectedColor, setSelectedColor] = useState<string | null>(
  //   product.colors?.[0] ?? null,
  // );
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // const isOutOfStock = product.stockQuantity <= 0;
  // const isLowStock = product.stockQuantity > 0 && product.stockQuantity <= 5;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Image */}
        <div className="w-full lg:sticky lg:top-24">
          <ProductThumbnail images={product.images} />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <div className="space-y-3">
            {product.brand && (
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {product.brand}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                {/* {formatPrice(product.price)} */}
              </span>

              {/* {isOutOfStock ? (
                <Badge variant="destructive">Out of Stock</Badge>
              ) : isLowStock ? (
                <Badge variant="secondary">
                  Only {product.stockQuantity} left
                </Badge>
              ) : (
                <Badge className="bg-green-600 text-white dark:bg-green-500">
                  In Stock
                </Badge>
              )} */}
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {product.description}
            </p>
          )}

          <Separator />

          {/* Colors */}
          {/* {product.colors?.length > 0 && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Color</span>
                <span className="text-muted-foreground">
                  {selectedColor || "Select a color"}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    variant={selectedColor === color ? "default" : "outline"}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          )} */}

          {/* Sizes */}
          {/* {product.availableSizes?.length > 0 && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Size</span>
                <span className="text-muted-foreground">
                  {selectedSize ? `EU ${selectedSize}` : "Select a size"}
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.availableSizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    variant={selectedSize === size ? "default" : "outline"}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )} */}

          {/* Quantity */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>

              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:bg-accent disabled:opacity-40 rounded-l-lg"
                >
                  −
                </button>

                <span className="w-14 h-11 flex items-center justify-center text-sm font-semibold border-x tabular-nums">
                  {quantity}
                </span>

                {/* <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stockQuantity, q + 1))
                  }
                  disabled={quantity >= product.stockQuantity || isOutOfStock}
                  className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:bg-accent disabled:opacity-40 rounded-r-lg"
                >
                  +
                </button> */}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              {/* <Button size="xl" disabled={isOutOfStock}>
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}{" "}
                <ShoppingBag className="size-5 ml-1.5" />
              </Button>

              <Button size="xl" variant="outline" disabled={isOutOfStock}>
                Add to Wishlist <Heart className="size-5 ml-1.5" />
              </Button> */}
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: "🚚", label: "Fast Delivery" },
              { icon: "↩️", label: "Easy Returns" },
              { icon: "🔒", label: "Secure Payment" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 rounded-xl bg-muted py-3 px-2 text-center"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Meta */}
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

            <div className="flex justify-between">
              <span className="text-muted-foreground">Availability</span>
              {/* <span className="font-medium">
                {isOutOfStock
                  ? "Unavailable"
                  : `${product.stockQuantity} in stock`}
              </span> */}
            </div>
            {/* 
            {product.colors?.length > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Colors</span>
                <span className="font-medium">{product.colors.join(", ")}</span>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
