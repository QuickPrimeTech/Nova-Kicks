import { Hero } from "@/sections/home/hero";
import { Marquee } from "@/sections/home/marquee";
import { LatestProducts } from "@/sections/home/latest-products";
// Import your Drizzle db instance
import { BentoCategories } from "@/sections/home/bento-categories";
import { CrazyDiscounts } from "@/sections/home/crazy-discounts";
import { LimitedProducts } from "@/sections/home/limited-products";
import { FindUs } from "@/sections/home/find-us";
import { Brands } from "@/sections/home/brands";
import { getHomePageData } from "@/lib/data";

export default async function Home() {
  const { featuredProducts, categories, offers, limitedProducts, brands } =
    await getHomePageData();

  return (
    <>
      <Hero />
      <Marquee />
      <BentoCategories categories={categories} />
      {offers.length > 0 && <CrazyDiscounts offers={offers} />}
      {featuredProducts.length > 0 && (
        <LatestProducts products={featuredProducts} />
      )}
      {limitedProducts.length > 0 && (
        <LimitedProducts products={limitedProducts} />
      )}
      <Brands brands={brands} />
      <FindUs />
    </>
  );
}
