// @/sections/home/brands.tsx

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BrandCard } from "@/components/brand-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Brands = ({ brands }: { brands: string[] }) => {
  const href = `/brands`;

  return (
    <section id="brands" className="py-20 bg-background overflow-hidden">
      <div className="container section mx-auto mb-12">
        <div className="flex justify-between items-center gap-12">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
              Your brand your pick
            </p>
            <h2 className="font-display text-heading-2 md:text-heading-1 uppercase">
              Shop by brand
            </h2>
          </div>
          <Button className="hidden md:inline-flex" variant="link" asChild>
            <Link href={href}>
              View All <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Carousel>
        <CarouselContent showDefaultItem={true}>
          {brands.map((brand) => (
            <CarouselItem
              key={brand}
              className="basis-7/10 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <BrandCard brand={brand} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Mobile CTA */}
      <div className="mt-8 flex justify-center md:hidden">
        <Button size="xl" asChild variant="outline">
          <Link href={href}>
            View all brands
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
