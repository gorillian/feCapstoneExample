import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div>logo</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/Cart">Cart</NavLink>
    </div>
  );
}
