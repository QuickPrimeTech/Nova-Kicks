// @/sections/products/slug/product-meta.tsx
import Link from "next/link";
import {
  Barcode,
  Users,
  Layers,
  PackageCheck,
  BadgePercent,
  ArrowUpRight,
  LucideIcon,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductSize, ProductWithOptionalOffer } from "@/types/product";

type MetaItem = {
  label: string;
  icon: LucideIcon;
  value: React.ReactNode;
  className?: string;
  condition: boolean;
  highlight?: boolean; // e.g., for discount
};

type ProductMetaProps = {
  product: ProductWithOptionalOffer;
  selectedSize: ProductSize | null;
};

export const ProductMeta = ({ product, selectedSize }: ProductMetaProps) => {
  const hasOffer = !!product.offer;

  const getDiscountPercentage = (): number => {
    if (!product.offer) return 0;
    const { discountType, discountValue } = product.offer;
    if (discountType === "percentage") return discountValue;
    if (discountType === "fixed_amount") {
      return Math.round((discountValue / product.price) * 100);
    }
    return 0;
  };

  const stockStatus = selectedSize
    ? selectedSize.stock === 0
      ? "out"
      : selectedSize.stock <= 10
        ? "low"
        : "in"
    : null;

  const metaItems: MetaItem[] = [
    {
      label: "SKU",
      icon: Barcode,
      value: product.slug.toUpperCase(),
      condition: true,
      className: "font-mono text-xs tracking-wider",
    },
    {
      label: "Brand",
      icon: Tag,
      value: product.brand,
      condition: !!product.brand,
    },
    {
      label: "Gender",
      icon: Users,
      value: <span className="capitalize">{product.gender}</span>,
      condition: !!product.gender,
    },
    {
      label: "Category",
      icon: Layers,
      value: product.category ? (
        <Link
          href={`/products?category=${product.category.slug}`}
          className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:text-primary transition-colors"
        >
          {product.category.name}
          <ArrowUpRight className="size-3 opacity-50" />
        </Link>
      ) : null,
      condition: !!product.category,
    },
    {
      label: "Availability",
      icon: PackageCheck,
      value: selectedSize ? (
        <span className="inline-flex items-center gap-2">
          <span
            className={cn(
              "size-2 rounded-full animate-pulse",
              stockStatus === "in" && "bg-emerald-500",
              stockStatus === "low" && "bg-amber-500",
              stockStatus === "out" && "bg-red-500",
            )}
          />
          <span>
            {selectedSize.stock} in stock
            {stockStatus === "low" && (
              <span className="text-amber-600 text-xs ml-1">(Low)</span>
            )}
          </span>
        </span>
      ) : null,
      condition: !!selectedSize,
    },
    {
      label: "Discount",
      icon: BadgePercent,
      value: hasOffer ? (
        <Badge variant="destructive" className="font-semibold">
          {getDiscountPercentage()}% OFF
        </Badge>
      ) : null,
      condition: hasOffer,
      highlight: true,
    },
  ];

  return (
    <div className="rounded-xl border bg-card p-1">
      {metaItems.map(
        (
          { label, icon: Icon, value, condition, className, highlight },
          index,
        ) =>
          condition ? (
            <div
              key={label}
              className={cn(
                "flex items-center justify-between px-4 py-3.5 text-sm",
                index !== metaItems.filter((m) => m.condition).length - 1 &&
                  "border-b",
                highlight && "bg-destructive/5 rounded-xl mx-0.5 my-0.5 px-3.5",
              )}
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-muted-foreground/70">
                  {<Icon className="size-4" />}
                </span>
                <span className="font-heading">{label}</span>
              </div>
              <span className={cn("font-medium text-foreground", className)}>
                {value}
              </span>
            </div>
          ) : null,
      )}
    </div>
  );
};
