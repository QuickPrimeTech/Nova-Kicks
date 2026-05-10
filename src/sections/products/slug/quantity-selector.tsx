// @/sections/products/slug/quantity.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductSize } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import React from "react";

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
  selectedSize: ProductSize | null;
  variant?: "default" | "sm";
};

export const QuantitySelector = ({
  className,
  quantity,
  setQuantity,
  selectedSize,
  variant = "default",
}: QuantitySelectorProps & React.ComponentProps<"div">) => {
  const reachedLimit = selectedSize ? quantity >= selectedSize.stock : false;

  return (
    <div
      className={cn("relative flex flex-col justify-center gap-2", className)}
    >
      {variant === "default" && (
        <span className="text-sm font-medium">Quantity</span>
      )}
      <div className="flex items-center border w-fit rounded-lg overflow-hidden">
        <Button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          className={cn("rounded-none", variant === "sm" && "size-8")}
          variant="ghost"
          aria-label={`Decrease quantity to ${quantity - 1}`}
          size={variant === "sm" ? "icon" : "default"}
        >
          <Minus className={cn("size-4", variant === "sm" && "size-3")} />
        </Button>

        <span
          className={cn(
            "w-12 h-full flex items-center justify-center text-sm font-semibold border-x tabular-nums",
            variant === "sm" && "w-10",
          )}
        >
          {quantity}
        </span>

        <Button
          className={cn("rounded-none", variant === "sm" && "size-8")}
          variant="ghost"
          disabled={reachedLimit}
          aria-label={`Increase quantity to ${quantity + 1}`}
          onClick={() => setQuantity(quantity + 1)}
          size={variant === "sm" ? "icon" : "default"}
        >
          <Plus className={cn("size-4", variant === "sm" && "size-3")} />
        </Button>
      </div>
      {reachedLimit && (
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-muted border px-2 rounded-md">
          <p className={"text-nowrap text-xs text-muted-foreground"}>
            Only <strong>{selectedSize?.stock}</strong> in stock
          </p>
        </div>
      )}
    </div>
  );
};
