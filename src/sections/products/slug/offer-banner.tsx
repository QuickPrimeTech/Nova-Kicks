// @/sections//slug/offer-banner.tsx
import { products } from "@/db/schema";
import { ProductWithOptionalOffer } from "@/types/product";
import { Tag } from "lucide-react";

type OfferBannerProps = {
  price: number;
  offer: ProductWithOptionalOffer["offer"];
};

export const OfferBanner = ({ price, offer }: OfferBannerProps) => {
  let discountPercentage = 0;

  if (offer) {
    const { discountType, discountValue } = offer;

    if (discountType === "percentage") {
      discountPercentage = discountValue;
    }

    if (discountType === "fixed_amount") {
      discountPercentage = Math.round((discountValue / price) * 100);
    }
  }

  return (
    <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4 space-y-2">
      <div className="flex items-center gap-2 text-destructive font-semibold">
        <Tag className="size-4" />
        <span>Special Offer</span>
      </div>
      <p className="text-sm text-muted-foreground">
        {offer?.description ||
          `Get ${discountPercentage}% off this item. Discount applied at checkout.`}
      </p>
      {offer?.endDate && (
        <p className="text-xs text-destructive font-medium">
          Offer ends {new Date(offer.endDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};
