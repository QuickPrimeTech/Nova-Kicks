// @/components//share-product.tsx
import { ShareButton } from "@/components/ui/share-button";
import { products } from "@/db/schema";
import { ComponentProps } from "react";
import { toast } from "sonner";

type ShareProductProps = {
  name: string;
  slug: string;
};

export const ShareProduct = ({
  name,
  slug,
  ...props
}: ShareProductProps & ComponentProps<typeof ShareButton>) => {
  return (
    <ShareButton
      variant="ghost"
      shareData={{
        title: name,
        text: `Check out this ${name}`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${slug}`,
      }}
      onShareSuccess={() => {
        toast.success("Product shared successfully!");
      }}
      type="button"
      onShareError={(error) => {
        if (error.name !== "AbortError") {
          toast.error("Failed to share product");
        }
      }}
      onCopyFallback={() => {
        toast.success("Product link copied to clipboard!");
      }}
      {...props}
    />
  );
};
