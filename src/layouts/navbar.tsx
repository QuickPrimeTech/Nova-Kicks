"use client";
import { SelectCategory } from "@/db/schema";
import { NavProducts } from "@/types/common";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { SearchProduct } from "@/components/search-product";
import { WishlistSheet } from "@/components/cart/wishlist-sheet";
import { CartSheet } from "@/components/cart/cart-sheet";
import { siteConfig } from "@/site-config";
import { useAccessibilityStore } from "@/store/accessibility";
import { Button } from "@/components/ui/button";
import { Accessibility } from "lucide-react";

type NavbarProps = {
  categories: (Omit<SelectCategory, "createdAt" | "updatedAt"> & {
    productCount: number;
  })[];
  products: NavProducts;
  brands: string[];
};

type DirectLink = {
  kind: "link";
  label: string;
  href: string;
};

type SubmenuLink = {
  kind: "submenu";
  label: string;
  items: { label: string; href: string }[];
};

export type NavItem = DirectLink | SubmenuLink;

type UseNavProps = {
  categories: NavbarProps["categories"];
  brands: string[];
};

const useNav = ({ categories, brands }: UseNavProps): NavItem[] => {
  return [
    { kind: "link", label: "Men", href: "/products?gender=men" },
    { kind: "link", label: "Women", href: "/products?gender=women" },
    { kind: "link", label: "Kids", href: "/products?gender=unisex" },
    {
      kind: "submenu",
      label: "Brands",
      items: brands.map((brand) => ({
        label: brand,
        href: `/products?brand=${encodeURIComponent(brand)}`,
      })),
    },
    {
      kind: "submenu",
      label: "Categories",
      items: categories.map((cat) => ({
        label: `${cat.name}(${cat.productCount})`,
        href: `/categories/${cat.slug}`,
      })),
    },
  ];
};

export function Navbar({ categories, brands, products }: NavbarProps) {
  const links = useNav({ categories, brands });
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [scrolled, setScrolled] = useState(false);
  const setOpen = useAccessibilityStore((state) => state.setOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky bg-transparent top-0 inset-x-0 z-50 border-b section transition-all duration-300",
        scrolled && "bg-background/90 backdrop-blur-xl",
      )}
    >
      <div className="container mx-auto h-16 flex items-center justify-between">
        {!isDesktop && <MobileNav links={links} />}
        <Link
          href="/"
          className="flex gap-1 items-center font-heading font-bold text-xl text-nowrap text-ellipsis tracking-tight lg:ml-0 ml-2"
        >
          <Logo />
          {siteConfig.name}
          <span className="text-primary">.</span>
        </Link>
        {isDesktop && <DesktopNav links={links} categories={categories} />}
        <div className="flex items-center gap-0.5">
          <SearchProduct products={products} />
          {isDesktop && (
            <Button
              variant={"ghost"}
              className="size-10"
              title="Accessiblity settings"
              onClick={() => setOpen(() => true)}
            >
              <Accessibility className="size-5" />
              <span className="sr-only">Accessibility setting</span>
            </Button>
          )}
          <WishlistSheet />
          <CartSheet />
        </div>
      </div>
    </header>
  );
}
