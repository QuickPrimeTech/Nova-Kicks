// @/sections/checkout/cart-items.tsx
"use client";
import { useCartUIStore } from "@/store/cart-ui";
import { CartItemCard } from "@/components/cart/cart-item";
import { useCartStore } from "@/store/cart";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TrustBadges } from "@/sections/products/slug/trust-badges";

export default function CartItems() {
  const cart = useCartStore((state) => state.items);
  const setStep = useCartUIStore((state) => state.setStep);
  return (
    <div className="flex flex-col gap-4">
      <div className="max-h-100 grid grid-rows-[minmax(0,1fr)] rounded-md">
        <ScrollArea className="h-full px-2 bg-muted">
          <div className="flex flex-col gap-3 py-4">
            {cart.map((cartItem) => (
              <CartItemCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
      </div>

      <Button
        size={"xl"}
        className="cursor-pointer"
        onClick={() => setStep("checkout")}
      >
        Proceed to Checkout
        <ArrowRight />
      </Button>

      <TrustBadges />
    </div>
  );
}
