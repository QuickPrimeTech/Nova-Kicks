"use client";
// @/components/cart/cart-item.tsx
import { CartItem, useCartStore } from "@/store/cart";
import { Image } from "../ui/image";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { formatPrice } from "@/helpers/formatters";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useState } from "react";
import { EditCartItemDialog } from "./edit-cart-item-dialog";
import { QuantitySelector } from "@/sections/products/slug/quantity-selector";
import { cn } from "@/lib/utils";

type CartItemProps = {
  cartItem: CartItem;
};
export const CartItemCard = ({ cartItem }: CartItemProps) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const [openEditCartItem, setOpenEditCartItem] = useState(false);
  const finalPrice = Math.ceil(
    cartItem.offer
      ? cartItem.offer.discountType === "percentage"
        ? cartItem.price - (cartItem.price * cartItem.offer.discountValue) / 100
        : cartItem.price - cartItem.offer.discountValue
      : cartItem.price,
  );

  const discountLabel =
    cartItem.offer?.discountType === "percentage"
      ? `${cartItem.offer.discountValue}% OFF`
      : `Ksh ${cartItem.offer?.discountValue} OFF`;

  return (
    <>
      <div
        key={cartItem.id}
        className="group flex gap-4 rounded-xl border bg-card p-3 relative"
      >
        {cartItem.offer && (
          <div className="absolute -top-3 -left-2 z-20">
            <span className="text-[9px] font-bold bg-primary text-primary-foreground px-2 py-1 rounded-md">
              {discountLabel}
            </span>
          </div>
        )}

        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setOpenEditCartItem(() => true)}
        />
        {/* Product Image */}
        <div
          className="relative aspect-square w-24 shrink-0 overflow-hidden bg-[#F5F6F7] rounded-lg border cursor-pointer"
          onClick={() => setOpenEditCartItem(() => true)}
        >
          <Image
            src={cartItem.image}
            alt={`Image of ${cartItem.name}`}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="relative flex flex-1 flex-col justify-between py-0.5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-tight line-clamp-2">
                {cartItem.name}
              </h4>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                Size: {cartItem.size.size}
              </span>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="icon-sm"
                  className="z-1"
                  title={`Remove from cart`}
                >
                  <Trash2 className="size-3.5" />
                  <span className="sr-only">Remove {cartItem.name}</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will delete{" "}
                    <strong>{cartItem.name}</strong> from the cart.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    variant={"destructive"}
                    onClick={() => removeItem(cartItem.id)}
                  >
                    <Trash2 /> Delete Item
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setOpenEditCartItem(() => true)}
          />
          <div className="flex flex-wrap-reverse items-center gap-2 justify-between">
            {/* Quantity Stepper */}
            <QuantitySelector
              variant="sm"
              className="relative"
              quantity={cartItem.quantity}
              setQuantity={(q) => updateQuantity(cartItem.id, q)}
              selectedSize={cartItem.size}
            />
            <div className="flex items-center gap-1 5">
              <p
                className={cn(
                  "text-sm font-semibold",
                  cartItem.offer &&
                    "line-through text-muted-foreground text-xs",
                )}
              >
                Ksh {formatPrice(cartItem.price * cartItem.quantity)}
              </p>
              {cartItem.offer && (
                <p className="text-sm font-semibold">
                  Ksh {formatPrice(finalPrice * cartItem.quantity)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <EditCartItemDialog
        cartItem={cartItem}
        open={openEditCartItem}
        onOpenChange={setOpenEditCartItem}
        availableSizes={cartItem.availableSizes}
      />
    </>
  );
};
