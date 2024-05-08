import { useEffect, useState } from "react";

import { showCards } from "../helpers/showCards";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="all-products-wrapper">{showCards(products, "add")}</div>
    </div>
  );
}
