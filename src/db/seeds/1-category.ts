// @/db/seeds/category.ts
import { db } from "@/index";
import { categories } from "@/db/schemas";
import { siteConfig } from "@/site-config";

const seedCategories = [
  {
    name: "Lifestyle Shoes",
    slug: "lifestyle-shoes",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778388383/cat-lifestyle--EWmR9B__vyh7e1.jpg",
  },
  {
    name: "Everyday Shoes",
    slug: "everyday-shoes",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778388501/qCG28_ht5sjo.jpg",
  },
  {
    name: "Basketball Shoes",
    slug: "basketball-shoes",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778387977/cat-basketball-J-8OeFhd_zd3qso.jpg",
  },
  {
    name: "Running Shoes",
    slug: "running-shoes",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778388133/running-shoes_s99k4g.jpg",
  },
  {
    name: "Training Shoes",
    slug: "training-shoes",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778388289/training-shoes_rimpuq.jpg",
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
