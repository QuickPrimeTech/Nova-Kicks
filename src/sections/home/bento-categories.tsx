// @/sections/home/bento-categories.tsx
"use client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectCategory } from "@/db/schemas";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";

type BentoCategoriesProps = {
  categories: SelectCategory[];
};

export const BentoCategories = ({ categories }: BentoCategoriesProps) => {
  const featuredCategories = categories.slice(0, 5);

  return (
    <section id="categories" className="section py-20">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs tracking-wide uppercase text-muted-foreground mb-3">
              Shop by Sport
            </p>
            <h2 className="font-display text-heading-2 md:text-heading-1 uppercase">
              Find your
              <br />
              arena.
            </h2>
          </div>
          <Button asChild variant="link" className="hidden md:inline-flex">
            <Link href="/categories">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* 
        Mobile: 2 columns, auto rows based on aspect ratio
        Tablet (md): 3 columns
        Desktop (lg): 4 columns with fixed 280px row height
      */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
          {featuredCategories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button size={"xl"} asChild variant="outline">
            <Link href="/categories">
              View all categories <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
