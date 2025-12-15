import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Cart from "../cart-page/cart"; // adjust path if needed

describe("Cart component", () => {
  it("displays empty cart message when no items are in the cart", () => {
    render(<Cart showmoddifier={true} />);

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();

    const subtotalElement = screen.queryByText(/\$\d/);
    expect(subtotalElement).not.toBeInTheDocument();
  });
});
