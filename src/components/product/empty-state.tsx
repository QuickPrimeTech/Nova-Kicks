// @/components/product/empty-state.tsx
"use client";

import { PackageX, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFilterParams } from "@/hooks/use-filter-params";

// ─── Label mappings ─────────────────────────────────────────────────

const COLLECTION_LABELS: Record<string, string> = {
  new: "New Arrivals",
  discounted: "Discounted",
  limited: "Low Stock",
};

const GENDER_LABELS: Record<string, string> = {
  men: "Men",
  women: "Women",
  unisex: "Unisex",
};

// ─── Helpers ────────────────────────────────────────────────────────

function humanize(value: string): string {
  return value
    .split(/[-_,]+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

function joinList(items: string[]): string {
  if (items.length === 1) return items[0];
  const last = items.pop()!;
  return `${items.join(", ")} and ${last}`;
}

function buildDynamicDescription(
  getParam: (key: string) => string | null,
): string {
  const clauses: string[] = [];

  const gender = getParam("gender");
  if (gender && GENDER_LABELS[gender]) {
    clauses.push(`the gender ${GENDER_LABELS[gender]}`);
  }

  const category = getParam("category");
  if (category) {
    const cats = category.split(",").filter(Boolean);
    if (cats.length === 1) {
      clauses.push(`the category of ${humanize(cats[0])}`);
    } else {
      clauses.push(`the categories of ${joinList(cats.map(humanize))}`);
    }
  }

  const collection = getParam("collection");
  if (collection && COLLECTION_LABELS[collection]) {
    clauses.push(`the ${COLLECTION_LABELS[collection]} collection`);
  }

  const brand = getParam("brand");
  if (brand) {
    const brands = brand.split(",").filter(Boolean);
    if (brands.length === 1) {
      clauses.push(`the brand ${humanize(brands[0])}`);
    } else {
      clauses.push(`the brands ${joinList(brands.map(humanize))}`);
    }
  }

  // No relevant filters active → return the original fallback
  if (clauses.length === 0) {
    return "Try adjusting your filters or browse all products.";
  }

  if (clauses.length === 1) {
    return `There are no products that fit ${clauses[0]}.`;
  }

  const last = clauses.pop()!;
  return `There are no products that fit ${clauses.join(", ")} and also ${last}.`;
}

// ─── Component ──────────────────────────────────────────────────────

type EmptyStateProps = {
  title?: string;
  description?: string;
  showProductButton?: boolean;
};

export function EmptyState({
  title = "OOps! No products found",
  description,
  showProductButton = true,
}: EmptyStateProps) {
  const { clearAll, getParam } = useFilterParams();

  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center border rounded-xl">
      <div
        className="absolute inset-0 -z-1 opacity-20"
        style={{
          background: `
        radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />

      <div className="bg-muted rounded-full p-4 mb-6">
        <PackageX className="size-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-2xl mb-6">
        {description ?? buildDynamicDescription(getParam)}
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
