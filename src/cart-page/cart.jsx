import React from "react";
import "./Cart.css";
import { useCart } from "../context/cartContent.jsx";
import { useLocation } from "wouter";

const cartItems = [
  {
    id: 1,
    name: "Gummy Bears",
    price: 6.99,
    image: "/images/gumybear.jpg",
    qty: 1,
  },
  {
    id: 2,
    name: "Jelly Beans",
    price: 5.99,
    image: "/images/jellybean.jpg",
    qty: 1,
  },
  {
    id: 3,
    name: "Starburst",
    price: 4.99,
    image: "/images/starburst.jpg",
    qty: 1,
  },
];

export default function Cart() {
  const [location, setLocation] = useLocation();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {/* Cart Items Card */}
      <div className="cart-items-card">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-group">
            {/* Item Info */}
            <div className="item-info">
              <img src={item.image} alt={item.name} className="item-image" />
              <p className="item-name">{item.name}</p>
            </div>

            {/* Quantity Controls */}
            <div className="qty-controls">
              <button className="qty-button">−</button>
              <p className="item-qty">{item.qty}</p>
              <button className="qty-button">+</button>
            </div>

            {/* Price */}
            <p className="item-price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Order Summary Card */}
      <div className="summary-card">
        <h4>Order Summary</h4>

        <div className="summary-row">
          <p>Subtotal</p>
          <p className="subtotal-amount">${subtotal.toFixed(2)}</p>
        </div>

        <hr className="summary-divider" />

        <button
          className="checkout-button"
          onClick={() => setLocation("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
