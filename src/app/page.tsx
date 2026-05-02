import { Hero } from "@/sections/home/hero";
import { Marquee } from "@/layouts/marquee";
import { FeaturedCarousel } from "@/sections/home/featured-carousel";
// Import your Drizzle db instance
import { getFeaturedProducts } from "@/db/functions/product";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts(); // Fetch featured products

  return (
    <>
      <Hero />
      <Marquee />
      {/* <BentoCategories /> */}
      <FeaturedCarousel products={featuredProducts} />
    </>
  );
}
