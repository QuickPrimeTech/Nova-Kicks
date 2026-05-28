import type { LucideIcon } from "lucide-react";

export type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

type BaseFilterConfig = {
  id: string;
  label: string;
  icon: LucideIcon;
};

// These two actually need options
type SelectFilterConfig = BaseFilterConfig & {
  type: "single" | "multiple";
  options: FilterOption[];
};

// These two do NOT
type RangeFilterConfig = BaseFilterConfig & {
  type: "range";
  min: number;
  max: number;
  step: number;
};

type BooleanFilterConfig = BaseFilterConfig & {
  type: "boolean";
};

export type FilterConfig =
  | SelectFilterConfig
  | RangeFilterConfig
  | BooleanFilterConfig;
