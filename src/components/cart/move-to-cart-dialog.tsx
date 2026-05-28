// @/components/cart/move-to-cart-dialog.tsx
"use client";
import { useState } from "react";
import { WishlistItem } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { SizeSelector } from "@/sections/products/slug/size-selector";
import { QuantitySelector } from "@/sections/products/slug/quantity-selector";
import { toast } from "sonner";
import { ProductSize } from "@/types/product";

type MoveToCartDialogProps = {
  item: WishlistItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void; // removes from wishlist after cart add
};

export const MoveToCartDialog = ({
  item,
  open,
  onOpenChange,
  onSuccess,
}: MoveToCartDialogProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(
    item.availableSizes[0] ?? null,
  );
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    addItem({
      productId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: selectedSize,
      quantity,
      availableSizes: item.availableSizes,
      slug: item.slug,
      discountedPrice: item.discountedPrice,
    });

    onSuccess();
    onOpenChange(false);
    toast.success("Added to cart");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 max-w-[90vw] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold leading-snug pr-6">
            {item.name}
          </DialogTitle>
        </DialogHeader>

        {/* Size picker */}
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Size{" "}
            <span className="text-muted-foreground">
              {selectedSize ? `(EU ${selectedSize.size})` : "(Select a size)"}
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {item.availableSizes.map((size) => (
              <SizeSelector
                key={size.size}
                size={size}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Quantity</p>
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
          />
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAdd} disabled={!selectedSize}>
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
