// @/app/products/[slug]/page.tsx

import { getProductBySlug } from "@/db/functions/product";
import { ProductContent } from "@/sections/products/slug/content";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductBrand({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return <ProductContent product={product} />;
}
