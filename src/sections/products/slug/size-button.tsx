// @/sections/products/size-button.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductSize } from "@/types/product";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

type SizeButtonProps = {
  size: ProductSize;
  selectedSize: ProductSize | null;
  setSelectedSize: Dispatch<SetStateAction<ProductSize | null>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  className?: string;
};

export const SizeButton = ({
  className,
  size,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
}: SizeButtonProps) => {
  const isOutOfStock = size.stock < 1;
  const isSelected = selectedSize?.size === size.size;
  return (
    <Button
      size="sm"
      onClick={() => {
        if (isOutOfStock) {
          toast.warning(`The size ${size.size} is currently out of stock!`);

          return;
        }
        setSelectedSize(size);
        if (quantity > size.stock) {
          setQuantity(() => size.stock);
        }
      }}
      className={cn(
        "relative w-24 overflow-hidden",
        isOutOfStock && "opacity-50",
        className,
      )}
      variant={isSelected ? "default" : "outline"}
      aria-disabled={isOutOfStock}
      data-disabled={isOutOfStock}
      title={isOutOfStock ? "Out of stock" : `Choose size ${size.size}`}
    >
      {isOutOfStock && (
        <>
          {/* Diagonal line */}
          <span className="absolute top-1/2 -translate-y-1/2 h-px -inset-1 -rotate-18 bg-current opacity-60 pointer-events-none" />

          <span className="sr-only">Out of stock</span>
        </>
      )}

      <span className={cn(isOutOfStock && "cursor-not-allowed opacity-50")}>
        {size.size}
      </span>
    </Button>
  );
};
