// @/layouts/mobile-nav.tsx
"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { Accessibility, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

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
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const slideIn = {
  initial: { opacity: 0, x: 32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  exit: { opacity: 0, x: 32, transition: { duration: 0.15 } },
};

const slideBack = {
  initial: { opacity: 0, x: -32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  exit: { opacity: 0, x: -32, transition: { duration: 0.15 } },
};

export const MobileNav = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>({ type: "main" });

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setTimeout(() => setView({ type: "main" }), 300);
  };

  const currentAnim = view.type === "main" ? slideBack : slideIn;

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button className="p-2 -ml-2 hover:bg-secondary rounded-full transition lg:hidden">
          <RiMenu2Line className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-75 p-0 overflow-hidden">
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
                    <Logo className="size-7" /> Nova Kicks
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
                    <button
                      onClick={() => setView({ type: "main" })}
                      className="p-1 -ml-1 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="Back to menu"
                    >
                      <ArrowLeft className="size-4" />
                    </button>
                    {view.label}
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    Back to main menu
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </SheetHeader>

          {/* Body */}
          <ScrollArea className="flex-1">
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

                  <motion.div variants={itemVariants}>
                    <Separator className="my-3" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button className="w-full" variant="outline">
                      <Accessibility className="size-4 mr-2" />
                      Accessibility
                    </Button>
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
                  {view.items.map((item) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-secondary",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
