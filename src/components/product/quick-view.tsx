// @/components/product/quick-view.tsx
"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ProductContent } from "@/sections/products/slug/content";
import { ProductWithOptionalOffer } from "@/types/product";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type QuickViewProps = {
  product: ProductWithOptionalOffer;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const QuickView = ({ product, open, onOpenChange }: QuickViewProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[90vw] p-0 gap-0 grid grid-rows-[auto_minmax(0,1fr)] max-h-[85vh]">
          <DialogHeader className="sr-only">
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full overflow-y-auto">
            <ProductContent product={product} showBreadcrumb={false} />
            <ScrollBar />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] grid grid-rows-[auto_minmax(0,1fr)]">
        <DrawerHeader className="sr-only">
          <DrawerTitle className="sr-only">{product.name}</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-full overflow-y-auto">
          <ProductContent product={product} showBreadcrumb={false} />
          <ScrollBar />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
