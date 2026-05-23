// @/components/product/empty-state.tsx
"use client";
import { PackageX, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFilterParams } from "@/hooks/use-filter-params";

type EmptyStateProps = {
  title?: string;
  description?: string;
  showProductButton?: boolean;
};

export function EmptyState({
  title = "No products found",
  description = "Try adjusting your filters or browse all products.",
  showProductButton = true,
}: EmptyStateProps) {
  const { clearAll } = useFilterParams();
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-muted rounded-full p-4 mb-6">
        <PackageX className="size-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs mb-6">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" onClick={() => clearAll()}>
          <Trash2 className="mr-2 size-4" />
          Clear Filters
        </Button>
        {showProductButton && (
          <Button asChild>
            <Link href="/products">
              Browse All Products
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
