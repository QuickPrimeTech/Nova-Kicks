// @/components/filters/filter-data.tsx
import {
  Users,
  Layers,
  Tag,
  DollarSign,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { FilterConfig, FilterOption } from "@/types/filters";
import { EnrichedProduct } from "@/types/product";

type Options = {
  hideCategoryFilter?: boolean;
};
export function getFiltersConfig(
  products: EnrichedProduct[],
  options: Options,
): FilterConfig[] {
  const brandMap = new Map<string, number>();
  const categoryMap = new Map<string, { label: string; count: number }>();
  const genderMap = new Map<string, number>();

  // Collection variables
  let newCount = 0;
  let discountedCount = 0;
  let limitedCount = 0;

  // Extract unique values and counts
  products.forEach((p) => {
    // Count Brands
    brandMap.set(p.brand, (brandMap.get(p.brand) || 0) + 1);

    // Count Categories
    if (p.category) {
      const existing = categoryMap.get(p.category.slug);
      if (existing) {
        existing.count += 1;
      } else {
        categoryMap.set(p.category.slug, { label: p.category.name, count: 1 });
      }
    }

    // Count Genders
    genderMap.set(p.gender, (genderMap.get(p.gender) || 0) + 1);
  });

  // Format into FilterOption arrays
  const brandOptions: FilterOption[] = Array.from(brandMap.entries()).map(
    ([value, count]) => ({
      value,
      label: value.charAt(0).toUpperCase() + value.slice(1), // Capitalize brand names
      count,
    }),
  );

  const categoryOptions: FilterOption[] = Array.from(categoryMap.entries()).map(
    ([value, data]) => ({
      value,
      label: data.label,
      count: data.count,
    }),
  );

  const collectionOptions: FilterOption[] = [
    { value: "new", label: "New Arrivals", count: newCount },
    { value: "discounted", label: "Discounted", count: discountedCount },
    { value: "limited", label: "Low Stock", count: limitedCount },
  ];

  const genderOptions: FilterOption[] = Array.from(genderMap.entries()).map(
    ([value, count]) => ({
      value,
      label: value.charAt(0).toUpperCase() + value.slice(1),
      count,
    }),
  );

  const allFilters: FilterConfig[] = [
    {
      id: "gender",
      label: "Gender",
      icon: Users,
      options: genderOptions,
      type: "single",
    },
    {
      id: "category",
      label: "Category",
      icon: Layers,
      options: categoryOptions,
      type: "multiple",
    },
    {
      id: "collection",
      label: "Collection",
      icon: Sparkles,
      options: collectionOptions,
      type: "single",
    },
    {
      id: "brand",
      label: "Brands",
      icon: Tag,
      options: brandOptions,
      type: "multiple",
    },
    {
      id: "price",
      label: "Price Range",
      icon: DollarSign,
      options: [],
      type: "range",
    },
    {
      id: "inStock", // Changed ID to match URL params cleanly
      label: "In Stock Only",
      icon: ShoppingBag,
      options: [],
      type: "boolean",
    },
  ];
  if (options.hideCategoryFilter) {
    return allFilters.filter((f) => f.id !== "category");
  }
  return allFilters;
}
