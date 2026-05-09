// @/db/seeds/products.ts

import { db } from "@/index"; // Path to your drizzle db instance
import { categories, InsertProduct, products } from "@/db/schemas"; // Import the products schema

const seedShoes: (InsertProduct & { categorySlug: string })[] = [
  {
    name: "Nike Air Jordan 3",
    slug: "nike-air-jordan-3",
    price: 5499,
    categorySlug: "sneakers",
    description:
      "The Air Jordan 3 is the iconic sneaker that started it all. Premium leather upper and the iconic Wings logo.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991112/imgi_2_653468192_18142298389494025_1447067660891353521_n_ddhuxd.webp",
        altText: "Rear view of the Air Jordan 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991101/imgi_3_662364953_18099137689999564_3191625143083664886_n_h0phld.webp",
        altText: "Top view of the Air Jordan 3.",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991075/imgi_4_641296922_18157480075437845_5715647547826937651_n_qdaddp.webp",
        altText:
          "Top view of the Air Jordan 3 in Charcoal Gray, highlighting the lacing system and tongue branding.",
      },
    ],
    sizes: [
      {
        size: "37",
        stock: 8,
      },
      {
        size: "39",
        stock: 7,
      },
      {
        size: "40",
        stock: 6,
      },
      {
        size: "41",
        stock: 9,
      },
    ],
    gender: "men",
  },
  {
    name: "JM Simprose Jacket",
    slug: "jm-simprose-jacket",
    price: 3499,
    categorySlug: "jackets",
    description:
      "The JM Simprose Jacket is a sleek everyday layer designed for comfort and style. Made from lightweight, durable fabric with a modern fit. Perfect for casual wear and cool-weather layering.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777991974/21ad232f-217b-4873-8576-f622c3751bd7.png",
        altText: "Front view of the JM Simprose Jacket",
      },
    ],
    sizes: [
      {
        size: "SM",
        stock: 2,
      },
      {
        size: "L",
        stock: 7,
      },
      {
        size: "XL",
        stock: 12,
      },
    ],
    gender: "men",
  },
  {
    name: "Golden State CA Graphic T-Shirt",
    slug: "golden-state-ca-graphic-tshirt",
    price: 599,
    categorySlug: "tshirts",
    description:
      "A bold white graphic tee featuring 'CA California' print with a modern streetwear vibe. Made from soft, breathable fabric for all-day comfort. Perfect for casual outfits and everyday wear.",
    brand: "Local",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992366/imgi_31_684151832_18556491037066504_7408789894184489841_n_mnajhn.webp",
        altText: "White Golden State CA graphic t-shirt front view",
      },
    ],
    sizes: [
      { size: "S", stock: 10 },
      { size: "M", stock: 15 },
      { size: "L", stock: 12 },
      { size: "XL", stock: 8 },
    ],
    gender: "men",
  },
  {
    name: "Dark Heart Split Art Graphic T-Shirt",
    slug: "dark-heart-split-art-graphic-tshirt",
    price: 599,
    categorySlug: "tshirts",
    description:
      "A bold black graphic tee featuring a split-face art design with vibrant color accents and 'Heart' print. Made from soft, breathable fabric for everyday comfort. Perfect for standout streetwear looks.",
    brand: "Local",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992530/imgi_52_684287693_18556491046066504_5339136104216363424_n_gkikwy.webp",
        altText:
          "Black t-shirt with colorful split face graphic and Heart text",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993013/imgi_52_671163427_18552799648066504_1486377443870978384_n_c5zwbl.webp",
        altText: "Close up of the heart split art graphic t-shirt",
      },
    ],
    sizes: [
      { size: "S", stock: 10 },
      { size: "M", stock: 14 },
      { size: "L", stock: 11 },
      { size: "XL", stock: 7 },
    ],
    gender: "men",
  },
  {
    name: "White Heart Split Art Graphic T-Shirt",
    slug: "white-heart-split-art-graphic-tshirt",
    price: 599,
    categorySlug: "tshirts",
    description:
      "A bold white graphic tee featuring a split-face art design with vibrant color accents and 'Heart' print. Made from soft, breathable fabric for everyday comfort. Perfect for standout streetwear looks.",
    brand: "Local",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992530/imgi_52_684287693_18556491046066504_5339136104216363424_n_gkikwy.webp",
        altText:
          "White t-shirt with colorful split face graphic and Heart text",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993370/imgi_54_670919832_18552619780066504_2308094157522197738_n_1_yktfig.webp",
        altText: "Close up of the heart split art graphic t-shirt",
      },
    ],
    sizes: [
      { size: "S", stock: 10 },
      { size: "M", stock: 14 },
      { size: "L", stock: 11 },
      { size: "XL", stock: 7 },
    ],
    gender: "men",
  },
  {
    name: "Abstract Color Face Graphic T-Shirt",
    slug: "abstract-color-face-graphic-tshirt",
    price: 599,
    categorySlug: "tshirts",
    description:
      "A bold black graphic tee featuring a vibrant abstract face design with artistic color splashes. Made from soft, breathable fabric for all-day comfort. Perfect for expressive streetwear and standout casual looks.",
    brand: "Local",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992631/imgi_53_684091150_18556491055066504_8429370676855758771_n_w3fnlz.webp",
        altText: "Black t-shirt with colorful abstract face graphic design",
      },
    ],
    sizes: [
      { size: "S", stock: 1 },
      { size: "M", stock: 6 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 6 },
    ],
    gender: "men",
  },
  {
    name: "Dark Niko Kadi Graphic T-Shirt",
    slug: "dark-niko-kadi-graphic-tshirt",
    price: 1499,
    categorySlug: "tshirts",
    description:
      "A bold black graphic tee featuring vibrant graffiti-style artwork for a modern streetwear look. Made from soft, breathable fabric for all-day comfort. Perfect for casual fits and standout everyday style.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992727/imgi_54_684250569_18556491061066504_8378018526485052068_n_nkispv.webp",
        altText: "Black t-shirt with colorful graffiti-style graphic design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993761/imgi_45_657592954_18549721198066504_9044102371773990183_n_rbqclj.webp",
        altText: "Young Mand dressed in the black Genz niko cadi t-shirt",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993839/imgi_41_658208484_18550140751066504_3215716991118193497_n_bxhbev.webp",
        altText:
          "Young Guy in the streets dressed in the black Genz niko cadi t-shirt",
      },
    ],
    sizes: [
      { size: "S", stock: 8 },
      { size: "M", stock: 14 },
      { size: "L", stock: 10 },
      { size: "XL", stock: 6 },
    ],
    gender: "men",
  },
  {
    name: "White Niko Kadi Graphic T-Shirt",
    slug: "white-niko-kadi-graphic-tshirt",
    price: 1499,
    categorySlug: "tshirts",
    description:
      "A bold white graphic tee featuring vibrant graffiti-style artwork for a modern streetwear look. Made from soft, breathable fabric for all-day comfort. Perfect for casual fits and standout everyday style.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993500/imgi_45_670620870_18552966625066504_1049849113773375027_n_pv0xse.webp",
        altText: "White t-shirt with colorful graffiti-style graphic design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993545/imgi_37_659589919_18553236925066504_7585413946016555255_n_ck4oz3.webp",
        altText: "Young Gen Z Niko Kadi T-shirt",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777993680/imgi_46_657937674_18549668581066504_7445162835051175387_n_dykdsx.webp",
        altText: "Young Lady Dressed in the Gen Z Niko Kadi T-shirt",
      },
    ],
    sizes: [
      { size: "S", stock: 3 },
      { size: "M", stock: 1 },
      { size: "L", stock: 7 },
      { size: "XL", stock: 6 },
    ],
    gender: "men",
  },
  {
    name: "Nike Graphic T-Shirt",
    slug: "nike-graphic-tshirt",
    price: 1999,
    categorySlug: "tshirts",
    description:
      "A bold black graphic tee featuring a modern statue-inspired design with vibrant color accents. Made from soft, breathable fabric for all-day comfort. Perfect for expressive streetwear and standout casual fits.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992828/imgi_39_681329858_18555147979066504_2873080453593655092_n_mdhqab.webp",
        altText: "Black and white t-shirt with colorful statue graphic design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777992917/imgi_37_657594756_18555303181066504_6203485777767969880_n_grrpzd.webp",
        altText: "Two guys wearing black and white nike t-shirts",
      },
    ],
    sizes: [
      { size: "S", stock: 9 },
      { size: "M", stock: 13 },
      { size: "L", stock: 11 },
      { size: "XL", stock: 7 },
    ],
    gender: "men",
  },
  {
    name: "New Balance 530 Grey Matter",
    slug: "new-balance-530-grey-matter",
    price: 3999,
    categorySlug: "sneakers",
    description:
      "The New Balance 530 Grey Matter blends classic running style with modern comfort. Built with breathable mesh and supportive cushioning for all-day wear. Perfect for casual outfits and everyday versatility.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777994033/6540c9c4-19cd-484b-9537-c84085d5fd4b.png",
        altText: "Side view of the New Balance 530 Grey Matter",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777994472/afa780de-0280-4b57-8c3c-000d61c94810.png",
        altText: "Right Side view of the New Balance 530 Grey Matter",
      },
    ],
    sizes: [
      { size: "39", stock: 12 },
      { size: "40", stock: 6 },
      { size: "41", stock: 0 },
      { size: "42", stock: 7 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Sacai LDWaffle Summit White",
    slug: "nike-sacai-ldwaffle-summit-white",
    price: 3999,
    categorySlug: "sneakers",
    description:
      "The New Balance 530 Grey Matter blends classic running style with modern comfort. Built with breathable mesh and supportive cushioning for all-day wear. Perfect for casual outfits and everyday versatility.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777994788/7498ea58-1231-4d8e-91be-bc60cd7347a0.png",
        altText: "Front view of the Nike Sacai LDWaffle Summit White",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777994711/09f25fa8-88cf-4a60-a5ee-a234deaedc7e.png",
        altText: "Rear view of the Nike Sacai LDWaffle Summit White",
      },
    ],
    sizes: [
      { size: "39", stock: 12 },
      { size: "40", stock: 6 },
      { size: "41", stock: 0 },
      { size: "42", stock: 7 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Max Plus TN",
    slug: "nike-air-max-plus-tn",
    price: 3999,
    categorySlug: "sneakers",
    description:
      "The Nike Air Max Plus TN blends classic running style with modern comfort. Built with breathable mesh and supportive cushioning for all-day wear. Perfect for casual outfits and everyday versatility.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777995038/09f00191-53c0-4072-a08b-8bed6228a4dd.png",
        altText: "Top view of the Nike Air Max Plus TN",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1777995359/b1d043f9-11b6-4ce8-8555-9c29abfa1064.png",
        altText: "Wide angle shot Nike Air Max Plus TN",
      },
    ],
    sizes: [
      { size: "39", stock: 1 },
      { size: "40", stock: 2 },
      { size: "41", stock: 4 },
      { size: "42", stock: 7 },
    ],
    gender: "women",
  },
];

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
