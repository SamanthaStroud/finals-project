// Samanthas Test
import React from "react";
import { MantineProvider } from "@mantine/core";
import { render, screen, waitFor } from "@testing-library/react";
import Mainpage from "../catalog-page/catalogpage";

describe("Mainpage", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders products after successful fetch", async () => {
    const mockProducts = [
      { id: 1, name: "Gummy Bears", price: "$1.99", image: "gummy.jpg" },
      { id: 2, name: "Sour Worms", price: "$2.49", image: "worms.jpg" },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      })
    );

    render(
      <MantineProvider>
        <Mainpage />
      </MantineProvider>
    );

    await waitFor(() => {
      for (const product of mockProducts) {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(product.price)).toBeInTheDocument();
      }
    });
  });
});
