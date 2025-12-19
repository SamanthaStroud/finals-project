// Page by Brandon Coish
import React, { useEffect } from "react";
import "./Cart.css";
import { useCart } from "../components/cartContent.jsx";
import { useLocation } from "wouter";

export default function Cart({ unsubtotalcb = null, showmoddifier = true }) {
  const [location, setLocation] = useLocation();

  const { cart, increaseQty, decreaseQty } = useCart();

  // Calculate subtotal from cart data
  const subtotal = cart.reduce((acc, item) => {
    const cleanPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + cleanPrice * item.qty;
  }, 0);

  // Pass subtotal up to checkout if requested (Sammie hook)
  useEffect(() => {
    if (unsubtotalcb) {
      unsubtotalcb(subtotal);
    }
  }, [unsubtotalcb, subtotal]);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {/* Cart Items */}
      <div className="cart-items-card">
        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Browse the shop to add items.
          </p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item-group">
              {/* Item Info */}
              <div className="item-info">
                <img
                  src={item.images}
                  alt={item.name}
                  className="item-images"
                />
                <p className="item-name">{item.name}</p>
              </div>

              {/* Quantity Controls */}
              {showmoddifier && (
                <div className="qty-controls">
                  <button
                    className="qty-button"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <p className="item-qty">{item.qty}</p>

                  <button
                    className="qty-button"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
              )}

              {/* Price */}
              <p className="item-price">
                $
                {(
                  parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.qty
                ).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      {showmoddifier && cart.length > 0 && (
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
      )}
    </div>
  );
}
