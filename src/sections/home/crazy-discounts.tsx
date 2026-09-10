// @/sections/home/crazy-discounts.tsx
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselControllers,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { ProductWithOffer } from "@/types/product";

export const CrazyDiscounts = ({ offers }: { offers: ProductWithOffer[] }) => {
  const href = `/products?collection=discounted`;
  return (
    <section id="crazy-discounts" className="py-20 bg-background">
      <div className="section mb-12">
        <div className="container mx-auto">
          <div className="flex w-full justify-between items-center gap-12">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                Grab yours now
              </p>
              <h2 className="font-display text-heading-2 md:text-heading-1 uppercase">
                Crazy Discounts.
              </h2>
            </div>
            <Button className="hidden md:inline-flex" variant="link" asChild>
              <Link href={href}>
                View All <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel matching LatestProducts structure */}
      <Carousel>
        <CarouselControllers />
        <CarouselContent showDefaultItem={true}>
          {offers.map((offer) => (
            <CarouselItem
              key={offer.id}
              className="basis-7/10 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/6 3xl:basis-1/8"
            >
              <ProductCard
                product={offer}
                offer={offer.offer}
                variant="minimal"
                showThumbnails={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Mobile CTA */}
      <div className="mt-8 flex justify-center md:hidden">
        <Button size="xl" asChild variant="outline">
          <Link href={href}>
            View all discounts
            <ArrowUpRight className="size-4 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
