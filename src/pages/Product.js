import { useState, useEffect } from "react";

import { useCart } from "../context/CartContext";

export default function Product(props) {
  const cartContext = useCart();
  const [prod, setProd] = useState({});
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.prodId}`)
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, [props.match.params.prodId]);

  useEffect(() => {
    if (cartContext.cart.includes(prod)) {
      setInCart(true);
    }
  }, [cartContext.cart, prod]);

  return (
    <div className="single-product-container">
      <h1>{prod.title}</h1>
      <h3>{prod.category}</h3>
      <img src={prod.image} alt={prod.title} width="400" height="400" />
      <div>${prod.price}</div>
      <div>{prod.description}</div>
      <button
        disabled={inCart}
        onClick={() => cartContext.setCart((prevCart) => [...prevCart, prod])}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
