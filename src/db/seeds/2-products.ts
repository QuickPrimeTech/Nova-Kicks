// @/db/seeds/products.ts

import { db } from "@/index"; // Path to your drizzle db instance
import { categories, InsertProduct, products } from "@/db/schemas"; // Import the products schema

const realProducts: (InsertProduct & { categorySlug: string })[] = [
  {
    name: "Air Jordan 1 Charcoal Gray",
    slug: "air-jordan-1-charcoal-gray",
    price: 4500,
    categorySlug: "basketball-shoes",
    description:
      "The Air Jordan 1 is the iconic sneaker that started it all. Premium leather upper and the iconic Wings logo.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777718181/imgi_34_air-jordan-1-low-eastside-golf-dv1759-448-release-date_lq9abc.jpg",
        altText:
          "Side view of the Air Jordan 1 in Charcoal Gray, showcasing its sleek silhouette and visible Air cushioning.",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777718110/imgi_18_air-jordan-1-low-eastside-golf-dv1759-448-release-date_sw3f3z.jpg",
        altText: "Sole view of the Air Jordan 1 in Charcoal Gray.",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777718060/imgi_22_air-jordan-1-low-eastside-golf-dv1759-448-release-date_fydghg.jpg",
        altText:
          "Top view of the Air Jordan 1 in Charcoal Gray, highlighting the lacing system and tongue branding.",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777718213/imgi_30_air-jordan-1-low-eastside-golf-dv1759-448-release-date_hjv2tl.jpg",
        altText:
          "Top view of the Air Jordan 1 in Charcoal Gray, highlighting the lacing system and tongue branding.",
      },
    ],
    sizes: [
      {
        size: "40",
        stock: 2,
      },
      {
        size: "39",
        stock: 7,
      },
    ],
    gender: "men",
  },
  {
    name: "Air Jordan 1 Obsidian",
    slug: "air-jordan-1-obsidian",
    price: 4500,
    description:
      "The Air Jordan 1 is the iconic sneaker that started it all. Premium leather upper and the iconic Wings logo.",
    brand: "Nike",
    categorySlug: "basketball-shoes",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Side view of the Air Jordan 1 in Obsidian colour",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726096/imgi_35_UNCLow_fu7yd5.jpg",
        altText: "Sole view of the Air Jordan 1 in Obsidian colour.",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726119/imgi_37_UNCLow3_u30qth.jpg",
        altText: "Bottom view of the Air Jordan 1 in Obsidian colour",
      },
    ],
    sizes: [
      {
        size: "40",
        stock: 2,
      },
      {
        size: "39",
        stock: 7,
      },
    ],
    gender: "men",
  },
];

const otherProducts: (InsertProduct & { categorySlug: string })[] = [
  // ---------------- RUNNING SHOES ----------------
  {
    name: "Nike Air Zoom Pegasus 40",
    slug: "nike-air-zoom-pegasus-40",
    price: 5200,
    categorySlug: "running-shoes",
    brand: "Nike",
    description: "Responsive running shoe with lightweight cushioning.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Pegasus view 1",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Pegasus view 2",
      },
    ],
    sizes: [
      { size: "39", stock: 5 },
      { size: "40", stock: 6 },
    ],
  },
  {
    name: "Adidas Ultraboost Light",
    slug: "adidas-ultraboost-light",
    price: 6800,
    categorySlug: "running-shoes",
    brand: "Adidas",
    description: "High-energy return running sneaker.",
    gender: "women",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Ultraboost 1",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Ultraboost 2",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
    ],
  },
  {
    name: "Puma Velocity Nitro 2",
    slug: "puma-velocity-nitro-2",
    price: 4800,
    categorySlug: "running-shoes",
    brand: "Puma",
    description: "Smooth ride with nitrogen-infused foam.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Puma Nitro",
      },
    ],
    sizes: [{ size: "40", stock: 5 }],
  },
  {
    name: "Asics Gel-Kayano 30",
    slug: "asics-gel-kayano-30",
    price: 7200,
    categorySlug: "running-shoes",
    brand: "Asics",
    description: "Stability running shoe with gel cushioning.",
    gender: "women",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Kayano",
      },
    ],
    sizes: [{ size: "39", stock: 6 }],
  },
  {
    name: "New Balance Fresh Foam X",
    slug: "new-balance-fresh-foam-x",
    price: 6100,
    categorySlug: "running-shoes",
    brand: "New Balance",
    description: "Ultra-soft foam for long-distance comfort.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "NB Foam",
      },
    ],
    sizes: [{ size: "41", stock: 3 }],
  },

  // ---------------- BASKETBALL ----------------
  {
    name: "Air Jordan 1 Retro High",
    slug: "air-jordan-1-retro-high",
    price: 7500,
    categorySlug: "basketball-shoes",
    brand: "Nike",
    description: "Iconic basketball sneaker.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Jordan 1",
      },
    ],
    sizes: [{ size: "42", stock: 4 }],
  },
  {
    name: "Nike LeBron Witness 7",
    slug: "nike-lebron-witness-7",
    price: 6900,
    categorySlug: "basketball-shoes",
    brand: "Nike",
    description: "Built for explosive performance.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "LeBron",
      },
    ],
    sizes: [{ size: "43", stock: 5 }],
  },
  {
    name: "Adidas Harden Vol 7",
    slug: "adidas-harden-vol-7",
    price: 7100,
    categorySlug: "basketball-shoes",
    brand: "Adidas",
    description: "James Harden signature shoe.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Harden",
      },
    ],
    sizes: [{ size: "41", stock: 6 }],
  },
  {
    name: "Puma MB.03",
    slug: "puma-mb-03",
    price: 6800,
    categorySlug: "basketball-shoes",
    brand: "Puma",
    description: "LaMelo Ball signature sneaker.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "MB03",
      },
    ],
    sizes: [{ size: "42", stock: 5 }],
  },
  {
    name: "Under Armour Curry Flow 10",
    slug: "ua-curry-flow-10",
    price: 7300,
    categorySlug: "basketball-shoes",
    brand: "Under Armour",
    description: "Stephen Curry signature shoe.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Curry",
      },
    ],
    sizes: [{ size: "41", stock: 4 }],
  },

  // ---------------- TRAINING ----------------
  {
    name: "Nike Metcon 9",
    slug: "nike-metcon-9",
    price: 6400,
    categorySlug: "training-shoes",
    brand: "Nike",
    description: "Durable gym training shoe.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Metcon",
      },
    ],
    sizes: [{ size: "42", stock: 6 }],
  },
  {
    name: "Reebok Nano X3",
    slug: "reebok-nano-x3",
    price: 5900,
    categorySlug: "training-shoes",
    brand: "Reebok",
    description: "Versatile cross-training shoe.",
    gender: "women",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Nano",
      },
    ],
    sizes: [{ size: "39", stock: 5 }],
  },
  {
    name: "Adidas Dropset Trainer",
    slug: "adidas-dropset-trainer",
    price: 5700,
    categorySlug: "training-shoes",
    brand: "Adidas",
    description: "Stable lifting shoe.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Dropset",
      },
    ],
    sizes: [{ size: "41", stock: 5 }],
  },
  {
    name: "Puma Fuse 2.0",
    slug: "puma-fuse-2",
    price: 5500,
    categorySlug: "training-shoes",
    brand: "Puma",
    description: "Strong grip and durability.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Fuse",
      },
    ],
    sizes: [{ size: "42", stock: 4 }],
  },
  {
    name: "UA TriBase Reign 5",
    slug: "ua-tribase-reign-5",
    price: 6000,
    categorySlug: "training-shoes",
    brand: "Under Armour",
    description: "Built for stability and strength.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "TriBase",
      },
    ],
    sizes: [{ size: "41", stock: 6 }],
  },

  // ---------------- LIFESTYLE ----------------
  {
    name: "Nike Air Force 1",
    slug: "nike-air-force-1",
    price: 6500,
    categorySlug: "lifestyle",
    brand: "Nike",
    description: "Classic everyday sneaker.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "AF1",
      },
    ],
    sizes: [{ size: "42", stock: 10 }],
  },
  {
    name: "Adidas Stan Smith",
    slug: "adidas-stan-smith",
    price: 5200,
    categorySlug: "lifestyle",
    brand: "Adidas",
    description: "Minimalist tennis-inspired sneaker.",
    gender: "women",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Stan Smith",
      },
    ],
    sizes: [{ size: "38", stock: 6 }],
  },
  {
    name: "Puma Suede Classic",
    slug: "puma-suede-classic",
    price: 4800,
    categorySlug: "lifestyle",
    brand: "Puma",
    description: "Retro suede sneaker.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Suede",
      },
    ],
    sizes: [{ size: "41", stock: 5 }],
  },
  {
    name: "New Balance 550",
    slug: "new-balance-550",
    price: 6200,
    categorySlug: "lifestyle",
    brand: "New Balance",
    description: "Vintage basketball-inspired design.",
    gender: "men",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "NB550",
      },
    ],
    sizes: [{ size: "42", stock: 5 }],
  },
  {
    name: "Vans Old Skool",
    slug: "vans-old-skool",
    price: 4500,
    categorySlug: "lifestyle",
    brand: "Vans",
    description: "Skate-inspired everyday sneaker.",
    gender: "unisex",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777726051/imgi_36_UNCLow2_oq7few.jpg",
        altText: "Vans",
      },
    ],
    sizes: [{ size: "40", stock: 8 }],
  },
];

const seedShoes = [...realProducts, ...otherProducts];

export default async function seed() {
  console.log("🌱 Seeding products...");

  try {
    await db.delete(products);

    // 1. Fetch all categories
    const allCategories = await db.select().from(categories);

    // 2. Create lookup map
    const categoryMap = new Map(allCategories.map((cat) => [cat.slug, cat.id]));

    // 3. Transform products
    const finalProducts: InsertProduct[] = seedShoes.map(
      ({ categorySlug, ...product }) => {
        const categoryId = categoryMap.get(categorySlug);

        if (!categoryId) {
          throw new Error(`❌ Category not found for slug: ${categorySlug}`);
        }

        return {
          ...product,
          categoryId,
        };
      },
    );

    // 4. Insert
    await db.insert(products).values(finalProducts);

    console.log("✅ Products seeded");
  } catch (error) {
    console.error("❌ Product seed failed:", error);
  }
}
