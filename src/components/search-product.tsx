// @/components/search-product.tsx
"use client";
import * as React from "react";
import { useRouter } from "nextjs-toploader/app";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Image } from "./ui/image";
import { NavProducts } from "@/types/common";
import { formatPrice } from "@/helpers/formatters";

export const SearchProduct = ({ products }: { products: NavProducts }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Helper function to handle routing and closing the dialog
  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Search Triggers */}
      {!isDesktop ? (
        <button
          onClick={() => setOpen(true)}
          className="p-2 hover:bg-secondary rounded-full transition"
        >
          <Search className="size-5" />
        </button>
      ) : (
        <Button
          variant="outline"
          className="relative h-10 w-full justify-start rounded-full bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 size-4" />
          <span className="hidden lg:inline-flex">Search products...</span>
          <span className="inline-flex lg:hidden">Search...</span>
        </Button>
      )}

      {/* Command Search Overlay */}
      <Command>
        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          className="top-16 py-4 px-2 gap-0"
          title="Search Products"
          description="Look for specific brands, names or tags"
        >
          <CommandInput placeholder="Search products, brands..." />
          <CommandList>
            <CommandEmpty>No Products found.</CommandEmpty>
            <CommandGroup heading="Products" className="py-3">
              {products.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.name}
                  onSelect={() => {
                    // Adjust this URL path to match your actual routing setup
                    runCommand(() =>
                      router.push(`/products/${product.slug || product.id}`),
                    );
                  }}
                  className="cursor-pointer w-full"
                >
                  <div className="flex gap-3 bg-background w-full">
                    <div className="relative flex h-16 aspect-square bg-[#F5F6F7] rounded-sm overflow-hidden">
                      <Image
                        src={product.image.url}
                        alt={product.image.altText}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1 py-1 flex flex-col justify-center">
                      <p className="font-heading font-bold">
                        {product.name}({product.brand})
                      </p>
                      <p className="text-primary font-bold text-sm">
                        Ksh {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                  {/* You can also add product.price, or an image thumbnail here */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Command>
    </>
  );
};
