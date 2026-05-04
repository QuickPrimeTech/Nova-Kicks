// @/sections/products/product-grid.tsx

export async function ProductGrid({
  searchParams,
}: {
  searchParams: Promise<{
    gender: "men" | "women" | "unisex";
  }>;
}) {
  const params = await searchParams;

  console.log(params);
  return <h1>Product Grid</h1>;
}
