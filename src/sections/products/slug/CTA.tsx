// @/sections/products/slug/CTA.tsx
"use client";
import { Button } from "@/components/ui/button";
import { calculateDiscountPrice } from "@/helpers/product";
import { buildWhatsAppMessage, formatWhatsappNumber } from "@/helpers/whatsapp";
import { siteConfig } from "@/site-config";
import { useCartStore } from "@/store/cart";
import { useCartUIStore } from "@/store/cart-ui";
import { ProductSize, ProductWithOptionalOffer } from "@/types/product";
import { ArrowRight, ArrowUpRight, ShoppingBag } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { toast } from "sonner";

type CTAProps = {
  selectedSize: ProductSize | null;
  product: ProductWithOptionalOffer;
  quantity: number;
};

export const CTA = ({ selectedSize, product, quantity }: CTAProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartUIStore((state) => state.setOpen);

  const isOutOfStock = selectedSize ? selectedSize.stock < 1 : false;
  let discountedPrice = null;

  if (product.offer) {
    if (product.offer) {
      discountedPrice = calculateDiscountPrice({
        originalPrice: product.price,
        discountType: product.offer?.discountType,
        discountValue: product.offer?.discountValue,
      }).discountedPrice;
    }
  }

  const validate = () => {
    if (!selectedSize) {
      toast.error("Please select a size", {
        description: `Select a size for ${product.name}`,
      });

      return false;
    }

    return true;
  };

  const addToCart = (type: "Buy" | "cart") => {
    if (!validate()) return;

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || "",
      size: selectedSize!,
      quantity,
      availableSizes: product.sizes,
      slug: product.slug,
      discountedPrice,
    });

    if (type === "Buy") {
      openCart(true);
    }

    toast.success("Added to cart");
  };

  const sendToWhatsapp = () => {
    if (!validate()) return;
    const message = buildWhatsAppMessage(product, selectedSize, quantity);
    const url = `https://wa.me/${formatWhatsappNumber(siteConfig.phone)}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="@container/cta flex flex-col gap-3 mt-5">
      <Button
        size="xl"
        disabled={isOutOfStock}
        onClick={() => addToCart("Buy")}
      >
        {isOutOfStock ? "Out of Stock" : "Buy Now"}
        <ArrowRight className="size-5 ml-1.5" />
      </Button>

      <Button
        size="xl"
        variant="secondary"
        disabled={isOutOfStock}
        onClick={() => addToCart("cart")}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        <ShoppingBag className="size-5 ml-1.5" />
      </Button>

      <div className="flex flex-col @[400px]/cta:flex-row items-center justify-center gap-1 sm:gap-2 text-sm pt-2">
        <span className="text-muted-foreground">
          Prefer to order on WhatsApp?
        </span>
        <Button
          variant="link"
          className="text-emerald-500 cursor-pointer"
          size="sm"
          onClick={() => sendToWhatsapp()}
        >
          <BsWhatsapp />
          Order on WhatsApp
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};
