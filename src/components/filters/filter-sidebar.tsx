// components/filters/filter-sidebar.tsx
"use client";
import { useState, useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import {} from "framer-motion";
import {
  SlidersHorizontal,
  Check,
  ShoppingBag,
  Tag,
  DollarSign,
  Layers,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {} from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useRouter } from "nextjs-toploader/app";

// --- Types ---
interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  options: FilterOption[];
  type: "single" | "multiple" | "range" | "boolean";
}

// --- Demo Data (replace with your API data) ---
const GENDERS: FilterOption[] = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "unisex", label: "Unisex" },
];

const CATEGORIES: FilterOption[] = [
  { value: "shirts", label: "Shirts", count: 24 },
  { value: "pants", label: "Pants", count: 18 },
  { value: "shoes", label: "Shoes", count: 32 },
  { value: "accessories", label: "Accessories", count: 15 },
];

const BRANDS: FilterOption[] = [
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "puma", label: "Puma" },
  { value: "local", label: "Local Brands" },
];

// --- Main Component ---
export function FilterSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile: Floating Filter Button + Drawer */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              size="lg"
              className="rounded-full shadow-lg h-14 w-14 bg-primary hover:bg-primary/90"
            >
              <SlidersHorizontal className="h-6 w-6" />
              <ActiveFilterCount />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl px-0">
            <SheetHeader className="px-6 pb-4">
              <SheetTitle className="flex items-center gap-2 text-xl">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto h-full px-6 pb-24">
              <FilterContent />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t">
              <Button
                onClick={() => setMobileOpen(false)}
                className="w-full h-12 text-lg rounded-xl"
              >
                Show Results
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-card rounded-2xl border shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              Filters
            </h2>
            <ClearAllButton />
          </div>
          <FilterContent />
        </div>
      </aside>
    </>
  );
}

// --- Filter Content (Shared between mobile/desktop) ---
function FilterContent() {
  const filters: FilterConfig[] = [
    {
      id: "gender",
      label: "Gender",
      icon: <Users className="h-4 w-4" />,
      options: GENDERS,
      type: "single",
    },
    {
      id: "category",
      label: "Category",
      icon: <Layers className="h-4 w-4" />,
      options: CATEGORIES,
      type: "multiple",
    },
    {
      id: "brand",
      label: "Brands",
      icon: <Tag className="h-4 w-4" />,
      options: BRANDS,
      type: "multiple",
    },
    {
      id: "price",
      label: "Price Range",
      icon: <DollarSign className="h-4 w-4" />,
      options: [],
      type: "range",
    },
    {
      id: "availability",
      label: "Availability",
      icon: <ShoppingBag className="h-4 w-4" />,
      options: [],
      type: "boolean",
    },
  ];

  return (
    <Accordion
      type="multiple"
      defaultValue={["gender", "category", "price"]}
      className="space-y-2"
    >
      {filters.map((filter) => (
        <AccordionItem
          key={filter.id}
          value={filter.id}
          className="border rounded-xl px-4 data-[state=open]:bg-muted/50 transition-colors"
        >
          <AccordionTrigger className="hover:no-underline py-4 text-sm font-medium">
            <span className="flex items-center gap-2.5">
              <span className="text-muted-foreground">{filter.icon}</span>
              {filter.label}
              <FilterBadge filterId={filter.id} />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <FilterControl config={filter} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// --- Individual Filter Controls ---
function FilterControl({ config }: { config: FilterConfig }) {
  const { id, type, options } = config;
  const { getParam, updateFilter } = useFilterParams();

  if (type === "single") {
    const current = getParam(id);
    return (
      <div className="space-y-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() =>
              updateFilter(id, current === opt.value ? null : opt.value)
            }
            className={cn(
              "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all",
              current === opt.value
                ? "bg-primary text-primary-foreground font-medium shadow-sm"
                : "hover:bg-muted text-muted-foreground",
            )}
          >
            <span>{opt.label}</span>
            {current === opt.value && <Check className="h-4 w-4" />}
          </button>
        ))}
      </div>
    );
  }

  if (type === "multiple") {
    const current = getParam(id)?.split(",") || [];
    return (
      <div className="space-y-1.5">
        {options.map((opt) => {
          const isSelected = current.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => {
                const next = isSelected
                  ? current.filter((v) => v !== opt.value)
                  : [...current, opt.value];
                updateFilter(id, next.length ? next.join(",") : null);
              }}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all border",
                isSelected
                  ? "bg-primary/5 border-primary/20 text-primary font-medium"
                  : "border-transparent hover:bg-muted text-muted-foreground",
              )}
            >
              <span className="flex items-center gap-2">
                <div
                  className={cn(
                    "h-4 w-4 rounded border flex items-center justify-center transition-colors",
                    isSelected
                      ? "bg-primary border-primary"
                      : "border-muted-foreground/30",
                  )}
                >
                  {isSelected && (
                    <Check className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                {opt.label}
              </span>
              {opt.count && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {opt.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  if (type === "range") {
    const min = Number(getParam("minPrice") || 0);
    const max = Number(getParam("maxPrice") || 50000);
    const [range, setRange] = useState([min, max]);

    return (
      <div className="px-1 space-y-6">
        <Slider
          value={range}
          max={50000}
          step={1000}
          onValueChange={setRange}
          onValueCommit={(value) => {
            updateFilter("minPrice", value[0] > 0 ? String(value[0]) : null);
            updateFilter(
              "maxPrice",
              value[1] < 50000 ? String(value[1]) : null,
            );
          }}
          className="w-full"
        />
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="bg-muted px-3 py-1.5 rounded-lg">
            KES {range[0].toLocaleString()}
          </span>
          <span className="text-muted-foreground">to</span>
          <span className="bg-muted px-3 py-1.5 rounded-lg">
            KES {range[1].toLocaleString()}
          </span>
        </div>
      </div>
    );
  }

  if (type === "boolean") {
    const isInStock = getParam("inStock") === "true";
    return (
      <div className="flex items-center justify-between px-1">
        <Label htmlFor="stock-toggle" className="text-sm cursor-pointer">
          In Stock Only
        </Label>
        <Switch
          id="stock-toggle"
          checked={isInStock}
          onCheckedChange={(checked) =>
            updateFilter("inStock", checked ? "true" : null)
          }
        />
      </div>
    );
  }

  return null;
}

// --- Helper Components ---
function ActiveFilterCount() {
  const { getActiveCount } = useFilterParams();
  const count = getActiveCount();

  if (count === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold">
      {count}
    </span>
  );
}

function FilterBadge({ filterId }: { filterId: string }) {
  const { getParam } = useFilterParams();
  const value = getParam(filterId);

  if (!value) return null;

  return (
    <Badge variant="secondary" className="ml-auto text-xs h-5 px-1.5">
      {value.split(",").length}
    </Badge>
  );
}

function ClearAllButton() {
  const { clearAll, getActiveCount } = useFilterParams();
  const count = getActiveCount();

  if (count === 0) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={clearAll}
      className="text-xs h-8 text-muted-foreground hover:text-destructive"
    >
      Clear all
    </Button>
  );
}

// --- Custom Hook for URL Params ---
function useFilterParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParam = useCallback(
    (key: string) => {
      return searchParams.get(key);
    },
    [searchParams],
  );

  const updateFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams);

      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      // Reset pagination when filters change
      params.delete("page");

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router],
  );

  const clearAll = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);

  const getActiveCount = useCallback(() => {
    return Array.from(searchParams.entries()).filter(
      ([k]) => !["page"].includes(k),
    ).length;
  }, [searchParams]);

  return { getParam, updateFilter, clearAll, getActiveCount };
}
