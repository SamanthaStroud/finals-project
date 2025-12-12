// Samanthas Test
import React from "react";
import { render } from "@testing-library/react";
import Mainpage from "../catalog-page/catalogpage";

describe("Mainpage", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("returns products after successful fetch", async () => {
    const mockProducts = [
      { id: 1, name: "Gummy Bears" },
      { id: 2, name: "Sour Worms" },
    ];

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockProducts),
    });

    render(<Mainpage />);

    for (const product of mockProducts) {
      await waitFor(() => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(price.name)).toBeInTheDocument();
      });
    }
  });

  test("shows error message on failure", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Network error"));

    render(<Mainpage />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
