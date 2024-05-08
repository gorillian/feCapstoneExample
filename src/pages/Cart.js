import { showCards } from "../helpers/showCards";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const cartContext = useCart();
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items-wrapper">
        {showCards(cartContext.cart, "view")}
      </div>
    </div>
  );
}
