// @/components/cart/edit-cart-item-dialog.tsx
"use client";

import { useState } from "react";
import { CartItem, useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Edit, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/helpers/formatters";
import { toast } from "sonner";
import Link from "next/link";

type ProductSize = CartItem["size"];

type EditCartItemDialogProps = {
  cartItem: CartItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  availableSizes?: ProductSize[];
};

export const EditCartItemDialog = ({
  cartItem,
  open,
  onOpenChange,
  availableSizes = [],
}: EditCartItemDialogProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState<ProductSize>(cartItem.size);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const sizeChanged = selectedSize.size !== cartItem.size.size;
  const isAtStockLimit = quantity >= selectedSize.stock;

  const handleSave = () => {
    if (sizeChanged) {
      // Remove old entry and add a new one with the new size
      removeItem(cartItem.id);
      addItem({
        productId: cartItem.productId,
        name: cartItem.name,
        price: cartItem.price,
        image: cartItem.image,
        size: selectedSize,
        quantity,
        availableSizes: cartItem.availableSizes,
        slug: cartItem.slug,
      });
    } else {
      updateQuantity(cartItem.id, quantity);
    }
    toast.success("Cart updated");
    onOpenChange(false);
  };

  const sizes = availableSizes.length > 0 ? availableSizes : [cartItem.size];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 max-w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-base font-bold leading-snug line-clamp-2 pr-6">
            {cartItem.name}
          </DialogTitle>
        </DialogHeader>

        {/* Size picker */}
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Size{" "}
            <span className="text-muted-foreground font-normal">
              (EU {selectedSize.size})
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => {
              const outOfStock = s.stock < 1;
              const isSelected = selectedSize.size === s.size;
              return (
                <Button
                  key={s.size}
                  size="sm"
                  variant={isSelected ? "default" : "outline"}
                  disabled={outOfStock}
                  className={cn(
                    "relative w-16 overflow-hidden",
                    outOfStock && "opacity-40",
                  )}
                  onClick={() => {
                    setSelectedSize(s);
                    // Clamp quantity to new size's stock
                    if (quantity > s.stock) setQuantity(s.stock);
                  }}
                >
                  {outOfStock && (
                    <span className="absolute inset-0 flex items-center">
                      <span className="absolute h-px w-full -rotate-12 bg-current opacity-50" />
                    </span>
                  )}
                  {s.size}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Quantity stepper */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Quantity</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-xl border overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-none"
                disabled={quantity <= 1}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="size-3.5" />
              </Button>
              <span className="w-10 flex items-center justify-center text-sm font-semibold tabular-nums border-x h-9">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-none"
                disabled={isAtStockLimit}
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                title={isAtStockLimit ? "Stock limit reached" : undefined}
              >
                <Plus className="size-3.5" />
              </Button>
            </div>
            <span className="text-sm font-semibold">
              Ksh {formatPrice(cartItem.price * quantity)}
            </span>
          </div>
          {isAtStockLimit && (
            <p className="text-xs text-muted-foreground">
              Only {selectedSize.stock} in stock
            </p>
          )}
        </div>

        <Button variant={"link"} className="w-fit" asChild>
          <Link href={`/products/${cartItem.slug}`}>
            <Edit />
            Details
          </Link>
        </Button>
        <DialogFooter className="gap-2 sm:gap-2">
          <DialogClose asChild>
            <Button variant="outline" className="md:flex-1">
              Cancel
            </Button>
          </DialogClose>
          <Button className="md:flex-1" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
