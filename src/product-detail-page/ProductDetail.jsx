// src/product-detail-page/ProductDetail.jsx
// Product Detail page by Liam Murray

import React, { useEffect, useState } from "react";
import "./product-detail.css";
import { Button } from "@mantine/core";

// NOTE PALS!!! We can implement useCart in context/cartContent.jsx.
// This tries to import it but falls back safely if it doesn't exist yet.
let useCartHook;
try {
  // eslint-disable-next-line global-require, import/no-unresolved
  ({ useCart: useCartHook } = require("../context/cartContent"));
} catch {
  useCartHook = null;
}

function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cartContext = useCartHook ? useCartHook() : null;
  const addToCart = cartContext?.addToCart || (() => {});

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        // JSON Server endpoint – we can mess with the URL if we need!
        // ive messed with this section and ive got Product not foudn to show so its now fetching the JSON for you just need to figure out the product found part- Sammie
        const response = await fetch("/data/candyProducts.json");
        const contentType = response.headers.get("content-type") || "";

        if (!response.ok || !contentType.includes("application/json")) {
          throw new Error(`Invalid response format: ${contentType}`);
        }

        const data = await response.json();
        const foundProduct = data.find((item) => item.id === id);

        if (!!foundProduct) {
          throw new Error("Product not found");
        }

        setProduct(foundProduct);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!!product) return;

    // If CartProvider is wired, this will update global cart
    // and can also POST to /cart inside that context.
    addToCart(product, 1);
  };

  if (loading) {
    return <p className="product-detail-message">Loading product…</p>;
  }

  if (error) {
    return <p className="product-detail-message">Error: {error}</p>;
  }

  if (!product) {
    return <p className="product-detail-message">Product not found.</p>;
  }

  // Use highlights array from JSON if present, otherwise show generic bullets

  const highlights =
    product.highlights && product.highlights.length > 0
      ? product.highlights
      : [
          "Soft, chewy texture with a sweet fruity bite.",
          "Assorted flavours perfect for parties and movie nights.",
          "Great for candy jars, buffets, and gifts.",
        ];

  return (
    <main className="product-detail-page">
      <section className="product-detail-header-bar">
        <h1 className="store-title">The Sweet Shoppe</h1>
      </section>

      <section className="product-detail-content">
        <h2 className="product-detail-heading">Product Details</h2>

        <div className="product-detail-cards">
          {/* LEFT CARD – main product info */}
          <article className="product-main-card">
            <div className="product-main-inner">
              <img
                src={product.image}
                alt={product.name}
                className="product-main-image"
              />

              <div className="product-main-info">
                <h3 className="product-main-name">{product.name}</h3>
                <p className="product-main-price">
                  ${Number(product.price).toFixed(2)}/bag
                </p>
                <p className="product-main-stock">
                  In stock: {product.stock} bags
                </p>

                <Button
                  className="product-add-button"
                  size="sm"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>

            <p className="product-main-description">{product.description}</p>
          </article>

          {/* RIGHT CARD – “Why you’ll love them” points */}
          <article className="product-love-card">
            <h3 className="product-love-heading">Why you&apos;ll love them</h3>
            <ul className="product-love-list">
              {highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
