// @/sections/slug/offer-banner.tsx
"use client";

import { ProductWithOptionalOffer } from "@/types/product";
import { Tag } from "lucide-react";
import { useEffect, useState } from "react";

type OfferBannerProps = {
  price: number;
  offer: ProductWithOptionalOffer["offer"];
};

export const OfferBanner = ({ price, offer }: OfferBannerProps) => {
  const [timeLeft, setTimeLeft] = useState("");

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

  useEffect(() => {
    if (!offer?.endDate) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const end = new Date(offer.endDate).getTime();

      const difference = end - now;

      if (difference <= 0) {
        setTimeLeft("Offer expired");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [offer?.endDate]);

  return (
    <div className="rounded-xl border border-destructive/20 bg-destructive/5 text-muted-foreground p-4 space-y-2">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-destructive">
          <Tag className="size-4" />
          <span>Special Offer</span>
        </div>
        <p className="text-sm font-bold">{timeLeft}</p>
      </div>

      <p className="text-sm">
        {offer?.description ||
          `Get ${discountPercentage}% off this item. Discount applied at checkout.`}
      </p>

      {offer?.endDate && (
        <p className="text-xs font-medium">
          Offer ends{" "}
          {new Date(offer.endDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}
    </div>
  );
};
