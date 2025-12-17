// src/test/ProductDetail.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "../product-detail-page/ProductDetail.jsx";

// Mock wouter's useParams so ProductDetail thinks we are on /products/1
jest.mock("wouter", () => ({
  useParams: () => ({ id: "1" }),
}));

// Mock Mantine Button so we don't need MantineProvider in tests
jest.mock("@mantine/core", () => ({
  Button: (props) => (
    <button {...props}>{props.children}</button>
  ),
}));

// Mock cart context so ProductDetail can call useCart safely
jest.mock("../components/cartContent.jsx", () => ({
  useCart: () => ({
    addToCart: jest.fn(),
  }),
}));

// Helper to mock fetch("/data/candyProducts.json")
function mockFetchOnce(data, ok = true) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data),
    })
  );
}

describe("ProductDetail", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows loading message initially", async () => {
  mockFetchOnce([]);

  render(<ProductDetail />);

  // 1. Check that the loading text shows up right away
  expect(
    screen.getByText(/Loading product/i)
  ).toBeInTheDocument();

  // 2. Wait for the fetch + state update to finish so React is happy
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
});

  test("renders product details when fetch succeeds", async () => {
    mockFetchOnce([
      {
        id: 1,
        name: "Gummy Bears",
        price: "$2.50",
        images: "/images/gumybear.jpg",
        description: "Chewy gummy bears.",
        highlights: ["Highlight 1", "Highlight 2"],
      },
    ]);

    render(<ProductDetail />);

    await waitFor(() =>
      expect(
        screen.getByText("Gummy Bears")
      ).toBeInTheDocument()
    );

    expect(screen.getByText("$2.50/bag")).toBeInTheDocument();
    expect(
      screen.getByText("Chewy gummy bears.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Highlight 1")
    ).toBeInTheDocument();
  });

  test("shows error message when fetch fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<ProductDetail />);

    await waitFor(() =>
      expect(
        screen.getByText(/Failed to load products/i)
      ).toBeInTheDocument()
    );
  });
});
