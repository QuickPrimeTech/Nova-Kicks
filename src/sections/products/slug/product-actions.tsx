"use client";
import { Button } from "@/components/ui/button";
import { Heart, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";
import { ProductWithOptionalOffer } from "@/types/product";

interface Props {
  product: ProductWithOptionalOffer;
  selectedSize: any;
  quantity: number;
  setQuantity: (q: number) => void;
  discountedPrice: number;
}

export const ProductActions = ({
  product,
  selectedSize,
  quantity,
  setQuantity,
  discountedPrice,
}: Props) => {
  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));

  const addToCart = () => {
    if (!selectedSize) {
      toast.error("Select a size");
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: discountedPrice,
      image: product.images[0]?.url || "",
      size: selectedSize,
      quantity,
    });

    toast.success("Added to cart");
  };

  return (
    <div className="flex flex-col gap-3 mt-5">
      {/* PRIMARY ACTION */}
      <Button size="xl" onClick={addToCart}>
        Add to Cart
        <ShoppingBag className="ml-2" />
      </Button>

      {/* SECONDARY */}
      <div className="flex gap-2">
        <Button
          size="xl"
          variant="outline"
          className="flex-1"
          onClick={() =>
            toggleWishlist({
              id: product.id,
              name: product.name,
              price: discountedPrice,
              image: product.images[0].url,
              size: product.sizes[0]?.size ?? "",
            })
          }
        >
          <Heart className={cn(isInWishlist && "fill-red-500")} />
        </Button>

        <Button
          size="xl"
          variant="outline"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};
