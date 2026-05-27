// @/components/product/product-card.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Clock, Eye, Heart, Plus } from "lucide-react";
import { Image } from "../ui/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { SelectProduct, SelectOffer } from "@/db/schemas";
import { cn } from "@/lib/utils";
import { useWishlistStore, WishlistItem } from "@/store/wishlist";
import { Badge } from "../ui/badge";
import { QuickView } from "./quick-view";
import { ProductWithOptionalOffer } from "@/types/product";
import { MoreActions } from "./more-actions";
import { useRelativeTime } from "@/lib/formatters";

type ProductCardProps = {
  product: Omit<SelectProduct, "categoryId">;
  offer?: SelectOffer;
  variant?: "default" | "minimal";
  showThumbnails?: boolean;
  showStock?: boolean;
  showCreated?: boolean;
};

export const ProductCard = ({
  product,
  offer,
  variant = "default",
  showThumbnails = false,
  showStock = false,
  showCreated = false,
}: ProductCardProps) => {
  const images = Array.isArray(product.images) ? product.images : [];
  const [productImage, setProductImage] = useState(images[0]);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));

  const hasOffer = !!offer;
  const price = product.price;

  const totalStock =
    product.sizes?.reduce((sum, s) => sum + (s.stock ?? 0), 0) ?? 0;

  const finalPrice = Math.ceil(
    offer
      ? offer.discountType === "percentage"
        ? price - (price * offer.discountValue) / 100
        : price - offer.discountValue
      : price,
  );

  const discountLabel =
    offer?.discountType === "percentage"
      ? `${offer.discountValue}% OFF`
      : `Ksh ${offer?.discountValue} OFF`;

  const wishlistProduct: WishlistItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: images[0]?.url ?? "",
    size: product.sizes?.[0]?.size ?? "",
    availableSizes: product.sizes,
    slug: product.slug,
    discountedPrice: hasOffer ? finalPrice : null,
  };

  const addToWishlist = () => {
    toggleItem(wishlistProduct);
  };

  const href = `/products/${product.slug}`;

  const wishlistLabel = isInWishlist
    ? "Remove from wishlist"
    : "Add to wishlist";

  const productForQuickView = {
    ...product,
    offer: offer || null,
  } as ProductWithOptionalOffer;

  const createdAgo = useRelativeTime(product.createdAt);

  return (
    <>
      <div
        className={cn(
          "group relative border bg-card rounded-md overflow-hidden h-full",
        )}
      >
        {/* Wishlist */}
        <Button
          size="icon"
          variant="secondary"
          className={cn(
            "absolute top-3 right-3 z-20 h-9 w-9 rounded-full",
            isInWishlist && "text-red-500 bg-red-50",
            variant === "minimal" &&
              "opacity-0 group-hover:opacity-100 transition",
          )}
          onClick={() => addToWishlist()}
          aria-label={wishlistLabel}
          title={wishlistLabel}
        >
          <Heart className={isInWishlist ? "fill-red-500" : ""} />
        </Button>

        {/* DISCOUNT BADGE */}
        {hasOffer && (
          <div className="absolute top-3 left-3 z-20">
            <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded-md">
              {discountLabel}
            </span>
          </div>
        )}

        {/* MAIN IMAGE */}
        <div className="relative overflow-hidden">
          {/* DESKTOP: Hover-reveal Quick View */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex absolute z-20 -bottom-8 group-hover:bottom-2 transition-all duration-300 left-1/2 -translate-x-1/2 cursor-pointer shadow-lg"
            onClick={() => setQuickViewOpen(true)}
          >
            Quick View
            <Eye className="ml-1" />
          </Button>
          <Link href={href} className="block">
            <div className="relative aspect-square bg-[#F5F6F7]">
              <Image
                src={productImage?.url}
                alt={productImage?.altText ?? product.name}
                fill
                sizes="330px"
                className="object-cover group-hover:scale-110 transition"
              />
              <Button
                size="icon-sm"
                className="absolute z-10 bottom-2 right-2 cursor-pointer"
              >
                <Plus />
              </Button>
            </div>
          </Link>
        </div>

        {/* THUMBNAILS (OPTIONAL) */}
        {showThumbnails && images.length > 1 && (
          <Carousel className="px-2 mt-1">
            <CarouselContent
              className={cn("gap-1", images.length < 6 && "justify-center")}
            >
              {images.map((img) => (
                <CarouselItem
                  key={`${img.url}-${img.altText}`}
                  className={cn(
                    "basis-1/6 aspect-square opacity-50 pl-0 border rounded-md overflow-hidden bg-[#F5F6F7]",
                    productImage?.url === img.url && "opacity-100",
                  )}
                  onClick={() => setProductImage(img)}
                >
                  <Image
                    src={img.url}
                    alt={img.altText ?? ""}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}

        {/* INFO */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <Link href={href}>
              <p className="text-xs text-muted-foreground">{product.brand}</p>
            </Link>
            {showCreated && (
              <Badge
                variant="secondary"
                className="text-xs font-normal px-1.5 py-0 h-5 gap-1"
              >
                {createdAgo}
              </Badge>
            )}
          </div>
          <Link href={href}>
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
          </Link>

          <div className="flex justify-between gap-4">
            {/* PRICE LOGIC */}
            <Link href={href} className="mt-2 flex flex-1 items-center gap-2">
              {hasOffer && (
                <span className="text-sm text-muted-foreground line-through">
                  Ksh {price.toLocaleString()}
                </span>
              )}

              <span className="font-bold">
                Ksh {(hasOffer ? finalPrice : price).toLocaleString()}
              </span>

              {showStock && (
                <Badge variant="destructive">
                  <Clock />
                  {totalStock} Left
                </Badge>
              )}
            </Link>

            <MoreActions
              slug={product.slug}
              name={product.name}
              setQuickViewOpen={setQuickViewOpen}
              addToWishlist={addToWishlist}
            />
          </div>
        </div>

        <QuickView
          product={productForQuickView}
          open={quickViewOpen}
          onOpenChange={setQuickViewOpen}
        />
      </div>
    </>
  );
};
