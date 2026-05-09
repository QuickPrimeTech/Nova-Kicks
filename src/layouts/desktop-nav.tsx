// @/layouts/desktop-nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowUpRight } from "lucide-react";
import { SelectCategory } from "@/db/schema";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CategoryCard } from "@/components/category-card";
import { NavProducts } from "@/types/common";

type DesktopNavProps = {
  products: NavProducts;
  links: { href: string; label: string }[];
  categories: (Omit<SelectCategory, "createdAt" | "updatedAt"> & {
    productCount: number;
  })[];
};

export const DesktopNav = ({
  products,
  links,
  categories,
}: DesktopNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary",
          )}
        >
          {item.label}
          {pathname === item.href && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-secondary rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
        </Link>
      ))}
      <NavigationMenu className="max-w-lg">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent h-auto px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ScrollArea className="w-xl">
                <div className="w-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[80px] md:auto-rows-[240px] lg:auto-rows-[120px]">
                  {categories.map((cat, index) => (
                    <NavigationMenuLink asChild key={cat.id}>
                      <CategoryCard cat={cat} index={index} />
                    </NavigationMenuLink>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <div className="p-4 pt-0 border-t mt-4 flex justify-end">
                <Button variant="link" size="sm" asChild className="mt-2">
                  <Link href="/categories">
                    View all <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
