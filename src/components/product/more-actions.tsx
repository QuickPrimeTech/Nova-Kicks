// @/components/product/more-actions.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, Eye, Heart, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { ShareProduct } from "./share-product";

type MoreActionsProps = {
  slug: string;
  setQuickViewOpen: Dispatch<SetStateAction<boolean>>;
  addToWishlist: () => void;
};

export const MoreActions = ({
  slug,
  setQuickViewOpen,
  addToWishlist,
}: MoreActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden" asChild>
        <Button variant="outline" size={"icon-sm"}>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="w-full" asChild>
          <button onClick={() => setQuickViewOpen(true)}>
            Quick view <Eye />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full" asChild>
          <Link href={`/products/${slug}`}>
            Details
            <ArrowUpRight />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-full"
          onClick={() => addToWishlist()}
          asChild
        >
          <button>
            Wishlist <Heart />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full justify-start" asChild>
          <ShareProduct iconPosition="right" name={slug} slug={slug} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
