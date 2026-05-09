// @/layouts/accessibility-sheet.tsx

"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useAccessibilityStore } from "@/store/accessibility";
import {
  Accessibility,
  Minus,
  Monitor,
  Moon,
  Plus,
  Sun,
  Type,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ─── THEME OPTIONS ─── */
const THEMES = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

function useA11y() {
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fs = localStorage.getItem("a11y-font") as "sm" | "base" | "lg" | null;
    const rm = localStorage.getItem("a11y-motion");
    if (fs) setFontSize(fs);
    if (rm !== null) setReducedMotion(rm === "1");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("text-sm", "text-base", "text-lg");
    root.classList.add(`text-${fontSize}`);
    root.classList.toggle("reduce-motion", reducedMotion);
    localStorage.setItem("a11y-font", fontSize);
    localStorage.setItem("a11y-motion", reducedMotion ? "1" : "0");
  }, [fontSize, reducedMotion, mounted]);

  return { mounted, fontSize, setFontSize, reducedMotion, setReducedMotion };
}

export const AccessibilitySheet = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const open = useAccessibilityStore((state) => state.open);
  const setOpen = useAccessibilityStore((state) => state.setOpen);
  const { theme, setTheme } = useTheme();
  const { mounted, fontSize, setFontSize, reducedMotion, setReducedMotion } =
    useA11y();

  if (!mounted) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side={isDesktop ? "right" : "bottom"}
        className={cn(
          isDesktop && "w-9/10 sm:w-8/10 md:w-1/2 lg:1/3",
          !isDesktop && "rounded-t-3xl",
        )}
      >
        <SheetHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Accessibility className="size-5 text-primary" />
            </div>
            <div>
              <SheetTitle className="text-left">Accessibility</SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground">
                Customize your experience
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div
          className={cn(
            "flex flex-col",
            isMobile && "grid max-h-[75vh] grid-rows-[minmax(0,1fr)_auto]",
          )}
        >
          <ScrollArea className="flex-1 px-6 py-4 h-full">
            <div className="space-y-6">
              {/* Theme */}
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Theme
                </h3>
                <div className="grid grid-cols-3 gap-2 bg-muted/20 rounded-2xl px-2 py-1 border">
                  {THEMES.map((t) => (
                    <Button
                      key={t.value}
                      onClick={() => setTheme(t.value)}
                      variant={theme === t.value ? "secondary" : "ghost"}
                    >
                      <t.icon />
                      <span className="text-xs font-medium">{t.label}</span>
                    </Button>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Font Size */}
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Text Size
                </h3>
                <div className="flex items-center gap-3 bg-muted/20 rounded-2xl px-2 py-1 border w-fit">
                  {(
                    [
                      { key: "sm" as const, icon: Minus },
                      { key: "base" as const, icon: Type },
                      { key: "lg" as const, icon: Plus },
                    ] as const
                  ).map((item) => (
                    <Button
                      key={item.key}
                      onClick={() => setFontSize(item.key)}
                      variant={fontSize === item.key ? "secondary" : "ghost"}
                    >
                      <item.icon className="size-4" />
                      {item.key === "sm"
                        ? "Small"
                        : item.key === "base"
                          ? "Default"
                          : "Large"}
                    </Button>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Motion */}
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Motion
                </h3>
                <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/30">
                  <div>
                    <p className="text-sm font-medium">Reduce Motion</p>
                    <p className="text-xs text-muted-foreground">
                      Minimize animations
                    </p>
                  </div>
                  <Switch
                    checked={reducedMotion}
                    onCheckedChange={setReducedMotion}
                  />
                </div>
              </section>
            </div>
            <ScrollBar />
          </ScrollArea>

          <div className="px-6 py-4 border-t">
            <SheetClose asChild>
              <Button size={"xl"} className="w-full">
                Done
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
