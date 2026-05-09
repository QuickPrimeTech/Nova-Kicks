"use client";

// @/components/cart/cart-item.tsx

import { CartItem, useCartStore } from "@/store/cart";
import { Image } from "../ui/image";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
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

type CartItemProps = {
  cartItem: CartItem;
};
export const CartItemCard = ({ cartItem }: CartItemProps) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const [openEditCartItem, setOpenEditCartItem] = useState(false);

  return (
    <>
      <div
        key={cartItem.id}
        className="group flex gap-4 rounded-xl border bg-card p-3 relative"
      >
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setOpenEditCartItem(() => true)}
        />
        {/* Product Image */}
        <div
          className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg border bg-muted cursor-pointer"
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
          <div className="flex flex-wrap-reverse items-center justify-between">
            {/* Quantity Stepper */}
            <div className="z-1 flex items-center rounded-xl border">
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Decrease the quantity of ${cartItem.name} to ${cartItem.quantity - 1}`}
                title={`Decrease the quantity to ${cartItem.quantity - 1}`}
                className="h-8 w-8 rounded-r-none hover:bg-accent"
                onClick={() =>
                  updateQuantity(cartItem.id, cartItem.quantity - 1)
                }
                disabled={cartItem.quantity <= 1}
              >
                <Minus className="size-3" />
              </Button>
              <span className="flex border-x h-8 w-10 items-center justify-center text-xs font-semibold tabular-nums">
                {cartItem.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-l-none hover:bg-accent"
                aria-label={`Increase the quantity of ${cartItem.name} to ${cartItem.quantity + 1}`}
                onClick={() =>
                  updateQuantity(cartItem.id, cartItem.quantity + 1)
                }
                title={
                  cartItem.quantity >= cartItem.size.stock
                    ? "You've reached the stock limit"
                    : `Increase quantity to ${cartItem.quantity + 1}`
                }
                disabled={cartItem.quantity >= cartItem.size.stock}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            {/* Price */}
            <p className="text-sm font-semibold">
              Ksh {formatPrice(cartItem.price * cartItem.quantity)}
            </p>
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
