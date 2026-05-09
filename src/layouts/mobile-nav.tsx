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
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Accessibility, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Line } from "react-icons/ri";

export const MobileNav = ({
  links,
}: {
  links: { href: string; label: string }[];
}) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 -ml-2 hover:bg-secondary rounded-full transition lg:hidden">
          <RiMenu2Line className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 pt-6 pb-2 border-b">
            <SheetTitle className="flex gap-1 items-center text-left text-lg font-bold">
              <Logo className="size-8" /> Shoe Empire
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="flex-1 px-4">
            <div className="space-y-1 py-4">
              {links.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      )}
                    >
                      {item.label}
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
            </div>

            <Separator className="my-4" />

            <Button className="w-full" variant="outline">
              <Accessibility className="size-5" />
              Accessibility
            </Button>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
