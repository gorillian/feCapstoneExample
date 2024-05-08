import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { truncateString } from "../helpers/truncateString";
import { useCart } from "../context/CartContext";

export default function ProductCard({ prod }) {
  const cartContext = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (cartContext.cart.includes(prod)) {
      setInCart(true);
    }
  }, [cartContext.cart, prod]);

  return (
    <div className="product-card-container">
      <NavLink to={`/product/${prod.id}`}>
        <img src={prod.image} alt={prod.title} width="400" height="400" />
        <div>{prod.title}</div>
        <div>${prod.price}</div>
        <div>{truncateString(prod.description)}</div>
      </NavLink>
      <button
        disabled={inCart}
        onClick={() => cartContext.setCart((prevCart) => [...prevCart, prod])}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
