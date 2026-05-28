"use client";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Import Shadcn Checkbox
import { cn } from "@/lib/utils";
import { FilterConfig } from "@/types/filters";
import { useFilterParams } from "@/hooks/use-filter-params";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function FilterControl({ config }: { config: FilterConfig }) {
  const { id, type } = config;
  const { getParam, updateFilter, updateFilters } = useFilterParams();

  if (type === "single" || type === "multiple") {
    const { options } = config;
    // --- Type: Single (e.g., Gender) ---
    if (type === "single") {
      const current = getParam(id);
      return (
        <div className="space-y-1">
          {options.map((opt) => {
            const isSelected = current === opt.value;
            return (
              <div
                key={opt.value}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer hover:bg-muted/50",
                  isSelected && "bg-muted",
                )}
                onClick={() => updateFilter(id, isSelected ? null : opt.value)}
              >
                <Checkbox
                  id={`${id}-${opt.value}`}
                  checked={isSelected}
                  onCheckedChange={() =>
                    updateFilter(id, isSelected ? null : opt.value)
                  }
                />
                <Label
                  htmlFor={`${id}-${opt.value}`}
                  className="flex-1 text-sm font-medium leading-none cursor-pointer"
                >
                  {opt.label}
                </Label>
              </div>
            );
          })}
        </div>
      );
    }

    // --- Type: Multiple (e.g., Categories, Brands) ---
    if (type === "multiple") {
      const current = getParam(id)?.split(",") || [];
      return (
        <div className="space-y-1">
          {options.map((opt) => {
            const isSelected = current.includes(opt.value);

            const handleToggle = () => {
              const next = isSelected
                ? current.filter((v) => v !== opt.value)
                : [...current, opt.value];
              updateFilter(id, next.length ? next.join(",") : null);
            };

            return (
              <div
                key={opt.value}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-lg transition-all cursor-pointer hover:bg-muted/50",
                  isSelected && "bg-primary/5",
                )}
                onClick={handleToggle}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-${opt.value}`}
                    checked={isSelected}
                    onCheckedChange={handleToggle}
                  />
                  <Label
                    htmlFor={`${id}-${opt.value}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {opt.label}
                  </Label>
                </div>
                {opt.count && (
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {opt.count}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      );
    }
  }

  // ─── Range (Slider + Inputs + Debounce) ───────────────────────────
  if (type === "range") {
    const { min, max, step } = config;

    // Resolve initial values from URL or config bounds
    const paramMin = getParam("minPrice");
    const paramMax = getParam("maxPrice");
    const initialMin = paramMin ? Number(paramMin) : min;
    const initialMax = paramMax ? Number(paramMax) : max;

    const [range, setRange] = useState<[number, number]>([
      initialMin,
      initialMax,
    ]);
    const [minInput, setMinInput] = useState(String(initialMin));
    const [maxInput, setMaxInput] = useState(String(initialMax));
    const [errors, setErrors] = useState<{ min?: string; max?: string }>({});

    // Ref so the debounced effect never sees a stale updateFilters closure
    const updateFiltersRef = useRef(updateFilters);
    updateFiltersRef.current = updateFilters;

    // Debounced validation + commit from text inputs
    useEffect(() => {
      const timer = setTimeout(() => {
        // Treat empty as "reset to boundary"
        const minVal = minInput.trim() === "" ? min : Number(minInput);
        const maxVal = maxInput.trim() === "" ? max : Number(maxInput);

        // If inputs already match the current slider, nothing to do
        if (minVal === range[0] && maxVal === range[1]) return;

        const nextErrors: { min?: string; max?: string } = {};

        // --- Min validation ---
        if (
          isNaN(minVal) ||
          (minInput.trim() !== "" && isNaN(Number(minInput)))
        ) {
          nextErrors.min = "Enter a valid number";
        } else if (minVal < min) {
          nextErrors.min = `Minimum is KES ${min.toLocaleString()}`;
        } else if (minVal > maxVal) {
          nextErrors.min = "Must be less than max price";
        }

        // --- Max validation ---
        if (
          isNaN(maxVal) ||
          (maxInput.trim() !== "" && isNaN(Number(maxInput)))
        ) {
          nextErrors.max = "Enter a valid number";
        } else if (maxVal > max) {
          nextErrors.max = `Maximum is KES ${max.toLocaleString()}`;
        } else if (maxVal < minVal) {
          nextErrors.max = "Must be greater than min price";
        }

        setErrors(nextErrors);

        // Only commit if both sides are valid
        if (!nextErrors.min && !nextErrors.max) {
          const nextRange: [number, number] = [minVal, maxVal];
          setRange(nextRange);
          updateFiltersRef.current({
            minPrice: minVal > min ? String(minVal) : null,
            maxPrice: maxVal < max ? String(maxVal) : null,
          });
        }
      }, 1000);

      return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minInput, maxInput, min, max]);

    // Slider drag → instant local update (no URL spam)
    const handleSliderChange = (value: number[]) => {
      setRange([value[0], value[1]]);
      setMinInput(String(value[0]));
      setMaxInput(String(value[1]));
      setErrors({});
    };

    // Slider release → commit to URL
    const handleSliderCommit = (value: number[]) => {
      updateFilters({
        minPrice: value[0] > min ? String(value[0]) : null,
        maxPrice: value[1] < max ? String(value[1]) : null,
      });
    };

    return (
      <div className="px-1 py-2 space-y-6">
        <Slider
          value={range}
          min={min}
          max={max}
          step={step}
          onValueChange={handleSliderChange}
          onValueCommit={handleSliderCommit}
          className="w-full"
        />

        <div className="flex items-start gap-2">
          {/* Min Input */}
          <div className="flex-1 space-y-1.5">
            <Label
              htmlFor="price-min"
              className="text-xs text-muted-foreground"
            >
              Min Price
            </Label>
            <InputGroup>
              <InputGroupAddon>
                <span className="text-xs text-muted-foreground">KES</span>
              </InputGroupAddon>
              <InputGroupInput
                id="price-min"
                type="number"
                value={minInput}
                onChange={(e) => {
                  setMinInput(e.target.value);
                  setErrors((prev) => ({ ...prev, min: undefined }));
                }}
                className={cn(
                  "pl-10 text-sm md:text-xs",
                  errors.min &&
                    "border-destructive focus-visible:ring-destructive",
                )}
              />
            </InputGroup>

            {errors.min && (
              <p className="text-xs text-destructive">{errors.min}</p>
            )}
          </div>

          <span className="text-muted-foreground mt-7">to</span>

          {/* Max Input */}
          <div className="flex-1 space-y-1.5">
            <Label
              htmlFor="price-max"
              className="text-xs text-muted-foreground"
            >
              Max Price
            </Label>
            <InputGroup>
              <InputGroupAddon>
                <span className="text-xs text-muted-foreground">KES</span>
              </InputGroupAddon>
              <InputGroupInput
                id="price-max"
                type="number"
                value={maxInput}
                onChange={(e) => {
                  setMaxInput(e.target.value);
                  setErrors((prev) => ({ ...prev, max: undefined }));
                }}
                className={cn(
                  "pl-10 text-sm md:text-xs",
                  errors.max &&
                    "border-destructive focus-visible:ring-destructive",
                )}
              />
            </InputGroup>
            {errors.max && (
              <p className="text-xs text-destructive">{errors.max}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- Type: Boolean (Stock) ---
  if (type === "boolean") {
    // Use the ID from config (could be "inStock" or "discounted")
    const isActive = getParam(id) === "true";

    return (
      <div
        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer hover:bg-muted/50"
        onClick={() => updateFilter(id, isActive ? null : "true")}
      >
        <Checkbox
          id={`bool-${id}`}
          checked={isActive}
          onCheckedChange={(checked) =>
            updateFilter(id, checked ? "true" : null)
          }
        />
        <Label
          htmlFor={`bool-${id}`}
          className="flex-1 text-sm font-medium leading-none cursor-pointer"
        >
          {config.label}{" "}
          {/* This will now say "Collection" or "In Stock Only" dynamicallly */}
        </Label>
      </div>
    );
  }

  return null;
}
