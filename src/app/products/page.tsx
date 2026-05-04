// @/app/products/page.tsx
import { Metadata } from "next";
import { getProducts } from "@/db/functions/product";
import { FilterSidebar } from "@/components/filters/filter-sidebar";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Products",
    description:
      "Browse our curated collection of premium sneakers, running shoes, basketball kicks, and lifestyle footwear.",
    openGraph: {
      title: "Shop All Products",
      description: "Discover premium footwear for every stride.",
      type: "website",
    },
    alternates: {
      canonical: "/products",
    },
  };
}

export default async function ProductsPage() {
  const products = await getProducts();

  const categories = Array.from(
    new Set(products.map((p) => p.category?.name).filter(Boolean)),
  ) as string[];
  const brands = Array.from(
    new Set(products.map((p) => p.brand).filter(Boolean)),
  ) as string[];
  const maxPrice = Math.max(...products.map((p) => p.price), 10000);

  return (
    <div className="min-h-screen py-10">
      <FilterSidebar />
    </div>
  );
}
