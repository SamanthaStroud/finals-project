import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/cartContent.jsx";

// Mantine
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MantineProvider>
  </StrictMode>
);
