// @/components/category-card.tsx

import Link from "next/link";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectCategory } from "@/db/schema";

export const getGridSpans = (index: number) => {
  switch (index) {
    case 0: // Large featured (top-left)
      return "col-span-2 row-span-2";
    case 1: // Top-right
      return "col-span-1 row-span-1";
    case 2: // Middle-right
      return "col-span-1 row-span-1";
    case 3: // Bottom-left
      return "col-span-1 row-span-1";
    case 4: // Bottom-right (spans 2 on mobile, 1 on lg)
      return "col-span-2 lg:col-span-1 row-span-1";
    default:
      return "";
  }
};

type Category = Omit<SelectCategory, "createdAt" | "updatedAt">;

export const CategoryCard = ({
  cat,
  index,
}: {
  cat: Category;
  index: number;
}) => {
  return (
    <Link
      href={`/categories/${cat.slug}`}
      className={cn(
        "block group relative overflow-hidden rounded-xl",
        getGridSpans(index),
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: index * 0.08, duration: 0.7 }}
        className="size-full"
      >
        <Image
          src={cat.image || "/placeholder-category.jpg"}
          alt={cat.name}
          loading={index < 2 ? "eager" : "lazy"}
          fill
          sizes={cn(
            index === 0
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
          )}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
          <h3
            className={cn(
              "font-display font-bold uppercase leading-tight",
              index === 0
                ? "text-3xl md:text-4xl lg:text-5xl"
                : "text-xl md:text-2xl",
            )}
          >
            {cat.name}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
