// @/layouts/mobile-nav.tsx
"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItem } from "./navbar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  ShoppingBag,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { useCartStore } from "@/store/cart";
import { siteConfig } from "@/site-config";
import { useAccessibilityStore } from "@/store/accessibility";

type View =
  | { type: "main" }
  | {
      type: "submenu";
      label: string;
      items: { label: string; href: string }[];
    };

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const slideIn = {
  initial: { opacity: 0, x: 32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 26 },
  },
  exit: { opacity: 0, x: 32, transition: { duration: 0.15 } },
};

const slideBack = {
  initial: { opacity: 0, x: -32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 26 },
  },
  exit: { opacity: 0, x: -32, transition: { duration: 0.15 } },
};

export const MobileNav = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname();
  const [view, setView] = useState<View>({ type: "main" });
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const setOpen = useAccessibilityStore((state) => state.setOpen);

  const handleNavOpenChange = (open: boolean) => {
    setNavOpen(open);
    if (!open) setTimeout(() => setView({ type: "main" }), 300);
  };
  const totalItems = useCartStore((state) => state.getTotalItems());

  const currentAnim = view.type === "main" ? slideBack : slideIn;

  return (
    <Sheet open={navOpen} onOpenChange={handleNavOpenChange}>
      <SheetTrigger asChild>
        <button className="p-2 -ml-2 hover:bg-secondary rounded-full transition lg:hidden">
          <RiMenu2Line className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        showCloseButton={false}
        side="left"
        className="w-9/10 p-0 overflow-hidden"
      >
        <Button
          variant={"outline"}
          className="absolute right-2 top-3"
          size={"icon"}
          onClick={() => setNavOpen(() => false)}
        >
          <X />
        </Button>
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="px-5 pt-5 pb-3 border-b shrink-0">
            <AnimatePresence mode="wait">
              {view.type === "main" ? (
                <motion.div
                  key="main-header"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <SheetTitle className="flex gap-1.5 items-center text-left text-lg font-bold">
                    <Logo className="size-7" /> {siteConfig.name}
                    <span className="text-primary">.</span>
                  </SheetTitle>
                </motion.div>
              ) : (
                <motion.div
                  key="sub-header"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <SheetTitle className="flex items-center gap-2 text-left text-base font-semibold">
                    {view.label}
                  </SheetTitle>
                </motion.div>
              )}
            </AnimatePresence>
          </SheetHeader>

          {/* Body */}
          <ScrollArea className="h-0 flex-1">
            <AnimatePresence mode="wait">
              {/* ── MAIN ── */}
              {view.type === "main" && (
                <motion.nav
                  key="main"
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  exit={slideBack.exit}
                  className="px-3 py-3 space-y-0.5"
                >
                  {links.map((item) =>
                    item.kind === "link" ? (
                      <motion.div key={item.label} variants={itemVariants}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-secondary",
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ) : (
                      <motion.div key={item.label} variants={itemVariants}>
                        <button
                          onClick={() =>
                            setView({
                              type: "submenu",
                              label: item.label,
                              items: item.items,
                            })
                          }
                          className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                        >
                          {item.label}
                          <ChevronRight className="size-4 text-muted-foreground" />
                        </button>
                      </motion.div>
                    ),
                  )}
                  {/* All Products link */}
                  <motion.div variants={itemVariants}>
                    <SheetClose asChild>
                      <Link
                        href={"/products"}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                          pathname === "/products"
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-secondary",
                        )}
                      >
                        All Products
                      </Link>
                    </SheetClose>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Separator className="my-3" />
                  </motion.div>
                  <div className="space-y-3">
                    <motion.div variants={itemVariants}>
                      <Button
                        size={"lg"}
                        className="w-full justify-start"
                        variant="ghost"
                        onClick={() => setOpen(true)}
                      >
                        <Accessibility className="size-4 mr-2" />
                        Accessibility
                      </Button>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Button
                        className="relative w-full justify-start"
                        variant="ghost"
                        size={"lg"}
                        asChild
                      >
                        <Link href={"/checkout"}>
                          <ShoppingBag className="size-4 mr-2" />
                          My Cart
                          <span className="absolute flex justify-center bg-primary right-4 text-primary-foreground size-5 rounded-lg">
                            {totalItems}
                          </span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                  <Separator className="my-3" />
                  <motion.div variants={itemVariants} className="px-1">
                    <div className="rounded-2xl overflow-hidden border">
                      <div className="px-4 py-3 bg-muted/60 border-b">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Get in touch
                        </h3>
                      </div>
                      <div className="divide-y">
                        {siteConfig.contacts.map((contact) => {
                          const Icon = contact.icon;
                          return (
                            <Link
                              key={contact.label}
                              href={contact.url}
                              target={
                                contact.url.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                contact.url.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors group"
                            >
                              <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-muted-foreground">
                                  {contact.label}
                                </p>
                                <p className="text-sm font-medium truncate">
                                  {contact.value}
                                </p>
                                {contact.subValue && (
                                  <p className="text-xs text-muted-foreground truncate">
                                    {contact.subValue}
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight className="size-3.5 shrink-0 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </motion.nav>
              )}

              {/* ── SUBMENU ── */}
              {view.type === "submenu" && (
                <motion.nav
                  key={`submenu-${view.label}`}
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  exit={slideIn.exit}
                  className="px-3 py-3 space-y-0.5"
                >
                  <motion.div variants={itemVariants} className="border-b mb-6">
                    <Button
                      variant={"ghost"}
                      className="justify-start w-full"
                      onClick={() => setView({ type: "main" })}
                    >
                      <ArrowLeft />
                      Back to menu
                    </Button>
                  </motion.div>
                  <div className="space-y-2">
                    {view.items.map((item) => (
                      <motion.div key={item.href} variants={itemVariants}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center px-3 gap-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-secondary",
                            )}
                          >
                            {item.label} <ArrowUpRight className="size-4" />
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
            <ScrollBar />
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
