// @/sections/products/slug/product-meta.tsx

import { ProductSize, ProductWithOptionalOffer } from "@/types/product";

type MetaItem = {
  label: string;
  value: string;
  className?: string;
  condition: boolean;
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

  const metaItems: MetaItem[] = [
    {
      label: "SKU",
      value: product.slug.toUpperCase(),
      condition: true,
      className: "font-mono",
    },
    {
      label: "Brand",
      value: product.brand ?? "",
      condition: !!product.brand,
    },
    {
      label: "Gender",
      value: product.gender,
      condition: !!product.gender,
    },
    {
      label: "Category",
      value: product.category ? product.category.name : "",
      condition: !!product.category,
    },
    {
      label: "Availability",
      value: selectedSize ? `${selectedSize.stock} in stock` : "",
      condition: !!selectedSize,
    },
    {
      label: "Discount",
      value: hasOffer ? `${getDiscountPercentage()}% off` : "",
      condition: hasOffer,
      className: "text-destructive",
    },
  ];

  return (
    <div className="rounded-2xl bg-muted p-5 space-y-3 text-sm">
      {metaItems.map(
        ({ label, value, condition, className }) =>
          condition && (
            <div key={label} className="flex justify-between">
              <span className="text-muted-foreground">{label}</span>
              <span className={`font-medium ${className || ""}`.trim()}>
                {value}
              </span>
            </div>
          ),
      )}
    </div>
  );
};
