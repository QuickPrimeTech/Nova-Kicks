// @/index.ts

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from .env file");
}

// Singleton pattern: reuse the same client across HMR reloads
const globalForDb = globalThis as unknown as {
  client?: postgres.Sql;
};

const client =
  globalForDb.client ??
  postgres(process.env.DATABASE_URL!, {
    prepare: false,
    max: 10, // Pool size per Next.js instance
    idle_timeout: 20, // Close idle connections after 20s
    connect_timeout: 10,
  });

// Store in global so HMR doesn't create new connections
if (process.env.NODE_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle({ client });
