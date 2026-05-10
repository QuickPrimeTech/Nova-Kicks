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
import { Edit } from "lucide-react";
import { formatPrice } from "@/helpers/formatters";
import { toast } from "sonner";
import Link from "next/link";
import { QuantitySelector } from "@/sections/products/slug/quantity-selector";
import { SizeSelector } from "@/sections/products/slug/size-selector";
import { cn } from "@/lib/utils";

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
        discountedPrice: cartItem.discountedPrice,
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
          {cartItem.discountedPrice && (
            <div>
              <span className="text-xs font-bold text-muted-foreground rounded-md">
                Saving Ksh{" "}
                {Math.ceil(
                  (cartItem.price - cartItem.discountedPrice) *
                    cartItem.quantity,
                ).toLocaleString()}
              </span>
            </div>
          )}
        </DialogHeader>

        {/* Size picker */}
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Size{" "}
            <span className="text-muted-foreground font-medium tracking-tight">
              (EU {selectedSize.size})
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <SizeSelector
                key={size.size}
                className="w-16"
                size={size}
                selectedSize={selectedSize}
                setSelectedSize={(value) => {
                  if (typeof value === "function") {
                    const next = value(selectedSize);

                    if (next) {
                      setSelectedSize(next);
                    }
                  } else if (value) {
                    setSelectedSize(value);
                  }
                }}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            ))}
          </div>
        </div>

        {/* Quantity stepper */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Quantity</p>
          <div className="flex items-center gap-4">
            <QuantitySelector
              variant="sm"
              quantity={quantity}
              setQuantity={setQuantity}
              selectedSize={selectedSize}
            />
            <div className="flex items-center gap-1 5">
              <span
                className={cn(
                  "text-sm font-semibold",
                  cartItem.discountedPrice &&
                    "line-through text-muted-foreground text-xs",
                )}
              >
                Ksh {formatPrice(cartItem.price * quantity)}
              </span>
              {cartItem.discountedPrice && (
                <span className="text-sm font-semibold">
                  Ksh {formatPrice(cartItem.discountedPrice * quantity)}
                </span>
              )}
            </div>
          </div>
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
