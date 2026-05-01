import { Hero } from "@/sections/home/hero";
import { Marquee } from "@/layouts/marquee";
import { FeaturedCarousel } from "@/sections/home/featured-carousel";
import { db } from "@/index"; // Import your Drizzle db instance
import { products as productTable } from "@/db/schemas";

export default async function Home() {
  const products = await db.select().from(productTable); // Fetch products from the database

  return (
    <>
      <Hero />
      <Marquee />
      {/* <BentoCategories /> */}
      <FeaturedCarousel products={products} />
    </>
  );
}
