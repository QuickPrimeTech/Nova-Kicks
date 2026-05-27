// @/app/categories/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/sections/categories/hero";
import { CategoryCard } from "@/sections/categories/category-card";
import { CTA } from "@/sections/categories/cta";
import { EmptyState } from "@/sections/categories/empty-state";
import { getCategoriesPageData } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const categoriesData = await getCategoriesPageData();

  return {
    title: `Browse Categories`,
    description: `Explore ${categoriesData.length} curated product categories. Find the perfect items across ${categoriesData.map((c) => c.name).join(", ")}.`,
    keywords: [
      "categories",
      "shop",
      "products",
      ...categoriesData.map((c) => c.name.toLowerCase()),
    ],
    openGraph: {
      title: "Browse All Categories",
      description: `Discover ${categoriesData.length} curated collections.`,
      type: "website",
      url: "/categories",
    },
    twitter: {
      card: "summary_large_image",
      title: "Browse All Categories",
      description: `Discover ${categoriesData.length} curated collections.`,
    },
    alternates: {
      canonical: "/categories",
    },
  };
}

export default async function CategoriesPage() {
  const categoriesData = await getCategoriesPageData();

  return (
    <>
      <section className="min-h-screen space-y-8 py-16 md:py-24 section">
        <Hero />
        <div className="container mx-auto">
          {categoriesData.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categoriesData.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
