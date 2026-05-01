// @/db/seed.ts

import * as seeders from "@/db/seed/index";

async function main() {
  console.log("🚀 Starting database seeding...");
  await seeders.seedProducts();
}

main();
