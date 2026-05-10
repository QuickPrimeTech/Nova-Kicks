// @/db/seeds/products.ts

import { db } from "@/index"; // Path to your drizzle db instance
import { categories, InsertProduct, products } from "@/db/schemas"; // Import the products schema

const seedShoes: (InsertProduct & { categorySlug: string })[] = [
  // ─── Lifestyle Shoes (10) ───
  {
    name: "Nike Air Force 1 '07",
    slug: "nike-air-force-1-07",
    price: 2299,
    categorySlug: "lifestyle-shoes",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390013/9a43d107-76d7-4077-9bf6-a0136bbe7783.png",
        altText: "Front view of the Nike Air Force 1 '07 in white",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778389704/imgi_6_AIR_FORCE_1_07_adh2cp.png",
        altText: "Side profile of the Nike Air Force 1 '07 showing the midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778389767/f88e4a04-2ad6-4823-a6dd-1d97f9222e91.png",
        altText: "Sole view highlighting the Air Force 1 branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778389864/d2a6b1ae-b9fd-40a9-9662-4db59f1e6e26.png",
        altText: "Top-down view of the Nike Air Force 1 '07 lacing system",
      },
    ],
    sizes: [
      { size: "38", stock: 2 },
      { size: "39", stock: 8 },
      { size: "40", stock: 7 },
      { size: "41", stock: 10 },
      { size: "42", stock: 6 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Dunk Low Retro",
    slug: "nike-dunk-low-retro",
    price: 2499,
    categorySlug: "lifestyle-shoes",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather and a classic design.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390191/22aa8c80-572e-4eaf-9350-6be110105dc4.png",
        altText: "Front view of the Nike Dunk Low Retro",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390296/6f9b184d-fabf-440e-9789-c51db6fab7b0.png",
        altText: "Side view showing the Nike Dunk Low Retro color blocking",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390361/ddeb34a9-f219-472b-8feb-2bb7f143ff86.png",
        altText: "Back view of the Nike Dunk Low Retro heel tab",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390414/7470143d-0115-4ca1-bd0d-3558f5c6b83a.png",
        altText: "Sole view of the Nike Dunk Low Retro traction pattern",
      },
    ],
    sizes: [
      { size: "38", stock: 1 },
      { size: "39", stock: 4 },
      { size: "40", stock: 2 },
      { size: "41", stock: 3 },
      { size: "42", stock: 1 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Max 90",
    slug: "nike-air-max-90",
    price: 2699,
    categorySlug: "lifestyle-shoes",
    description:
      "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390583/29b7f6b9-1323-4b1d-86af-e5c9759ceeca.png",
        altText: "Front view of the Nike Air Max 90",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390654/f775225a-368c-43fe-a91c-a444b74478bc.png",
        altText: "Side view showcasing the visible Air Max unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390726/ca9721c5-0671-4e79-a10a-2b317fec6906.png",
        altText: "Angled view of the Nike Air Max 90 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390785/c5a296bc-bb33-4f72-bb83-1b3ddc591dd7.png",
        altText: "Detail shot of the Air Max 90 mudguard and overlays",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 14 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "men",
  },
  {
    name: "Nike Blazer Mid '77",
    slug: "nike-blazer-mid-77",
    price: 2199,
    categorySlug: "lifestyle-shoes",
    description:
      "The Nike Blazer Mid '77 harnesses the old-school look of Nike b-ball with a vintage midsole finish, making it look like you've been saving them for years.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778390996/389b68bb-119c-4eeb-8520-15d85002ac46.png",
        altText: "Front view of the Nike Blazer Mid '77",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391043/9ca228f6-8d18-4587-a5a2-4ccef6612ab8.png",
        altText: "Side view of the suede and leather upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391092/8d96c7d4-2b16-4014-a1ab-664ec3e51011.png",
        altText: "Back view showing the vintage heel branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391151/cc47b118-4bbc-4720-b109-0ffe5b5df527.png",
        altText: "Close-up of the Blazer Mid '77 oversized swoosh",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "women",
  },
  {
    name: "Nike GP Challenge Pro PRM",
    slug: "nike-gp-challenge-pro-prm",
    price: 1799,
    categorySlug: "lifestyle-shoes",
    description:
      "The Nike GP Challenge Pro PRM is a retro basketball style that looks like the '80s but is built for today. The durable leather upper and classic cupsole design offer comfort and timeless appeal.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391439/35404653-e994-409c-8f4c-d1db84e58537.png",
        altText: "Front view of the Nike GP Challenge Pro PRM",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391490/8152bc0a-b741-47a4-bc07-a833a4a58179.png",
        altText: "Side profile of the Court Vision Low leather upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391557/23dd3aee-8809-469c-9d2d-29f78b9dd1b9.png",
        altText: "Heel view with Nike branding detail",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391644/e73c990d-ddec-4d57-96d7-56b521bfa1bc.png",
        altText: "Top-down view of the Court Vision Low lacing",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Nike Air Max 1",
    slug: "nike-air-max-1",
    price: 2899,
    categorySlug: "lifestyle-shoes",
    description:
      "Meet the leader of the pack. The Nike Air Max 1 draws inspiration from architectural greatness and brings an icon to the streets with its visible Air cushioning and classic running silhouette.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391777/23cf69c7-bf0c-44bf-9f37-f8e7e5d088ba.png",
        altText: "Front view of the Nike Air Max 1",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391839/d263e1e3-023c-437d-b29a-a05885e04192.png",
        altText: "Side view highlighting the Air Max 1 window",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391905/9e893a1d-9ca9-4b34-8c44-db6ac41fa184.png",
        altText: "Angled view of the mesh and suede upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778391967/8714878e-3624-4554-a658-0479d6bd0f2e.png",
        altText: "Detail shot of the Air Max 1 mudguard and swoosh",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 10 },
      { size: "41", stock: 7 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "New Balance 550 White Green",
    slug: "new-balance-550-white-green",
    price: 2299,
    categorySlug: "lifestyle-shoes",
    description:
      "Originally released in the late '80s, the New Balance 550 returns with a clean low-top silhouette and premium leather construction. The retro basketball-inspired design blends vintage style with everyday versatility.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392584/a561e853-848d-44bb-a3fd-1665380596ed.png",
        altText: "Front view of the New Balance 550 White Green",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392613/419d6b0a-8ddf-49cd-acde-b331b66b2005.png",
        altText: "Side view showing the retro basketball silhouette",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392636/624214c9-98f4-451e-b7df-c2096cebca53.png",
        altText: "Back heel view with New Balance branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392664/7667a2d3-abaa-4ea1-b917-f5b9e31497da.png",
        altText: "Top-down view of the leather upper and tongue",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "New Balance 530 Silver Cream",
    slug: "new-balance-530-silver-cream",
    price: 2199,
    categorySlug: "lifestyle-shoes",
    description:
      "The New Balance 530 combines retro running aesthetics with modern comfort. Featuring ABZORB cushioning and breathable mesh overlays, it delivers a sporty yet stylish everyday look.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392829/76f47db0-1701-425a-826f-3f85556f7368.png",
        altText: "Front view of the New Balance 530 Silver Cream",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392857/9a2e3c10-3035-4011-9bc0-9f33f1d5f5e6.png",
        altText: "Side profile showing mesh and synthetic overlays",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392880/65f36eda-5448-4ea5-a8e4-912f9196a3d4.png",
        altText: "Heel view with ABZORB cushioning detail",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778392880/65f36eda-5448-4ea5-a8e4-912f9196a3d4.png",
        altText: "Top-down view of the New Balance 530",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 10 },
      { size: "41", stock: 9 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Adidas Samba OG",
    slug: "adidas-samba-og",
    price: 2099,
    categorySlug: "lifestyle-shoes",
    description:
      "The Adidas Samba OG keeps its legendary indoor football roots alive with a sleek leather upper, suede overlays and gum rubber outsole. A timeless sneaker that transitions effortlessly into streetwear.",
    brand: "Adidas",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393476/imgi_106_Samba_OG_Shoes_Black_B75807_04_standard_poakmz.jpg",
        altText: "Front view of the Adidas Samba OG",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393516/imgi_104_Samba_OG_Shoes_Black_B75807_01_standard_ebensd.jpg",
        altText: "Side profile showing the suede toe overlay",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393565/imgi_124_Samba_OG_Shoes_Black_B75807_05_standard_jnizyk.jpg",
        altText: "Back heel view with Adidas branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393660/imgi_127_Samba_OG_Shoes_Black_B75807_02_standard_hover_uhgtfx.jpg",
        altText: "Top-down view of the Samba OG tongue and laces",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 11 },
      { size: "40", stock: 12 },
      { size: "41", stock: 10 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Puma Palermo Vintage",
    slug: "puma-palermo-vintage",
    price: 1899,
    categorySlug: "lifestyle-shoes",
    description:
      "Inspired by classic terrace culture, the Puma Palermo Vintage features a suede upper, signature Formstrip branding and retro gum sole. Built for effortless casual style and all-day comfort.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393765/d8ad297f-bbc5-4c5d-b321-dd2dcffe0530.png",
        altText: "Front view of the Puma Palermo Vintage",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393790/bd937ead-8112-4f6a-a841-d45f240e4c35.png",
        altText: "Side profile showing the suede upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393825/0dca1b1e-f79e-4f42-ae2b-78e2cedd3c48.png",
        altText: "Back heel view with Puma branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778393838/a72b13bb-b2ee-4ad3-9b0f-38868121d882.png",
        altText: "Top-down view of the Palermo Vintage",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 10 },
      { size: "40", stock: 9 },
      { size: "41", stock: 7 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Converse Chuck 70 High",
    slug: "converse-chuck-70-high",
    price: 1799,
    categorySlug: "lifestyle-shoes",
    description:
      "The Converse Chuck 70 High elevates the iconic basketball silhouette with premium canvas, enhanced cushioning and vintage-inspired details. A timeless staple for everyday streetwear.",
    brand: "Converse",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394176/4936598c-311e-48a6-957c-a18d24efc088.png",
        altText: "Front view of the Converse Chuck 70 High",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394250/54499d75-54ef-42b4-a609-8f54f1533157.png",
        altText: "Side profile showing the canvas upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394309/0a18b526-b98a-4f67-a69c-79ae80344204.png",
        altText: "Back heel view with vintage license plate",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394382/9eacfd7f-ab92-413a-b426-a6bfe0391392.png",
        altText: "Top-down view of the Chuck 70 lacing system",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 13 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Vans Old Skool Black White",
    slug: "vans-old-skool-black-white",
    price: 1699,
    categorySlug: "lifestyle-shoes",
    description:
      "The Vans Old Skool combines skate heritage with timeless street style. Featuring durable suede and canvas uppers with the iconic side stripe, it remains one of the most versatile sneakers ever made.",
    brand: "Vans",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394654/711bffb1-e4d4-4951-bfd8-9b3d6a822fb5.png",
        altText: "Front view of the Vans Old Skool Black White",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394723/6d3bdc75-50eb-464a-ade2-94ad37064caf.png",
        altText: "Side view showing the iconic Vans side stripe",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394808/f6402b96-9156-44ac-8ec2-995a012a092c.png",
        altText: "Back heel view of the Vans Old Skool",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778394933/23e7cd23-e48e-42d5-81a8-aef7c59ec2c3.png",
        altText: "Top-down view of the Vans Old Skool laces",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 12 },
      { size: "40", stock: 10 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },

  // ─── Everyday Shoes (10) ───
  {
    name: "Adidas Lite Racer Adapt 7.0",
    slug: "adidas-lite-racer-adapt-7",
    price: 1299,
    categorySlug: "everyday-shoes",
    description:
      "The Adidas Lite Racer Adapt 7.0 delivers slip-on convenience and lightweight comfort for daily wear. Its soft Cloudfoam cushioning and breathable upper make every step feel effortless.",
    brand: "Adidas",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397510/imgi_90_Lite_Racer_Adapt_7.0_Shoes_Black_IE6327_04_standard_jqm0ji.jpg",
        altText: "Front view of the Adidas Lite Racer Adapt 7.0",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397557/imgi_17_Lite_Racer_Adapt_7.0_Shoes_Black_IE6327_06_standard_jhxhix.jpg",
        altText: "Side view showing the Cloudfoam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397577/imgi_123_Lite_Racer_Adapt_7.0_Shoes_Black_IE6327_41_detail_csq9la.jpg",
        altText: "Back heel view of the Lite Racer Adapt 7.0",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397585/imgi_103_Lite_Racer_Adapt_7.0_Shoes_Black_IE6327_02_standard_hover_p3orb8.jpg",
        altText: "Top-down view of the slip-on upper",
      },
    ],
    sizes: [
      { size: "38", stock: 11 },
      { size: "39", stock: 13 },
      { size: "40", stock: 10 },
      { size: "41", stock: 7 },
      { size: "42", stock: 5 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "New Balance Fresh Foam Arishi V4",
    slug: "new-balance-fresh-foam-arishi-v4",
    price: 1599,
    categorySlug: "everyday-shoes",
    description:
      "The New Balance Fresh Foam Arishi V4 combines sporty style with plush cushioning. Its lightweight construction and Fresh Foam midsole make it ideal for everyday comfort and casual activity.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397753/a1109146-b005-4b02-a8be-2a9ca2ed3586.png",
        altText: "Front view of the New Balance Fresh Foam Arishi V4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397786/0e7e8dbb-eb1d-406d-b04e-a44259d5beb5.png",
        altText: "Side view showing the Fresh Foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397843/4a8eb56c-e930-4a1b-b0dd-ae3da7237392.png",
        altText: "Angled view of the breathable mesh upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778397831/11a9af06-02f6-4888-b9b3-602b3d9b5ea6.png",
        altText: "Top-down view with New Balance branding",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Puma Anzarun Lite",
    slug: "puma-anzarun-lite",
    price: 1199,
    categorySlug: "everyday-shoes",
    description:
      "The Puma Anzarun Lite is built for everyday versatility. A breathable mesh upper and lightweight IMEVA cushioning provide lasting comfort throughout the day.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398198/5088458c-6fb2-4cb8-95c6-dc16ae251811.png",
        altText: "Front view of the Puma Anzarun Lite",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398245/ac07c018-1de5-410a-956a-d7598bfa7c70.png",
        altText: "Side profile showing the lightweight cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398258/34106b2b-3ea1-4a26-8ba5-4e394620749c.png",
        altText: "Back heel view of the Puma Anzarun Lite",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398310/79170d78-338c-4606-b3f6-da18cc1b34bd.png",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 12 },
      { size: "40", stock: 10 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 2 },
    ],
    gender: "men",
  },
  {
    name: "Nike Air Winflo 11",
    slug: "nike-air-winflo-11",
    price: 1799,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Air Winflo 11 offers responsive cushioning and breathable comfort for everyday movement. Its balanced support and sleek design make it great for commuting, walking, and casual wear.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398477/829e852e-12ac-4914-85a8-3b48d84056af.png",
        altText: "Front view of the Nike Air Winflo 11",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398535/f53b12ef-c353-46ad-b893-2129dea60c36.png",
        altText: "Side view showing the Air cushioning unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398615/9015a431-3b35-424b-8670-bfc36387b072.png",
        altText: "Back heel view of the Nike Air Winflo 11",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398762/58f682aa-95c3-4965-b1e9-5de347a5b16f.png",
        altText: "Top-down view of the mesh upper and laces",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 13 },
      { size: "41", stock: 11 },
      { size: "42", stock: 8 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Nike Initiator",
    slug: "nike-initiator",
    price: 1399,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Initiator blends retro running aesthetics with dependable everyday comfort. Supportive overlays and lightweight cushioning make it a reliable option for daily wear.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778398942/59ae2d85-3bf5-4c7b-974c-5c98de793d2e.png",
        altText: "Front view of the Nike Initiator",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399012/6de6a15a-55e2-43da-b44c-c614e2c29d95.png",
        altText: "Side view showing the supportive overlays",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399105/700ca50d-d009-4e1e-a600-b0e2fefafe58.png",
        altText: "Back view of the Nike Initiator heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399337/1c18f628-4d2f-4740-b0bf-ea1cd677113c.png",
        altText: "Top-down view of the upper and tongue",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 10 },
      { size: "40", stock: 11 },
      { size: "41", stock: 9 },
      { size: "42", stock: 5 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Reebok Energen Lite",
    slug: "reebok-energen-lite",
    price: 1299,
    categorySlug: "everyday-shoes",
    description:
      "The Reebok Energen Lite delivers lightweight cushioning and flexible comfort for everyday routines. Its breathable design makes it ideal for walking, errands, and casual use.",
    brand: "Reebok",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399520/imgi_72_766012-8790203_toa3hu.jpg",
        altText: "Front view of the Reebok Energen Lite",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399630/imgi_69_766012-8790204_x1bfrq.jpg",
        altText: "Side view showing the cushioned foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399715/imgi_71_766012-8790207_s0rn52.jpg",
        altText: "Back heel view of the Reebok Energen Lite",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778399810/imgi_70_766012-8790206_zsdwpf.jpg",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 10 },
      { size: "39", stock: 12 },
      { size: "40", stock: 9 },
      { size: "41", stock: 7 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike MC Trainer 3",
    slug: "nike-mc-trainer-3",
    price: 1499,
    categorySlug: "everyday-shoes",
    description:
      "The Nike MC Trainer 3 combines gym-ready durability with everyday comfort. Stable support and soft cushioning make it suitable for training sessions and daily activities alike.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418502/1ded2222-53ed-43af-967d-ade143c391d7.png",
        altText: "Front view of the Nike MC Trainer 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418474/6b96e0b8-8416-4dda-9241-7d527792c80d.png",
        altText: "Side view showing the supportive midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418488/da21c333-ce13-4839-9602-e8ab24bc3029.png",
        altText: "Bottom view",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 12 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "men",
  },
  {
    name: "Asics Jolt 4",
    slug: "asics-jolt-4",
    price: 1399,
    categorySlug: "everyday-shoes",
    description:
      "The Asics Jolt 4 provides reliable cushioning and durability for daily comfort. Inspired by classic running styles, it offers a supportive feel for everyday movement.",
    brand: "Asics",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418138/ec2c3af5-4b3d-4f91-a65e-57e949e4b7b6.png",
        altText: "Front view of the Asics Jolt 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418069/f5915ea8-0e99-4e86-999a-c975d78a707b.png",
        altText: "Side view showing the cushioned sole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418167/037c37cc-89e7-4805-9751-d0246139b504.png",
        altText: "Back heel view of the Asics Jolt 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778418110/ea3678a2-a5ed-4581-888b-8eedd8b123e2.png",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 9 },
      { size: "40", stock: 13 },
      { size: "41", stock: 11 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },

  // ─── Basketball Shoes (10) ───
  {
    name: "Nike Air Jordan 1 Mid",
    slug: "nike-air-jordan-1-mid",
    price: 3499,
    categorySlug: "basketball-shoes",
    description:
      "The Air Jordan 1 Mid brings full-court style and premium comfort. The iconic design features a leather and synthetic upper with Air-Sole cushioning for lightweight impact protection on and off the court.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401024/e039525f-2825-41e2-aa0e-cd9a3484102c.png",
        altText: "Front view of the Air Jordan 1 Mid",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401184/9c4b105b-7f63-45cb-aa94-239e92d95df1.png",
        altText: "Side view showing the iconic Jordan 1 silhouette",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401231/0d0ebfe9-7147-4a7d-9cc3-687ab960f595.png",
        altText: "Back view with Air Jordan Wings logo",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401277/38b818a6-df4d-41dc-a3fe-5ad669f669c0.png",
        altText: "Top-down view of the lacing and tongue",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike KD 17",
    slug: "nike-kd-17",
    price: 4599,
    categorySlug: "basketball-shoes",
    description:
      "The KD 17 is built for versatile players who need speed and precision. A responsive Zoom Air setup and supportive fit help you cut, shoot, and dominate on both ends of the floor.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401533/a73293b0-8ba4-4ee8-b484-fb54e48a82d7.png",
        altText: "Front view of the Nike KD 17",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401567/6c022266-1a60-45bb-9e4d-40794f1f2e58.png",
        altText: "Side view showing the KD 17 traction pattern",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401603/7fe9a25b-5262-4443-bc47-1f5716a79598.png",
        altText: "Back view with Durant branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401632/531aadce-3d98-45e2-973e-cfa06c8da5cb.png",
        altText: "Top-down view of the lacing and tongue detail",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 0 },
      { size: "40", stock: 4 },
      { size: "41", stock: 2 },
      { size: "42", stock: 0 },
      { size: "43", stock: 3 },
    ],
    gender: "men",
  },
  {
    name: "Nike Giannis Immortality 3",
    slug: "nike-giannis-immortality-3",
    price: 2999,
    categorySlug: "basketball-shoes",
    description:
      "The Giannis Immortality 3 channels the Greek Freak's relentless energy. Lightweight foam cushioning and a secure fit help you play with speed and power on the court.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401870/46b3e5a3-27f7-45e4-bdfb-938dc587b2c5.png",
        altText: "Front view of the Giannis Immortality 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778402020/708cd9fc-e3e4-4728-9b37-fe5bfa116aae.png",
        altText: "Side view showing the Immortality 3 midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401914/00f7d3b7-21c4-49a4-9fa9-3ce735028200.png",
        altText: "Angled view of the lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778401958/7bdbafbe-7666-4824-817c-7677b0017f40.png",
        altText: "Heel view with Giannis signature detail",
      },
    ],
    sizes: [
      { size: "38", stock: 1 },
      { size: "39", stock: 3 },
      { size: "40", stock: 4 },
      { size: "41", stock: 1 },
      { size: "42", stock: 0 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Adidas Harden Stepback 3",
    slug: "adidas-harden-stepback-3",
    price: 2899,
    categorySlug: "basketball-shoes",
    description:
      "The Adidas Harden Stepback 3 is inspired by James Harden's creative offensive game. Lightweight Bounce cushioning and a supportive upper help you stay quick and confident on the court.",
    brand: "Adidas",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778402410/imgi_75_Harden_Volume_10_Shoes_Black_JR1598_bobrf8.jpg",
        altText: "Front view of the Adidas Harden Stepback 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778402445/imgi_83_Harden_Volume_10_Shoes_Black_JR1598_01_00_standard_uuvefq.jpg",
        altText: "Side view showing the Bounce midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778402470/imgi_80_Harden_Volume_10_Shoes_Black_JR1598_42_detail_kstemj.jpg",
        altText: "Back heel view with Harden branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778402484/imgi_91_Harden_Volume_10_Shoes_Black_JR1598_02_standard_wiwcf0.jpg",
        altText: "Top-down view of the supportive upper",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 0 },
      { size: "43", stock: 5 },
    ],
    gender: "men",
  },
  {
    name: "Curry Splash 24 Suede",
    slug: "curry-splash-24-suede",
    price: 3199,
    categorySlug: "basketball-shoes",
    description:
      "The Curry Splash 24 brings Stephen Curry's signature energy to every game. Responsive cushioning and grippy traction help you move quickly and shoot with confidence.",
    brand: "Under Armour",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778404930/12e9401b-b089-40e2-97ee-db03599ffa57.png",
        altText: "Front view of the Curry Splash 24 Suede",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778404813/8159b5e3-0eb0-4f4b-96d8-b746dc862d68.png",
        altText: "Side view showing the responsive cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778404710/0c1da5fb-87fb-41d2-848e-61c03590aa6a.png",
        altText: "Back heel view with Curry branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778404655/1af25635-9ee5-4342-8f63-a709f8f7f04f.png",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 12 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "men",
  },
  {
    name: "MB.03 Lo Team",
    slug: "mb-03-lo-team",
    price: 3799,
    categorySlug: "basketball-shoes",
    description:
      "The MB.03 Lo Team is LaMelo Ball's bold signature basketball shoe built for speed and creativity. NITRO foam cushioning and a lightweight upper provide explosive comfort on the court.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778405163/20e07d3a-6356-45e7-8a4e-0e2f7858577d.png",
        altText: "Front view of the MB.03 Lo Team",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778405207/31d29d46-19aa-46a4-913f-429adcdff809.png",
        altText: "Side view showing the NITRO foam cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778405391/48076ef0-9ca0-431a-8a01-cbe54708149d.png",
        altText: "Back heel view with LaMelo branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778405346/62bed252-7191-4cb5-a929-4607cad0c6f3.png",
        altText: "Top-down view of the MB.03 upper",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
      { size: "40", stock: 9 },
      { size: "41", stock: 11 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Anta KT Splash 6",
    slug: "anta-kt-splash-6",
    price: 2599,
    categorySlug: "basketball-shoes",
    description:
      "The Anta KT Splash 6 combines lightweight comfort with reliable court traction. Inspired by Klay Thompson's smooth shooting style, it's built for quick movement and stability.",
    brand: "Anta",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406123/imgi_31_IMG_7226_gpzm0v.jpg",
        altText: "Front view of the Anta KT Splash 6",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406164/imgi_103_IMG_7230_yrzic7.jpg",
        altText: "Side view showing the cushioned midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406150/imgi_73_IMG_7227_glgqd5.jpg",
        altText: "Bottom view with KT branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406137/imgi_99_IMG_7229_kaifrp.jpg",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "men",
  },
  {
    name: "Li-Ning Wade Shadow 5",
    slug: "li-ning-wade-shadow-5",
    price: 3399,
    categorySlug: "basketball-shoes",
    description:
      "The Wade Shadow 5 blends modern cushioning with sleek performance styling. Designed for dynamic players, it offers lightweight responsiveness and excellent court feel.",
    brand: "Li-Ning",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406377/3266c4ee-68e6-4d7f-8321-70a5a9870eef.png",
        altText: "Front view of the Li-Ning Wade Shadow 5",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406391/ea588fe1-e269-4444-8603-972414fdcaf5.png",
        altText: "Side view showing the responsive cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406406/f50734b3-3e10-45d4-8ef3-f302a4e36d74.png",
        altText: "Back heel view with Wade branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406420/0b9b71c0-c7e5-461d-9318-8594caa4cfc7.png",
        altText: "Top-down view of the Wade Shadow 5 upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 0 },
      { size: "40", stock: 1 },
      { size: "41", stock: 3 },
      { size: "42", stock: 0 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Reebok Question Mid",
    slug: "reebok-question-mid",
    price: 3599,
    categorySlug: "basketball-shoes",
    description:
      "The Reebok Question Mid brings Allen Iverson's iconic style back to the hardwood. Premium materials and Hexalite cushioning deliver classic comfort and standout looks.",
    brand: "Reebok",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406626/imgi_65_784190-9114742_jnya3n.jpg",
        altText: "Front view of the Reebok Question Mid",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406716/imgi_72_784190-9114741_mrskjn.jpg",
        altText: "Side view showing the Hexalite cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406763/imgi_74_784190-9114743_dxwher.jpg",
        altText: "Back heel view with Reebok branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778406839/imgi_67_784190-9114744_r0ztix.jpg",
        altText: "Bottom view of the premium leather upper",
      },
    ],
    sizes: [
      { size: "38", stock: 3 },
      { size: "39", stock: 6 },
      { size: "40", stock: 9 },
      { size: "41", stock: 11 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "men",
  },

  // ─── Running Shoes (10) ───
  {
    name: "Nike Pegasus 41",
    slug: "nike-pegasus-41",
    price: 3499,
    categorySlug: "running-shoes",
    description:
      "The Nike Pegasus 41 continues its legacy as the ultimate everyday running shoe. ReactX foam and Air Zoom units deliver responsive cushioning for daily miles, tempo runs, and everything in between.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778407260/bf93b16f-9d4c-4e73-85c9-5db7e2f1c79a.png",
        altText: "Front view of the Nike Pegasus 41",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778407296/f0ca97fc-2446-491d-8a34-3f968ce92206.png",
        altText: "Side view showing the ReactX foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778407350/944e4433-0704-47bb-974a-7756a8da99b0.png",
        altText: "Back view of the Pegasus 41 engineered mesh",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778407421/c0e93ad7-4726-40aa-8494-aa508f8f35f0.png",
        altText: "Heel view with Pegasus branding detail",
      },
    ],
    sizes: [
      { size: "38", stock: 3 },
      { size: "39", stock: 0 },
      { size: "40", stock: 6 },
      { size: "41", stock: 2 },
      { size: "42", stock: 4 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Asics Gel-Nimbus 26",
    slug: "asics-gel-nimbus-26",
    price: 4699,
    categorySlug: "running-shoes",
    description:
      "The Asics Gel-Nimbus 26 delivers plush comfort for long-distance running. FF BLAST PLUS ECO cushioning and PureGEL technology provide soft landings and smooth transitions.",
    brand: "Asics",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408475/e5dcb400-1dd0-4dd4-8048-447962e1482d.png",
        altText: "Front view of the Asics Gel-Nimbus 26",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408424/2a949f08-947a-4af7-ad69-8cd749393da4.png",
        altText: "Side view showing the PureGEL cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408385/72ac560b-fb0f-47ff-b789-bb145ed0731d.png",
        altText: "Back heel view of the Gel-Nimbus 26",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408312/24b32f10-52c9-445f-bbf3-5df60637b4c0.png",
        altText: "Top-down view of the engineered knit upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 0 },
      { size: "41", stock: 1 },
      { size: "42", stock: 3 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "New Balance Fresh Foam X 1080v13",
    slug: "new-balance-fresh-foam-x-1080v13",
    price: 4499,
    categorySlug: "running-shoes",
    description:
      "The New Balance Fresh Foam X 1080v13 combines premium cushioning with a smooth ride. Fresh Foam X technology and a breathable upper make it ideal for daily mileage.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000173/run-1080v13-01.jpg",
        altText: "Front view of the New Balance Fresh Foam X 1080v13",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000174/run-1080v13-02.jpg",
        altText: "Side view showing the Fresh Foam X cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000175/run-1080v13-03.jpg",
        altText: "Back heel view of the 1080v13",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000176/run-1080v13-04.jpg",
        altText: "Top-down view of the engineered mesh upper",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Puma Deviate Nitro 3",
    slug: "puma-deviate-nitro-3",
    price: 3999,
    categorySlug: "running-shoes",
    description:
      "The Puma Deviate Nitro 3 is built for speed and efficiency. NITRO foam and a carbon-composite plate provide lightweight propulsion for tempo runs and race day.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408773/39227111-978a-4ef4-9854-25836bf0a2aa.png",
        altText: "Front view of the Puma Deviate Nitro 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408838/5f891fe5-d964-41d3-a7e6-771f18eb65b1.png",
        altText: "Side view showing the NITRO foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408878/b898a91b-3ada-4c82-b711-8c433740dd38.png",
        altText: "Back heel view of the Deviate Nitro 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778408922/6c3f129b-d11f-459f-af77-0a68d34d6895.png",
        altText: "Top-down view of the lightweight racing upper",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Hoka Clifton 9",
    slug: "hoka-clifton-9",
    price: 4899,
    categorySlug: "running-shoes",
    description:
      "The Hoka Clifton 9 is known for its lightweight cushioning and smooth ride. A plush CMEVA midsole and rocker geometry make it a favorite for daily training and recovery runs.",
    brand: "Hoka",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409315/896fa06a-2cbf-49ed-8ab1-23d460741e68.png",
        altText: "Front view of the Hoka Clifton 9",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409366/55d43d0d-185a-4f39-ae62-1ba546df92b6.png",
        altText: "Side view showing the thick cushioned midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409408/6e6d7b20-1caa-4df3-948f-5a4776b4f89e.png",
        altText: "Back heel view of the Clifton 9",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409447/465d8bfa-2991-4a8e-ab2d-eabbbed13a76.png",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 2 },
      { size: "39", stock: 8 },
      { size: "40", stock: 0 },
      { size: "41", stock: 4 },
      { size: "42", stock: 2 },
      { size: "43", stock: 1 },
    ],
    gender: "men",
  },
  {
    name: "Brooks Ghost 16",
    slug: "brooks-ghost-16",
    price: 4299,
    categorySlug: "running-shoes",
    description:
      "The Brooks Ghost 16 offers smooth cushioning and reliable comfort for runners of all levels. DNA Loft cushioning provides soft landings and balanced responsiveness.",
    brand: "Brooks",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409654/cd413dde-f0ac-42cf-8ed8-de3c258d2dae.png",
        altText: "Side view showing the DNA Loft cushioning",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 13 },
      { size: "41", stock: 11 },
      { size: "42", stock: 8 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Saucony Endorphin Speed 5",
    slug: "saucony-endorphin-speed-5",
    price: 4599,
    categorySlug: "running-shoes",
    description:
      "The Endorphin Speed 5 blends speed and comfort with PWRRUN PB foam and a nylon plate. It's designed for fast training sessions and race-day performance.",
    brand: "Saucony",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409912/c33af7da-0b0a-48e5-8b51-0d47665d7007.png",
        altText: "Front view of the Endorphin Speed 5",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409932/613a8afe-93c2-42fe-b21a-fa6e3b2dc618.png",
        altText: "Side view showing the PWRRUN PB midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409951/9b260e17-4084-48e3-983f-e643f397c5ad.png",
        altText: "Back heel view of the Endorphin Speed 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778409970/ceb0953e-bdbd-47e8-9da2-8a5464b8b717.png",
        altText: "Top-down view of the lightweight racing upper",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 1 },
      { size: "40", stock: 1 },
      { size: "41", stock: 3 },
      { size: "42", stock: 6 },
      { size: "43", stock: 5 },
    ],
    gender: "women",
  },
  {
    name: "Cloudmonster 3 Hyper",
    slug: "cloudmonster-3-hyper",
    price: 5199,
    categorySlug: "running-shoes",
    description:
      "The Cloudmonster 3 Hyper features oversized CloudTec cushioning for a uniquely soft and energetic ride. Its rocker shape promotes smooth forward motion during long runs.",
    brand: "On",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410182/0d762a6c-bcbb-4bd5-a3de-8af6c98d7107.png",
        altText: "Front view of the Cloudmonster 3 Hyper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410224/7447611d-45d9-4d7d-9d3a-2a9ace2494f8.png",
        altText: "Side view showing the oversized CloudTec pods",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410264/42c610b8-121f-49fa-9e90-7ec709db1d33.png",
        altText: "Back heel view of the Cloudmonster 3 Hyper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410243/c8b5e588-c3da-49d6-be10-3117c0f622d9.png",
        altText: "Top-down view of the engineered mesh upper",
      },
    ],
    sizes: [
      { size: "38", stock: 3 },
      { size: "39", stock: 6 },
      { size: "40", stock: 9 },
      { size: "41", stock: 11 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "men",
  },
  {
    name: "Mizuno Wave Rider 28",
    slug: "mizuno-wave-rider-28",
    price: 3899,
    categorySlug: "running-shoes",
    description:
      "The Mizuno Wave Rider 28 combines balanced cushioning with responsive energy return. Mizuno Wave technology delivers stability and smooth transitions for daily running.",
    brand: "Mizuno",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410484/74c8f75d-8c26-4821-886d-cdd2fd133271.png",
        altText: "Front view of the Mizuno Wave Rider 28",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410502/e08dd8be-4fbe-4af1-b869-8dcef4a70597.png",
        altText: "Side view showing the Mizuno Wave plate",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410579/96c931c5-aba1-49a1-ad01-f218e2d27a26.png",
        altText: "Back heel view of the Wave Rider 28",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778410520/3864f65a-53ce-4263-bc3a-12931d0a9b92.png",
        altText: "Top-down view of the breathable running upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 12 },
      { size: "41", stock: 10 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "men",
  },

  // ─── Training Shoes (10) ───
  {
    name: "Adidas Dropset Trainer 4",
    slug: "adidas-dropset-trainer-4",
    price: 3299,
    categorySlug: "training-shoes",
    description:
      "The Adidas Dropset Trainer 4 is built for strength training and high-intensity workouts. A dual-density midsole and stable heel provide support for lifting while maintaining flexibility for cardio.",
    brand: "Adidas",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778411219/imgi_95_Dropset_4_Training_Shoes_Black_JR4673_HM1_m8tgl4.jpg",
        altText: "Side view showing the dual-density midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778411236/imgi_103_Dropset_4_Training_Shoes_Black_JR4673_db02_standard.tiff_borlmx.jpg",
        altText: "Heel view with Adidas branding",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 4 },
    ],
    gender: "men",
  },
  {
    name: "Reebok Nano X4",
    slug: "reebok-nano-x4",
    price: 3599,
    categorySlug: "training-shoes",
    description:
      "The Reebok Nano X4 is designed for versatile fitness training. Responsive cushioning and a supportive platform make it ideal for lifting, HIIT, and functional workouts.",
    brand: "Reebok",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412131/e2549edc-c7ff-4f90-8e20-edda06cdd45a.png",
        altText: "Front view of the Reebok Nano X4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412152/7f18a692-6372-44b5-9da3-239c74c1bef1.png",
        altText: "Side view showing the Nano X4 midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412215/b85755f5-98d1-4c73-a28f-8e50b68bc7dd.png",
        altText: "Back view of Reebok Nano X4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412173/5efb034a-be79-4ec7-8903-b1bc8d123720.png",
        altText: "Heel view with Nano branding",
      },
    ],
    sizes: [
      { size: "38", stock: 1 },
      { size: "39", stock: 3 },
      { size: "40", stock: 1 },
      { size: "41", stock: 0 },
      { size: "42", stock: 4 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Under Armour Project Rock BSR 4",
    slug: "under-armour-project-rock-bsr-4",
    price: 2899,
    categorySlug: "training-shoes",
    description:
      "The Under Armour Project Rock BSR 4 delivers durability and comfort for intense gym sessions. Charged Cushioning and a stable base help power through every workout.",
    brand: "Under Armour",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412636/6bb7d4b9-7f60-411f-b3e2-ed701d861a64.png",
        altText: "Front view of the Under Armour Project Rock BSR 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412605/6e94bdd9-4160-4604-ba86-86cb6a42bc6e.png",
        altText: "Side view showing the Charged Cushioning midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412572/521168ad-c9d2-4b41-af87-48e87d41c11b.png",
        altText: "Back view of the supportive heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412508/a3d9d076-37c9-457a-a99b-eb1fcd69493a.png",
        altText: "Top-down view of the durable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 1 },
      { size: "41", stock: 2 },
      { size: "42", stock: 0 },
      { size: "43", stock: 4 },
    ],
    gender: "women",
  },
  {
    name: "Puma Fuse 3.0",
    slug: "puma-fuse-3",
    price: 2499,
    categorySlug: "training-shoes",
    description:
      "The Puma Fuse 3.0 is made for functional fitness and strength training. A wide stable base and grippy outsole provide confidence during lifting and agility drills.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412821/c36ba97b-901c-489d-8403-274bde9f6e1c.png",
        altText: "Front view of the Puma Fuse 3.0",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412844/97d37254-3932-40ae-a567-3bc82a7ad161.png",
        altText: "Side view showing the stable outsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412883/85ed56dc-bb18-4f1c-9707-ff1a52b2686f.png",
        altText: "Angled view of the Fuse 3 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778412864/c697d428-f83c-4d60-a60c-84d4eee4518b.png",
        altText: "Heel view with Puma branding",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "men",
  },
  {
    name: "New Balance Minimus TR",
    slug: "new-balance-minimus-tr",
    price: 3199,
    categorySlug: "training-shoes",
    description:
      "The New Balance Minimus TR offers a natural feel with excellent stability for gym sessions. FuelCell cushioning and a low-profile design help balance comfort and control.",
    brand: "New Balance",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413050/16eebb11-c803-491a-927c-1dd7015da8ed.png",
        altText: "Front view of the New Balance Minimus TR",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413069/cdd96423-0536-46ec-a12c-f2a3c19932ef.png",
        altText: "Side view showing the FuelCell cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413093/bf995658-c485-4a98-a0cf-f06e537d7757.png",
        altText: "Back view of the Minimus TR heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413143/429aa81a-cc5d-426b-b61c-637936eb2a3d.png",
        altText: "Top-down view of the training upper",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 3 },
    ],
    gender: "men",
  },
  {
    name: "Asics Gel-Craze TR 5",
    slug: "asics-gel-craze-tr-5",
    price: 2299,
    categorySlug: "training-shoes",
    description:
      "The Asics Gel-Craze TR 5 is designed for versatile gym training. GEL cushioning and a supportive upper provide comfort and stability for cardio and strength workouts.",
    brand: "Asics",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413299/20996217-3f4e-45f7-8041-f3712952fcb6.png",
        altText: "Side view showing the GEL cushioning",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413319/3bd100e4-8795-486c-b6d4-499cb08fbd8b.png",
        altText: "Back view of the supportive upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413339/56454ba8-9149-46b5-865a-b82cc0d9e3ca.png",
        altText: "Heel view with Asics branding",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 4 },
      { size: "40", stock: 0 },
      { size: "41", stock: 1 },
      { size: "42", stock: 2 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Adidas Rapidmove ADV Trainer",
    slug: "adidas-rapidmove-adv-trainer",
    price: 2699,
    categorySlug: "training-shoes",
    description:
      "The Adidas Rapidmove ADV Trainer is built for dynamic movement. Lightweight cushioning and multidirectional support make it perfect for HIIT and circuit training.",
    brand: "Adidas",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778413769/3c1148ca-2206-48a0-9603-a81bb6e6ad23.png",
        altText: "Front view of the Adidas Rapidmove ADV Trainer",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 14 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "women",
  },
  {
    name: "Under Armour Tribase Reign 6",
    slug: "under-armour-tribase-reign-6",
    price: 3399,
    categorySlug: "training-shoes",
    description:
      "The Under Armour Tribase Reign 6 provides exceptional ground contact and stability for weightlifting and functional training. TriBase technology maximizes flexibility and grip.",
    brand: "Under Armour",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414305/120fd8bf-f1c5-476b-9496-ca71b7897bfd.png",
        altText: "Front view of the Under Armour Tribase Reign 6",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414254/bddf1452-b520-4d55-85d1-34308dd966ae.png",
        altText: "Side view showing the TriBase outsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414079/938b1e9e-f944-4ee2-bbbe-70649eb6c110.png",
        altText: "Angled view of the durable training upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414158/c4944935-debd-407e-a8c7-b982625a2e20.png",
        altText: "Heel view with Tribase branding",
      },
    ],
    sizes: [
      { size: "38", stock: 4 },
      { size: "39", stock: 7 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 9 },
      { size: "43", stock: 6 },
    ],
    gender: "men",
  },
  {
    name: "Puma PWRFrame TR 3",
    slug: "puma-pwrframe-tr-3",
    price: 2599,
    categorySlug: "training-shoes",
    description:
      "The Puma PWRFrame TR 3 combines lightweight responsiveness with targeted support for gym training. The engineered upper and stable frame help you stay locked in during explosive workouts.",
    brand: "Puma",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414562/21496307-09c2-4804-8f8a-905c621b4cff.png",
        altText: "Front view of the Puma PWRFrame TR 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414584/34423046-0272-4de0-b850-41968ebc3a6b.png",
        altText: "Side view showing the PWRFrame support system",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414605/ba28585c-11ef-452e-a87c-5cf618849939.png",
        altText: "Back view of the PWRFrame TR 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778414626/559ec9c6-468a-45e0-9ef7-25664ce76f36.png",
        altText: "Top-down view of the engineered training upper",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 13 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
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
