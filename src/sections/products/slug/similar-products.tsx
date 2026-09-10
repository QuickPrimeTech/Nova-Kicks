// @/products/slug/similar-products.tsx
import { ProductCard } from "@/components/product/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselControllers,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductWithOptionalOffer } from "@/types/product";

export const SimilarProducts = ({
  similarProducts,
}: {
  similarProducts: ProductWithOptionalOffer[];
}) => {
  return (
    <section id="similar-products" className="mb-16">
      <div className="section-small mb-6">
        <div className="container mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            Similar Products
          </p>
          <h2 className="font-display text-xl font-bold md:text-heading-2 uppercase">
            You may also like.
          </h2>
        </div>
      </div>
      <Carousel>
        <CarouselControllers />
        <CarouselContent showDefaultItem={true}>
          {similarProducts.map((similarProduct) => (
            <CarouselItem
              key={similarProduct.id}
              className="basis-7/10 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/6 3xl:basis-1/8"
            >
              <ProductCard
                product={similarProduct}
                offer={similarProduct.offer ?? undefined}
                variant="minimal"
                showThumbnails={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
