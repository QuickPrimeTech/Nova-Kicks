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
    name: "Nike Revolution 7",
    slug: "nike-revolution-7",
    price: 1299,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Revolution 7 is built for everyday comfort. Soft foam cushioning and a breathable upper make it the perfect choice for daily walks, errands, and casual outings.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000041/everyday-rev7-01.jpg",
        altText: "Front view of the Nike Revolution 7",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000042/everyday-rev7-02.jpg",
        altText: "Side view showing the Revolution 7 foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000043/everyday-rev7-03.jpg",
        altText: "Angled view of the breathable mesh upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000044/everyday-rev7-04.jpg",
        altText: "Heel view with Revolution 7 branding",
      },
    ],
    sizes: [
      { size: "38", stock: 12 },
      { size: "39", stock: 15 },
      { size: "40", stock: 10 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Downshifter 13",
    slug: "nike-downshifter-13",
    price: 1399,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Downshifter 13 delivers lightweight comfort for your daily routine. Breathable mesh and soft cushioning keep you comfortable whether you're walking or running errands.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000045/everyday-downshifter-01.jpg",
        altText: "Front view of the Nike Downshifter 13",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000046/everyday-downshifter-02.jpg",
        altText: "Side view of the Downshifter 13 lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000047/everyday-downshifter-03.jpg",
        altText: "Back view showing the heel counter",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000048/everyday-downshifter-04.jpg",
        altText: "Top-down view of the lacing system",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 14 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Flex Experience Run 12",
    slug: "nike-flex-experience-run-12",
    price: 1199,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Flex Experience Run 12 is all about easy, everyday comfort. The flexible outsole and lightweight upper make it perfect for casual walks and light activity.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000049/everyday-flex-01.jpg",
        altText: "Front view of the Nike Flex Experience Run 12",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000050/everyday-flex-02.jpg",
        altText: "Side view showing the flexible outsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000051/everyday-flex-03.jpg",
        altText: "Angled view of the lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000052/everyday-flex-04.jpg",
        altText: "Heel view with Flex Experience branding",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Run Swift 3",
    slug: "nike-run-swift-3",
    price: 1499,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Run Swift 3 is designed for everyday movement. A supportive fit and responsive cushioning make it ideal for daily walks, gym sessions, and casual wear.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000053/everyday-swift-01.jpg",
        altText: "Front view of the Nike Run Swift 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000054/everyday-swift-02.jpg",
        altText: "Side view showing the Swift 3 midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000055/everyday-swift-03.jpg",
        altText: "Back view of the Run Swift 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000056/everyday-swift-04.jpg",
        altText: "Top-down view of the upper and laces",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 12 },
      { size: "40", stock: 7 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Tanjun",
    slug: "nike-tanjun",
    price: 1099,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Tanjun keeps it simple and clean. With a streamlined design and lightweight cushioning, it's the perfect everyday shoe for those who value simplicity and comfort.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000057/everyday-tanjun-01.jpg",
        altText: "Front view of the Nike Tanjun",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000058/everyday-tanjun-02.jpg",
        altText: "Side view of the streamlined Tanjun upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000059/everyday-tanjun-03.jpg",
        altText: "Angled view showing the minimalist design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000060/everyday-tanjun-04.jpg",
        altText: "Heel view with subtle Nike branding",
      },
    ],
    sizes: [
      { size: "38", stock: 15 },
      { size: "39", stock: 12 },
      { size: "40", stock: 9 },
      { size: "41", stock: 7 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Wearallday",
    slug: "nike-wearallday",
    price: 1199,
    categorySlug: "everyday-shoes",
    description:
      "True to its name, the Nike Wearallday is built for all-day comfort. The padded collar and soft foam cushioning make it your go-to shoe for everyday activities.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000061/everyday-wearallday-01.jpg",
        altText: "Front view of the Nike Wearallday",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000062/everyday-wearallday-02.jpg",
        altText: "Side view showing the padded collar",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000063/everyday-wearallday-03.jpg",
        altText: "Back view of the Wearallday heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000064/everyday-wearallday-04.jpg",
        altText: "Top-down view of the comfortable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 13 },
      { size: "41", stock: 11 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Defy All Day",
    slug: "nike-defy-all-day",
    price: 1399,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Defy All Day combines versatility and comfort. With a durable leather upper and cushioned midsole, it's ready for whatever your day throws at you.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000065/everyday-defy-01.jpg",
        altText: "Front view of the Nike Defy All Day",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000066/everyday-defy-02.jpg",
        altText: "Side view of the durable leather upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000067/everyday-defy-03.jpg",
        altText: "Angled view showing the cushioned midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000068/everyday-defy-04.jpg",
        altText: "Heel view with Defy All Day branding",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "men",
  },
  {
    name: "Nike City Rep TR",
    slug: "nike-city-rep-tr",
    price: 1299,
    categorySlug: "everyday-shoes",
    description:
      "The Nike City Rep TR is built for urban life. A durable design and comfortable cushioning make it perfect for city walks, commutes, and everyday adventures.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000069/everyday-cityrep-01.jpg",
        altText: "Front view of the Nike City Rep TR",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000070/everyday-cityrep-02.jpg",
        altText: "Side view showing the City Rep TR upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000071/everyday-cityrep-03.jpg",
        altText: "Back view of the durable heel counter",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000072/everyday-cityrep-04.jpg",
        altText: "Top-down view of the lacing and tongue",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Explore Strada",
    slug: "nike-explore-strada",
    price: 1099,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Explore Strada is your everyday companion. With a modern design and lightweight comfort, it's perfect for casual outings and daily wear.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000073/everyday-strada-01.jpg",
        altText: "Front view of the Nike Explore Strada",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000074/everyday-strada-02.jpg",
        altText: "Side view of the modern Strada design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000075/everyday-strada-03.jpg",
        altText: "Angled view showing the lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000076/everyday-strada-04.jpg",
        altText: "Heel view with Explore Strada detail",
      },
    ],
    sizes: [
      { size: "38", stock: 10 },
      { size: "39", stock: 13 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Renew Ride 3",
    slug: "nike-renew-ride-3",
    price: 1599,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Renew Ride 3 delivers soft, responsive cushioning for everyday comfort. The breathable upper and durable outsole make it ideal for daily walks and casual activities.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000077/everyday-renew-01.jpg",
        altText: "Front view of the Nike Renew Ride 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000078/everyday-renew-02.jpg",
        altText: "Side view showing the Renew foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000079/everyday-renew-03.jpg",
        altText: "Back view of the Renew Ride 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000080/everyday-renew-04.jpg",
        altText: "Top-down view of the breathable upper",
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
    gender: "unisex",
  },
  {
    name: "Nike Victory One",
    slug: "nike-victory-one",
    price: 999,
    categorySlug: "everyday-shoes",
    description:
      "The Nike Victory One offers essential comfort at an unbeatable value. Lightweight cushioning and a breathable design make it the perfect everyday shoe for any budget.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000081/everyday-victory-01.jpg",
        altText: "Front view of the Nike Victory One",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000082/everyday-victory-02.jpg",
        altText: "Side view of the Victory One lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000083/everyday-victory-03.jpg",
        altText: "Angled view showing the cushioned midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000084/everyday-victory-04.jpg",
        altText: "Heel view with Victory One branding",
      },
    ],
    sizes: [
      { size: "38", stock: 14 },
      { size: "39", stock: 11 },
      { size: "40", stock: 8 },
      { size: "41", stock: 6 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
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
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000085/bball-aj1mid-01.jpg",
        altText: "Front view of the Air Jordan 1 Mid",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000086/bball-aj1mid-02.jpg",
        altText: "Side view showing the iconic Jordan 1 silhouette",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000087/bball-aj1mid-03.jpg",
        altText: "Back view with Air Jordan Wings logo",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000088/bball-aj1mid-04.jpg",
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
    name: "Nike LeBron 21",
    slug: "nike-lebron-21",
    price: 4999,
    categorySlug: "basketball-shoes",
    description:
      "The LeBron 21 is built for the king. With Zoom Air cushioning and a lightweight, supportive upper, it delivers explosive energy return and court-ready stability for elite performance.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000089/bball-lebron21-01.jpg",
        altText: "Front view of the Nike LeBron 21",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000090/bball-lebron21-02.jpg",
        altText: "Side view showing the Zoom Air unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000091/bball-lebron21-03.jpg",
        altText: "Angled view of the LeBron 21 upper design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000092/bball-lebron21-04.jpg",
        altText: "Heel view with LeBron crown logo",
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
    name: "Nike KD 17",
    slug: "nike-kd-17",
    price: 4599,
    categorySlug: "basketball-shoes",
    description:
      "The KD 17 is built for versatile players who need speed and precision. A responsive Zoom Air setup and supportive fit help you cut, shoot, and dominate on both ends of the floor.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000093/bball-kd17-01.jpg",
        altText: "Front view of the Nike KD 17",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000094/bball-kd17-02.jpg",
        altText: "Side view showing the KD 17 traction pattern",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000095/bball-kd17-03.jpg",
        altText: "Back view with Durant branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000096/bball-kd17-04.jpg",
        altText: "Top-down view of the lacing and tongue detail",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 11 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
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
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000097/bball-giannis-01.jpg",
        altText: "Front view of the Giannis Immortality 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000098/bball-giannis-02.jpg",
        altText: "Side view showing the Immortality 3 midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000099/bball-giannis-03.jpg",
        altText: "Angled view of the lightweight upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000100/bball-giannis-04.jpg",
        altText: "Heel view with Giannis signature detail",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 13 },
      { size: "41", stock: 8 },
      { size: "42", stock: 5 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Jordan 4 Retro",
    slug: "nike-air-jordan-4-retro",
    price: 5499,
    categorySlug: "basketball-shoes",
    description:
      "The Air Jordan 4 Retro is a timeless classic. With its signature mesh panels, visible Air unit, and iconic design, it remains one of the most coveted sneakers in basketball history.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000101/bball-aj4-01.jpg",
        altText: "Front view of the Air Jordan 4 Retro",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000102/bball-aj4-02.jpg",
        altText: "Side view showing the mesh panels and wings",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000103/bball-aj4-03.jpg",
        altText: "Back view with Jumpman logo on heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000104/bball-aj4-04.jpg",
        altText: "Top-down view of the lacing and tongue",
      },
    ],
    sizes: [
      { size: "38", stock: 2 },
      { size: "39", stock: 5 },
      { size: "40", stock: 8 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike LeBron Witness 8",
    slug: "nike-lebron-witness-8",
    price: 3299,
    categorySlug: "basketball-shoes",
    description:
      "The LeBron Witness 8 delivers explosive power at a great value. Max Air cushioning and a durable upper provide the support and responsiveness needed for aggressive play.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000105/bball-witness8-01.jpg",
        altText: "Front view of the LeBron Witness 8",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000106/bball-witness8-02.jpg",
        altText: "Side view showing the Max Air unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000107/bball-witness8-03.jpg",
        altText: "Angled view of the Witness 8 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000108/bball-witness8-04.jpg",
        altText: "Heel view with LeBron Witness branding",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "men",
  },
  {
    name: "Nike KD Trey 5 X",
    slug: "nike-kd-trey-5-x",
    price: 2499,
    categorySlug: "basketball-shoes",
    description:
      "The KD Trey 5 X brings Durant's signature style to the court at an accessible price. Lightweight cushioning and a breathable upper keep you comfortable during intense games.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000109/bball-trey5-01.jpg",
        altText: "Front view of the Nike KD Trey 5 X",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000110/bball-trey5-02.jpg",
        altText: "Side view showing the Trey 5 X midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000111/bball-trey5-03.jpg",
        altText: "Back view with KD branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000112/bball-trey5-04.jpg",
        altText: "Top-down view of the lacing system",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Precision 7",
    slug: "nike-precision-7",
    price: 2199,
    categorySlug: "basketball-shoes",
    description:
      "The Nike Precision 7 is built for players who value control and quickness. A low-profile design and responsive cushioning help you make sharp cuts and fast breaks with confidence.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000113/bball-precision7-01.jpg",
        altText: "Front view of the Nike Precision 7",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000114/bball-precision7-02.jpg",
        altText: "Side view showing the low-profile design",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000115/bball-precision7-03.jpg",
        altText: "Angled view of the Precision 7 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000116/bball-precision7-04.jpg",
        altText: "Heel view with Precision branding",
      },
    ],
    sizes: [
      { size: "38", stock: 10 },
      { size: "39", stock: 13 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Jordan Luka 2",
    slug: "nike-air-jordan-luka-2",
    price: 3999,
    categorySlug: "basketball-shoes",
    description:
      "The Luka 2 is designed for Luka Doncic's unique style of play. IsoPlate technology and Formula 23 foam provide the stability and cushioning needed for his signature step-back and crafty moves.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000117/bball-luka2-01.jpg",
        altText: "Front view of the Air Jordan Luka 2",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000118/bball-luka2-02.jpg",
        altText: "Side view showing the IsoPlate technology",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000119/bball-luka2-03.jpg",
        altText: "Back view with Luka Doncic branding",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000120/bball-luka2-04.jpg",
        altText: "Top-down view of the lacing and tongue",
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
    gender: "unisex",
  },
  {
    name: "Nike Air Max Impact 4",
    slug: "nike-air-max-impact-4",
    price: 2799,
    categorySlug: "basketball-shoes",
    description:
      "The Air Max Impact 4 brings visible Air cushioning to the hardwood. A durable design and supportive fit make it a reliable choice for players who need comfort and stability.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000121/bball-impact4-01.jpg",
        altText: "Front view of the Nike Air Max Impact 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000122/bball-impact4-02.jpg",
        altText: "Side view showing the visible Air Max unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000123/bball-impact4-03.jpg",
        altText: "Angled view of the Impact 4 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000124/bball-impact4-04.jpg",
        altText: "Heel view with Air Max Impact branding",
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
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000125/run-pegasus41-01.jpg",
        altText: "Front view of the Nike Pegasus 41",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000126/run-pegasus41-02.jpg",
        altText: "Side view showing the ReactX foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000127/run-pegasus41-03.jpg",
        altText: "Angled view of the Pegasus 41 engineered mesh",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000128/run-pegasus41-04.jpg",
        altText: "Heel view with Pegasus branding detail",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 14 },
      { size: "41", stock: 10 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Vomero 17",
    slug: "nike-vomero-17",
    price: 3999,
    categorySlug: "running-shoes",
    description:
      "The Nike Vomero 17 is built for maximum cushioning on long runs. ZoomX and React foam combine to deliver plush comfort and energy return mile after mile.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000129/run-vomero17-01.jpg",
        altText: "Front view of the Nike Vomero 17",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000130/run-vomero17-02.jpg",
        altText: "Side view showing the ZoomX and React foam stack",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000131/run-vomero17-03.jpg",
        altText: "Back view of the Vomero 17 heel counter",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000132/run-vomero17-04.jpg",
        altText: "Top-down view of the breathable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Invincible 3",
    slug: "nike-invincible-3",
    price: 4599,
    categorySlug: "running-shoes",
    description:
      "The Nike Invincible 3 features maximum ZoomX foam for unbeatable cushioning on your longest runs. A wide base and rocker geometry provide stability and smooth transitions.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000133/run-invincible3-01.jpg",
        altText: "Front view of the Nike Invincible 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000134/run-invincible3-02.jpg",
        altText: "Side view showing the full ZoomX midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000135/run-invincible3-03.jpg",
        altText: "Angled view of the Invincible 3 rocker geometry",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000136/run-invincible3-04.jpg",
        altText: "Heel view with Invincible branding",
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
    name: "Nike Structure 25",
    slug: "nike-structure-25",
    price: 3299,
    categorySlug: "running-shoes",
    description:
      "The Nike Structure 25 offers trusted stability for overpronators. A supportive midfoot system and cushioned foam help guide your stride for confident, comfortable miles.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000137/run-structure25-01.jpg",
        altText: "Front view of the Nike Structure 25",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000138/run-structure25-02.jpg",
        altText: "Side view showing the stability midfoot system",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000139/run-structure25-03.jpg",
        altText: "Back view of the Structure 25 heel clip",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000140/run-structure25-04.jpg",
        altText: "Top-down view of the supportive upper",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 12 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Winflo 11",
    slug: "nike-winflo-11",
    price: 2499,
    categorySlug: "running-shoes",
    description:
      "The Nike Winflo 11 delivers reliable cushioning for daily runs. A soft foam midsole and breathable upper provide comfort and support at a great value.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000141/run-winflo11-01.jpg",
        altText: "Front view of the Nike Winflo 11",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000142/run-winflo11-02.jpg",
        altText: "Side view showing the Winflo 11 foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000143/run-winflo11-03.jpg",
        altText: "Angled view of the breathable mesh upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000144/run-winflo11-04.jpg",
        altText: "Heel view with Winflo branding",
      },
    ],
    sizes: [
      { size: "38", stock: 11 },
      { size: "39", stock: 14 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike InfinityRN 4",
    slug: "nike-infinity-rn-4",
    price: 3799,
    categorySlug: "running-shoes",
    description:
      "The Nike InfinityRN 4 is designed to help reduce injury with its rocker geometry and plush ReactX foam. A wide base and supportive fit keep you stable through every stride.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000145/run-infinity4-01.jpg",
        altText: "Front view of the Nike InfinityRN 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000146/run-infinity4-02.jpg",
        altText: "Side view showing the ReactX foam and rocker",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000147/run-infinity4-03.jpg",
        altText: "Back view of the InfinityRN 4 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000148/run-infinity4-04.jpg",
        altText: "Top-down view of the Flyknit upper",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike React Pegasus Trail 5",
    slug: "nike-react-pegasus-trail-5",
    price: 3699,
    categorySlug: "running-shoes",
    description:
      "The Nike React Pegasus Trail 5 takes the legendary Pegasus off-road. React foam and a rugged outsole provide cushioning and traction for trail adventures.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000149/run-pegtrail5-01.jpg",
        altText: "Front view of the Nike React Pegasus Trail 5",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000150/run-pegtrail5-02.jpg",
        altText: "Side view showing the trail-ready outsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000151/run-pegtrail5-03.jpg",
        altText: "Angled view of the Pegasus Trail 5 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000152/run-pegtrail5-04.jpg",
        altText: "Heel view with trail-specific branding",
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
    name: "Nike Juniper Trail 3",
    slug: "nike-juniper-trail-3",
    price: 2199,
    categorySlug: "running-shoes",
    description:
      "The Nike Juniper Trail 3 is your gateway to off-road running. Durable materials and a rugged outsole provide traction and protection on light trails and mixed terrain.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000153/run-juniper3-01.jpg",
        altText: "Front view of the Nike Juniper Trail 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000154/run-juniper3-02.jpg",
        altText: "Side view showing the rugged trail outsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000155/run-juniper3-03.jpg",
        altText: "Back view of the Juniper Trail 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000156/run-juniper3-04.jpg",
        altText: "Top-down view of the protective upper",
      },
    ],
    sizes: [
      { size: "38", stock: 10 },
      { size: "39", stock: 13 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Zoom Rival Fly 3",
    slug: "nike-air-zoom-rival-fly-3",
    price: 2799,
    categorySlug: "running-shoes",
    description:
      "The Nike Air Zoom Rival Fly 3 is built for speed. A lightweight design and Zoom Air unit in the forefoot deliver responsive cushioning for tempo runs and race day.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000157/run-rivalfly3-01.jpg",
        altText: "Front view of the Nike Air Zoom Rival Fly 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000158/run-rivalfly3-02.jpg",
        altText: "Side view showing the Zoom Air unit",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000159/run-rivalfly3-03.jpg",
        altText: "Angled view of the lightweight racer upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000160/run-rivalfly3-04.jpg",
        altText: "Heel view with Rival Fly branding",
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
    gender: "unisex",
  },
  {
    name: "Nike Streakfly",
    slug: "nike-streakfly",
    price: 4299,
    categorySlug: "running-shoes",
    description:
      "The Nike Streakfly is built for short-distance racing. ZoomX foam delivers propulsive energy return in an ultra-lightweight package designed for 5K and 10K efforts.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000161/run-streakfly-01.jpg",
        altText: "Front view of the Nike Streakfly",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000162/run-streakfly-02.jpg",
        altText: "Side view showing the ZoomX racing midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000163/run-streakfly-03.jpg",
        altText: "Back view of the Streakfly heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000164/run-streakfly-04.jpg",
        altText: "Top-down view of the minimal racing upper",
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
    gender: "unisex",
  },

  // ─── Training Shoes (10) ───
  {
    name: "Nike Metcon 9",
    slug: "nike-metcon-9",
    price: 3499,
    categorySlug: "training-shoes",
    description:
      "The Nike Metcon 9 is the gold standard for training. A wider Hyperlift plate and rubber rope wrap provide stability for lifting, while flexible forefoot cushioning supports high-intensity workouts.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000165/train-metcon9-01.jpg",
        altText: "Front view of the Nike Metcon 9",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000166/train-metcon9-02.jpg",
        altText: "Side view showing the Hyperlift plate",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000167/train-metcon9-03.jpg",
        altText: "Angled view of the Metcon 9 durable upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000168/train-metcon9-04.jpg",
        altText: "Heel view with Metcon branding and rope wrap",
      },
    ],
    sizes: [
      { size: "38", stock: 7 },
      { size: "39", stock: 10 },
      { size: "40", stock: 12 },
      { size: "41", stock: 9 },
      { size: "42", stock: 6 },
      { size: "43", stock: 3 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Free Metcon 5",
    slug: "nike-free-metcon-5",
    price: 2999,
    categorySlug: "training-shoes",
    description:
      "The Nike Free Metcon 5 combines flexibility and stability. Nike Free technology in the forefoot allows natural movement, while the wide heel provides a solid base for lifting.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000169/train-freemetcon5-01.jpg",
        altText: "Front view of the Nike Free Metcon 5",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000170/train-freemetcon5-02.jpg",
        altText: "Side view showing the flexible forefoot",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000171/train-freemetcon5-03.jpg",
        altText: "Back view of the wide stable heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000172/train-freemetcon5-04.jpg",
        altText: "Top-down view of the training upper",
      },
    ],
    sizes: [
      { size: "38", stock: 5 },
      { size: "39", stock: 8 },
      { size: "40", stock: 10 },
      { size: "41", stock: 12 },
      { size: "42", stock: 7 },
      { size: "43", stock: 4 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Air Zoom SuperRep 4",
    slug: "nike-air-zoom-superrep-4",
    price: 2799,
    categorySlug: "training-shoes",
    description:
      "The Nike Air Zoom SuperRep 4 is built for high-intensity interval training. Zoom Air cushioning in the forefoot and a supportive containment system keep you explosive and stable.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000173/train-superrep4-01.jpg",
        altText: "Front view of the Nike Air Zoom SuperRep 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000174/train-superrep4-02.jpg",
        altText: "Side view showing the Zoom Air forefoot units",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000175/train-superrep4-03.jpg",
        altText: "Angled view of the SuperRep 4 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000176/train-superrep4-04.jpg",
        altText: "Heel view with SuperRep branding",
      },
    ],
    sizes: [
      { size: "38", stock: 9 },
      { size: "39", stock: 12 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Legend Essential 3",
    slug: "nike-legend-essential-3",
    price: 1999,
    categorySlug: "training-shoes",
    description:
      "The Nike Legend Essential 3 delivers versatile performance for gym workouts. A flat, stable base and durable upper provide support for lifting, cardio, and everything in between.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000177/train-legend3-01.jpg",
        altText: "Front view of the Nike Legend Essential 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000178/train-legend3-02.jpg",
        altText: "Side view showing the stable training base",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000179/train-legend3-03.jpg",
        altText: "Back view of the Legend Essential 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000180/train-legend3-04.jpg",
        altText: "Top-down view of the durable upper",
      },
    ],
    sizes: [
      { size: "38", stock: 11 },
      { size: "39", stock: 14 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 4 },
      { size: "43", stock: 2 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike MC Trainer 2",
    slug: "nike-mc-trainer-2",
    price: 1799,
    categorySlug: "training-shoes",
    description:
      "The Nike MC Trainer 2 is your all-in-one gym shoe. Flat, stable support for lifting meets flexible cushioning for cardio, making it perfect for varied workouts.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000181/train-mc2-01.jpg",
        altText: "Front view of the Nike MC Trainer 2",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000182/train-mc2-02.jpg",
        altText: "Side view showing the versatile midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000183/train-mc2-03.jpg",
        altText: "Angled view of the MC Trainer 2 upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000184/train-mc2-04.jpg",
        altText: "Heel view with MC Trainer branding",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
    ],
    gender: "unisex",
  },
  {
    name: "Nike Renew Retaliation TR 3",
    slug: "nike-renew-retaliation-tr-3",
    price: 2199,
    categorySlug: "training-shoes",
    description:
      "The Nike Renew Retaliation TR 3 combines soft Renew foam with a durable upper for versatile training comfort. Ideal for gym sessions, classes, and casual wear.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000185/train-retaliation3-01.jpg",
        altText: "Front view of the Nike Renew Retaliation TR 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000186/train-retaliation3-02.jpg",
        altText: "Side view showing the Renew foam midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000187/train-retaliation3-03.jpg",
        altText: "Back view of the Retaliation TR 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000188/train-retaliation3-04.jpg",
        altText: "Top-down view of the training upper",
      },
    ],
    sizes: [
      { size: "38", stock: 8 },
      { size: "39", stock: 11 },
      { size: "40", stock: 9 },
      { size: "41", stock: 6 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "men",
  },
  {
    name: "Nike Varsity Compete TR 3",
    slug: "nike-varsity-compete-tr-3",
    price: 1899,
    categorySlug: "training-shoes",
    description:
      "The Nike Varsity Compete TR 3 is built for the grind. Durable materials and a stable base provide the support needed for heavy lifting and intense training sessions.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000189/train-varsity3-01.jpg",
        altText: "Front view of the Nike Varsity Compete TR 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000190/train-varsity3-02.jpg",
        altText: "Side view showing the durable training upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000191/train-varsity3-03.jpg",
        altText: "Angled view of the Varsity Compete TR 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000192/train-varsity3-04.jpg",
        altText: "Heel view with Varsity Compete branding",
      },
    ],
    sizes: [
      { size: "38", stock: 10 },
      { size: "39", stock: 13 },
      { size: "40", stock: 8 },
      { size: "41", stock: 5 },
      { size: "42", stock: 3 },
      { size: "43", stock: 1 },
    ],
    gender: "men",
  },
  {
    name: "Nike Savaleos",
    slug: "nike-savaleos",
    price: 2499,
    categorySlug: "training-shoes",
    description:
      "The Nike Savaleos is built for Olympic weightlifting. A wide, flat base and rigid midsole provide the stability needed for heavy squats, cleans, and snatches.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000193/train-savaleos-01.jpg",
        altText: "Front view of the Nike Savaleos",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000194/train-savaleos-02.jpg",
        altText: "Side view showing the rigid weightlifting base",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000195/train-savaleos-03.jpg",
        altText: "Back view of the Savaleos heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000196/train-savaleos-04.jpg",
        altText: "Top-down view of the strap and upper",
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
    name: "Nike Romaleos 4",
    slug: "nike-romaleos-4",
    price: 4999,
    categorySlug: "training-shoes",
    description:
      "The Nike Romaleos 4 is the ultimate weightlifting shoe. A rigid heel, wide base, and adjustable straps provide unmatched stability and power transfer for competitive lifting.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000197/train-romaleos4-01.jpg",
        altText: "Front view of the Nike Romaleos 4",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000198/train-romaleos4-02.jpg",
        altText: "Side view showing the rigid heel and straps",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000199/train-romaleos4-03.jpg",
        altText: "Angled view of the Romaleos 4 premium upper",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000200/train-romaleos4-04.jpg",
        altText: "Heel view with Romaleos branding",
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
    gender: "unisex",
  },
  {
    name: "Nike ZoomX Invincible Run Flyknit 3",
    slug: "nike-zoomx-invincible-run-flyknit-3",
    price: 4299,
    categorySlug: "training-shoes",
    description:
      "The Nike ZoomX Invincible Run Flyknit 3 delivers maximum cushioning for recovery runs and long training days. ZoomX foam and a Flyknit upper provide plush comfort and breathability.",
    brand: "Nike",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000201/train-invincible3-01.jpg",
        altText: "Front view of the Nike ZoomX Invincible Run Flyknit 3",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000202/train-invincible3-02.jpg",
        altText: "Side view showing the full ZoomX midsole",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000203/train-invincible3-03.jpg",
        altText: "Back view of the Invincible Run Flyknit 3 heel",
      },
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1778000204/train-invincible3-04.jpg",
        altText: "Top-down view of the Flyknit upper",
      },
    ],
    sizes: [
      { size: "38", stock: 6 },
      { size: "39", stock: 9 },
      { size: "40", stock: 11 },
      { size: "41", stock: 13 },
      { size: "42", stock: 8 },
      { size: "43", stock: 5 },
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
