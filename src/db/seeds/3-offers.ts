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
        code: "RUN8",
        description: "8% off selected running shoes",
        discountType: "percentage",
        discountValue: 8,
        productId: allProducts[2]?.id,
        startDate: now,
        endDate: future,
        isActive: true,
      },
      {
        code: "TRAIN12",
        description: "12% off training shoes",
        discountType: "percentage",
        discountValue: 12,
        productId: allProducts[5]?.id,
        startDate: now,
        endDate: future,
        isActive: true,
      },

      // 💰 FIXED AMOUNT OFFERS
      {
        code: "SAVE200",
        description: "Ksh 200 off selected sneakers",
        discountType: "fixed_amount",
        discountValue: 200,
        productId: allProducts[4]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 2500,
        isActive: true,
      },
      {
        code: "SAVE300",
        description: "Ksh 300 off premium running shoes",
        discountType: "fixed_amount",
        discountValue: 300,
        productId: allProducts[6]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 3500,
        isActive: true,
      },

      // ⚡ FLASH DEALS
      {
        code: "FLASH15",
        description: "Limited time 15% off",
        discountType: "percentage",
        discountValue: 15,
        productId: allProducts[8]?.id,
        startDate: now,
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        isActive: true,
      },
      {
        code: "WEEKEND9",
        description: "Weekend special 9% off",
        discountType: "percentage",
        discountValue: 9,
        productId: allProducts[10]?.id,
        startDate: now,
        endDate: future,
        isActive: true,
      },

      // 👟 ENTRY LEVEL DEALS
      {
        code: "BASIC150",
        description: "Ksh 150 off everyday shoes",
        discountType: "fixed_amount",
        discountValue: 150,
        productId: allProducts[12]?.id,
        startDate: now,
        endDate: future,
        minOrderAmount: 1800,
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
