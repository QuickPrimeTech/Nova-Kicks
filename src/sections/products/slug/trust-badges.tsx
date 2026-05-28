// @/sections/products/slug/trust-badges.tsx

import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  {
    icon: Truck,
    label: "Fast Delivery",
    description: "2–4 business days",
  },
  {
    icon: RotateCcw,
    label: "Easy Returns",
    description: "30-day policy",
  },
  {
    icon: ShieldCheck,
    label: "Secure Payment",
    description: "Encrypted checkout",
  },
];

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {badges.map((item) => (
        <div
          key={item.label}
          className={cn(
            "group flex flex-col items-center gap-2 rounded-xl border bg-card py-4 px-2 text-center transition-colors",
            "hover:bg-muted/60",
          )}
        >
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <item.icon className="size-4 transition-transform group-hover:scale-110" />
          </div>
          <div className="space-y-0.5">
            <span className="block font-heading text-[11px] font-semibold text-foreground uppercase tracking-wide">
              {item.label}
            </span>
            <span className="block text-[10px] text-muted-foreground leading-tight">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
