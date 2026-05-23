// @/schemas/filters.ts

import { z } from "zod";

export const filterSchema = z.object({
  gender: z.enum(["men", "women", "unisex"]).optional(),
  category: z.string().min(1).optional(),
  collection: z.enum(["new", "discounted", "limited"]).optional(),
  brand: z.string().min(1).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  inStock: z.preprocess(
    (v) => (v === "true" ? true : undefined),
    z.boolean().optional(),
  ),
  sort: z
    .enum([
      "name_asc",
      "name_desc",
      "price_asc",
      "price_desc",
      "date_asc",
      "date_desc",
    ])
    .optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).default(15),
});

export type ValidFilters = z.infer<typeof filterSchema>;
