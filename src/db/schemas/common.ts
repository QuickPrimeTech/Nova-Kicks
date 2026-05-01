// @/db/schemas/common.ts

import { timestamp } from "drizzle-orm/pg-core";

// This is your reusable timestamp object
export const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
};
