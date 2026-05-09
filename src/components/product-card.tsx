"use client";
import Link from "next/link";
import { useState } from "react";
import { Clock, Heart, Plus } from "lucide-react";
import { Image } from "./ui/image";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SelectProduct, SelectOffer } from "@/db/schemas";
import { cn } from "@/lib/utils";
import { useWishlistStore, WishlistItem } from "@/store/wishlist";
import { Badge } from "./ui/badge";

type ProductCardProps = {
  product: SelectProduct;
  offer?: SelectOffer;
  variant?: "default" | "minimal";
  showThumbnails?: boolean;
  stock?: number;
};

export const ProductCard = ({
  product,
  offer,
  variant = "default",
  stock,
  showThumbnails = false,
}: ProductCardProps) => {
  const images = Array.isArray(product.images) ? product.images : [];
  const [productImage, setProductImage] = useState(images[0]);

  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));

  const hasOffer = !!offer;

  const price = product.price;

  const finalPrice = offer
    ? offer.discountType === "percentage"
      ? price - (price * offer.discountValue) / 100
      : price - offer.discountValue
    : price;

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
  };

  const href = `/products/${product.slug}`;

  const wishlistLabel = isInWishlist
    ? "Remove from wishlist"
    : "Add to wishlist";

  return (
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
        onClick={() => toggleItem(wishlistProduct)}
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
      <Link href={href} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={productImage?.url}
            alt={productImage?.altText ?? product.name}
            fill
            className="object-cover group-hover:scale-110 transition"
          />
          <Button
            size="icon"
            className="absolute z-10 bottom-2 right-2 cursor-pointer"
          >
            <Plus />
          </Button>
        </div>
      </Link>

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
                  "basis-1/6 aspect-square opacity-50 pl-0 border rounded-md overflow-hidden",
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
      <Link href={href}>
        {/* INFO */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground">{product.brand}</p>
          <h3 className="font-medium line-clamp-1">{product.name}</h3>

          {/* PRICE LOGIC */}
          <div className="mt-2 flex items-center gap-2">
            {hasOffer ? (
              <>
                <span className="line-through text-muted-foreground text-sm">
                  Ksh {price.toLocaleString()}
                </span>
                <span className="font-bold">Ksh {price.toLocaleString()}</span>
                {stock && (
                  <Badge variant={"destructive"}>
                    <Clock />
                    {stock} Left in stock
                  </Badge>
                )}
              </>
            ) : (
              <>
                {stock && (
                  <Badge variant={"destructive"}>
                    <Clock />
                    {stock} Left in stock
                  </Badge>
                )}
                <span className="font-bold">Ksh {price.toLocaleString()}</span>
              </>
            )}
          </div>

          {/* CTA */}
        </div>
      </Link>
    </div>
  );
};
