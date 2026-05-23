// @/components/filters/sort-select.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "date_desc", label: "Date, new to old" },
  { value: "date_asc", label: "Date, old to new" },
  { value: "name_asc", label: "Alphabetically, A-Z" },
  { value: "name_desc", label: "Alphabetically, Z-A" },
  { value: "price_asc", label: "Price, low to high" },
  { value: "price_desc", label: "Price, high to low" },
];

export function SortSelect({
  className,
  ...props
}: ComponentProps<typeof SelectTrigger>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "date_desc";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "date_desc") {
      params.delete("sort"); // default, keep URL clean
    } else {
      params.set("sort", value);
    }
    params.set("page", "1"); // reset to first page on sort change
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Select value={currentSort} onValueChange={handleChange}>
      <SelectTrigger
        className={cn("w-fit gap-2 h-10 px-3", className)}
        {...props}
      >
        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent align="end">
        {sortOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
