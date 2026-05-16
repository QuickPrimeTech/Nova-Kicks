import { Hero } from "@/sections/home/hero";
import { Marquee } from "@/sections/home/marquee";
import { LatestProducts } from "@/sections/home/latest-products";
// Import your Drizzle db instance
import {
  getBrands,
  getDiscountedProducts,
  getLatestProducts,
  getLimitedProducts,
} from "@/db/functions/product";
import { getCategories } from "@/db/functions/category";
import { BentoCategories } from "@/sections/home/bento-categories";
import { CrazyDiscounts } from "@/sections/home/crazy-discounts";
import { LimitedProducts } from "@/sections/home/limited-products";
import { cacheLife } from "next/cache";
import { FindUs } from "@/sections/home/find-us";
import { Brands } from "@/sections/home/brands";

const getCachedPageData = async () => {
  "use cache";

  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  const featuredProducts = await getLatestProducts(); // Fetch featured products
  const categories = await getCategories();
  const offers = await getDiscountedProducts();
  const limitedProducts = await getLimitedProducts();
  const brands = await getBrands(5);

  return { featuredProducts, categories, offers, limitedProducts, brands };
};
export default async function Home() {
  const { featuredProducts, categories, offers, limitedProducts, brands } =
    await getCachedPageData();

  return (
    <>
      <Hero />
      <Marquee />
      <BentoCategories categories={categories} />
      <CrazyDiscounts offers={offers} />
      <LatestProducts products={featuredProducts} />
      <LimitedProducts products={limitedProducts} />
      <Brands brands={brands} />
      <FindUs />
    </>
  );
}
