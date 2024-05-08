import ProductCard from "../util/ProductCard";

export function showCards(arr, type) {
  return arr?.map((product) => {
    return <ProductCard key={product.id} prod={product} />;
  });
}
