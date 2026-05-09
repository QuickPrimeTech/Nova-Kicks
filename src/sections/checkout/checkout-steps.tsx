// @/sections/checkout/checkout-steps.tsx
"use client";
import React from "react";
import { useCartUIStore } from "@/store/cart-ui";

const STEPS = ["Cart", "Checkout", "Confirmed"];
const STEP_MAP: Record<string, number> = {
  cart: 0,
  checkout: 1,
  confirmed: 2,
};

export const CheckoutSteps = () => {
  const step = useCartUIStore((state) => state.step);
  const currentIdx = STEP_MAP[step] ?? 0;

  return (
    <nav aria-label="Checkout progress" className="mb-12 px-2">
      <ol className="flex items-center gap-2">
        {STEPS.map((s, i) => {
          const isCompleted = i < currentIdx;
          const isActive = i === currentIdx;

          return (
            <React.Fragment key={s}>
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className={`h-0.5 flex-1 transition-colors duration-300 ${
                    i <= currentIdx ? "bg-primary" : "bg-border"
                  }`}
                />
              )}

              <li
                aria-current={isActive ? "step" : undefined}
                className="relative flex shrink-0 flex-col items-center"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black transition-all duration-300 shadow-sm ${
                    isCompleted || isActive
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-muted text-muted-foreground"
                  } ${isActive ? "ring-4 ring-primary/20 scale-110" : ""}`}
                >
                  {isCompleted ? "✓" : i + 1}
                </div>

                {/* Always-visible label, positioned absolutely so it doesn't widen the <li> */}
                <span
                  className={`absolute top-full mt-1.5 text-[10px] sm:text-xs font-medium whitespace-nowrap select-none ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
