import { ShareButton } from "@/components/ui/share-button";
import { ProductWithOptionalOffer } from "@/types/product";
import { toast } from "sonner";

interface Props {
  product: ProductWithOptionalOffer;
}

export const ProductHeader = ({ product }: Props) => {
  return (
    <div className="space-y-3">
      {product.brand && (
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          {product.brand}
        </span>
      )}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
        {product.name}
      </h1>

      <ShareButton
        variant="ghost"
        shareData={{
          title: product.name,
          text: product.description,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.slug}`,
        }}
        onShareSuccess={() => toast.success("Shared successfully")}
      />
    </div>
  );
};
