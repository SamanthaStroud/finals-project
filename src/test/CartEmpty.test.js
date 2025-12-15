import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Cart from "../cart-page/cart";
import { CartProvider } from "../components/cartContent";

describe("Cart component", () => {
  it("displays empty cart message when no items are in the cart", () => {
    render(
      <CartProvider>
        <Cart showmoddifier={true} />
      </CartProvider>
    );

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();

    const subtotalElement = screen.queryByText(/subtotal/i);
    expect(subtotalElement).not.toBeInTheDocument();
  });
});
