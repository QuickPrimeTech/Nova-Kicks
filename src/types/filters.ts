import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

export type FilterConfig = {
  id: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  options: FilterOption[];
  type: "single" | "multiple" | "range" | "boolean";
};
