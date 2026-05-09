// @/db/seeds/category.ts
import { db } from "@/index";
import { categories } from "@/db/schemas";
import { siteConfig } from "@/site-config";

const seedCategories = [
  {
    name: "Sneakers",
    slug: "sneakers",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991101/imgi_3_662364953_18099137689999564_3191625143083664886_n_h0phld.webp",
  },
  {
    name: "Jackets",
    slug: "jackets",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991974/21ad232f-217b-4873-8576-f622c3751bd7.png",
  },
  {
    name: "T-Shirts",
    slug: "tshirts",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992631/imgi_53_684091150_18556491055066504_8429370676855758771_n_w3fnlz.webp",
  },
];

export default async function seed() {
  console.log(`Starting Seeding ${siteConfig.name} categories...`);
  try {
    console.log("Clearing existing categories...");
    await db.delete(categories);
    console.log("Inserting new categories...");
    await db.insert(categories).values(seedCategories);
    console.log("✅ Category seeding completed successfully!");
  } catch (error) {
    console.error("❌ Category seeding failed:", error);
    throw error;
  }
}
