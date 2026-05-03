// @/db/seeds/offers.ts

import { db } from "@/index";
import { offers, InsertOffer } from "@/db/schemas";
import { products } from "@/db/schemas";

export default async function seed() {
  console.log("🎯 Seeding offers...");

  try {
    await db.delete(offers);

    // 1. Get all products
    const allProducts = await db.select().from(products);

    if (!allProducts.length) {
      throw new Error("❌ No products found. Seed products first.");
    }

    const now = new Date();

    const future = new Date();
    future.setDate(future.getDate() + 14); // 2 weeks promo

    // 2. Manually define offers (explicit control)
    const seedOffers: InsertOffer[] = [
      // 🔥 PERCENTAGE OFFERS
      {
        code: "JORDAN10",
        description: "10% off Air Jordans",
        discountType: "percentage",
        discountValue: 10,
        productId: allProducts[0]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 0,
        isActive: true,
      },
      {
        code: "RUN15",
        description: "15% off running shoes",
        discountType: "percentage",
        discountValue: 15,
        productId: allProducts[2]?.id,
        startDate: now,
        endDate: future,
        isActive: true,
      },

      // 💰 FIXED AMOUNT OFFERS
      {
        code: "SAVE500",
        description: "Ksh 500 off selected sneakers",
        discountType: "fixed_amount",
        discountValue: 500,
        productId: allProducts[4]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 3000,
        isActive: true,
      },
      {
        code: "SAVE1000",
        description: "Ksh 1000 off premium shoes",
        discountType: "fixed_amount",
        discountValue: 1000,
        productId: allProducts[6]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 5000,
        isActive: true,
      },

      // ⚡ FLASH DEAL
      {
        code: "FLASH20",
        description: "Limited time 20% off",
        discountType: "percentage",
        discountValue: 20,
        productId: allProducts[8]?.id,
        startDate: now,
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
        isActive: true,
      },
    ];

    // 3. Filter out undefined productIds (safety)
    const validOffers = seedOffers.filter((offer) => offer.productId);

    // 4. Insert
    await db.insert(offers).values(validOffers);

    console.log(`✅ Seeded ${validOffers.length} offers`);
  } catch (error) {
    console.error("❌ Offer seeding failed:", error);
  }
}
