// @/components/product/size-guide-dialog.tsx
"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ruler } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SHOE_SIZES = [
  { uk: 3, us: 3.5, eu: 35.5, cm: 22.5 },
  { uk: 3.5, us: 4, eu: 36, cm: 22.9 },
  { uk: 4, us: 4.5, eu: 36.5, cm: 23.3 },
  { uk: 4.5, us: 5, eu: 37.5, cm: 23.7 },
  { uk: 5, us: 5.5, eu: 38, cm: 24.1 },
  { uk: 5.5, us: 6, eu: 38.5, cm: 24.5 },
  { uk: 6, us: 6.5, eu: 39, cm: 25 },
  { uk: 6.5, us: 7, eu: 40, cm: 25.4 },
  { uk: 7, us: 7.5, eu: 40.5, cm: 25.8 },
  { uk: 7.5, us: 8, eu: 41, cm: 26.2 },
  { uk: 8, us: 8.5, eu: 42, cm: 26.7 },
  { uk: 8.5, us: 9, eu: 42.5, cm: 27.1 },
  { uk: 9, us: 9.5, eu: 43, cm: 27.5 },
  { uk: 9.5, us: 10, eu: 44, cm: 27.9 },
  { uk: 10, us: 10.5, eu: 44.5, cm: 28.3 },
  { uk: 10.5, us: 11, eu: 45, cm: 28.8 },
  { uk: 11, us: 11.5, eu: 45.5, cm: 29.2 },
  { uk: 11.5, us: 12, eu: 46, cm: 29.6 },
  { uk: 12, us: 12.5, eu: 47, cm: 30 },
  { uk: 13, us: 13.5, eu: 48, cm: 30.5 },
];

const CLOTHING_SIZES = [
  { uk: "XS", chest: "84–89", waist: "69–74", hips: "81–86" },
  { uk: "S", chest: "89–94", waist: "74–79", hips: "86–91" },
  { uk: "M", chest: "96–101", waist: "81–86", hips: "91–96" },
  { uk: "L", chest: "104–109", waist: "89–94", hips: "96–101" },
  { uk: "XL", chest: "112–117", waist: "97–102", hips: "101–106" },
  { uk: "2XL", chest: "119–124", waist: "104–109", hips: "106–111" },
  { uk: "3XL", chest: "127–132", waist: "112–117", hips: "111–116" },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SizeTable({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SizeTableHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </div>
  );
}

function SizeTableRow({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 text-sm transition-colors",
        highlighted
          ? "bg-primary/5 font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted/30",
      )}
    >
      {children}
    </div>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center px-3 py-3.5 text-center">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function SizeGuideDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-xs font-medium underline underline-offset-4 text-muted-foreground transition-colors hover:text-foreground">
          Size Guide
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] grid grid-rows-[minmax(0,1fr)] sm:max-w-lg md:max-w-2xl p-0 gap-0">
        <ScrollArea className="h-full">
          <div>
            {/* Header */}
            <DialogHeader className="px-6 pt-6 pb-2 space-y-1 border-b rounded-b-md">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Ruler className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Fit & Sizing
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight">
                Size Guide
              </DialogTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Find your perfect fit. Measurements below are in centimetres and
                reflect standard UK sizing.
              </p>
            </DialogHeader>

            {/* Tabs */}
            <div className="px-6 py-4">
              <Tabs defaultValue="shoes" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-11 rounded-lg bg-muted p-1">
                  <TabsTrigger
                    value="shoes"
                    className="rounded-md text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Shoes
                  </TabsTrigger>
                  <TabsTrigger
                    value="clothing"
                    className="rounded-md text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Clothing
                  </TabsTrigger>
                </TabsList>

                {/* Shoes */}
                <TabsContent value="shoes" className="mt-5 space-y-4">
                  <SizeTable>
                    <SizeTableHeader>
                      <Cell>UK</Cell>
                      <Cell>US</Cell>
                      <Cell>EU</Cell>
                      <Cell>CM</Cell>
                    </SizeTableHeader>

                    <div className="max-h-[40vh] grid grid-rows-[minmax(0,1fr)]">
                      <ScrollArea className="h-full">
                        {SHOE_SIZES.map((row) => (
                          <SizeTableRow key={row.uk}>
                            <Cell>{row.uk}</Cell>
                            <Cell>{row.us}</Cell>
                            <Cell>{row.eu}</Cell>
                            <Cell>{row.cm}</Cell>
                          </SizeTableRow>
                        ))}
                        <ScrollBar />
                      </ScrollArea>
                    </div>
                  </SizeTable>

                  <div className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground leading-relaxed space-y-1">
                    <p className="font-medium text-foreground">
                      How to measure
                    </p>
                    <p>
                      Place your foot on a flat surface and measure from the
                      heel to the tip of your longest toe. If you are between
                      sizes, we recommend sizing up for a comfortable fit.
                    </p>
                  </div>
                </TabsContent>

                {/* Clothing */}
                <TabsContent value="clothing" className="mt-5 space-y-4">
                  <SizeTable>
                    <SizeTableHeader>
                      <Cell>UK Size</Cell>
                      <Cell>Chest</Cell>
                      <Cell>Waist</Cell>
                      <Cell>Hips</Cell>
                    </SizeTableHeader>

                    <div className="max-h-[40vh] grid grid-rows-[minmax(0,1fr)]">
                      <ScrollArea>
                        {CLOTHING_SIZES.map((row) => (
                          <SizeTableRow key={row.uk}>
                            <Cell>
                              <span className="font-semibold text-foreground">
                                {row.uk}
                              </span>
                            </Cell>
                            <Cell>{row.chest} cm</Cell>
                            <Cell>{row.waist} cm</Cell>
                            <Cell>{row.hips} cm</Cell>
                          </SizeTableRow>
                        ))}
                        <ScrollBar />
                      </ScrollArea>
                    </div>
                  </SizeTable>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        label: "Chest",
                        desc: "Measure around the fullest part of your chest.",
                      },
                      {
                        label: "Waist",
                        desc: "Measure around your natural waistline.",
                      },
                      {
                        label: "Hips",
                        desc: "Measure around the fullest part of your hips.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-border p-3 space-y-1"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t bg-muted/30">
              <p className="text-[11px] text-muted-foreground text-center">
                Sizes may vary slightly by product. Check individual product
                descriptions for specific fit notes.
              </p>
            </div>
            <ScrollBar />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
