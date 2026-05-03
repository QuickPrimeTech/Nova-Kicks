import { Hero } from "@/sections/home/hero";
import { Marquee } from "@/sections/home/marquee";
import { LatestProducts } from "@/sections/home/latest-products";
// Import your Drizzle db instance
import { getLatestProducts } from "@/db/functions/product";
import { getCategories } from "@/db/functions/category";
import { BentoCategories } from "@/sections/home/bento-categories";

export default async function Home() {
  const featuredProducts = await getLatestProducts(); // Fetch featured products
  const categories = await getCategories();
  return (
    <>
      <Hero />
      <Marquee />
      <BentoCategories categories={categories} />
      <LatestProducts products={featuredProducts} />
    </>
  );
}
