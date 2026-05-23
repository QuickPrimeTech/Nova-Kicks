export type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

export type FilterConfig = {
  id: string;
  label: string;
  icon: any;
  options: FilterOption[];
  type: "single" | "multiple" | "range" | "boolean";
};
