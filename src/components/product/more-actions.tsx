// @/components/product/more-actions.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, Eye, MoreVertical, Share } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type MoreActionsProps = {
  slug: string;
  setQuickViewOpen: Dispatch<SetStateAction<boolean>>;
};

export const MoreActions = ({ slug, setQuickViewOpen }: MoreActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden" asChild>
        <Button variant="outline" size={"icon-sm"}>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <button onClick={() => setQuickViewOpen(true)}>
            Quick view <Eye />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/products/${slug}`}>
            Details
            <ArrowUpRight />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Share <Share />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
