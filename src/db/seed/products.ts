// @/db/seed/products.ts

import { db } from "@/index"; // Path to your drizzle db instance
import { InsertProduct, products } from "@/db/schemas"; // Import the products schema

const seedShoes: InsertProduct[] = [
  {
    name: "Empire Air Max",
    slug: "empire-air-max",
    description:
      "The Empire Air Max delivers visible cushioning under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180.",
    brand: "Nike",
    price: 4500, // Price in Ksh
    stockQuantity: 15,
    isPublished: true,
    colors: ["Black", "White", "Anthracite"],
    availableSizes: ["40", "41", "42", "43", "44"],
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777650988/product-1_g9v9oq.png",
        altText: "White Empire Air Max",
        isPrimary: true,
      },
    ],
  },
  {
    name: "Empire Court 1",
    slug: "empire-court-1",
    description:
      "The classic sneaker that started it all. Premium leather upper and the iconic Wings logo.",
    brand: "Nike",
    price: 5000,
    stockQuantity: 8,
    isPublished: true,
    colors: ["Chicago Red", "Black Toe"],
    availableSizes: ["41", "42", "43", "44", "45"],
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777651083/product-2_fclpka.png",
        altText: "Black Empire Court 1",
        isPrimary: true,
      },
    ],
  },
];

export async function seedProducts() {
  console.log("👟 Seeding Shoe Empire products...");
  try {
    await db.insert(products).values(seedShoes);
    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
  process.exit(0);
}
