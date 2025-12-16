// src/product-detail-page/ProductDetail.jsx
// Product Detail page by Liam Murray

import React, { useEffect, useState } from "react";
import "./product-detail.css";
import { Button } from "@mantine/core";
import { useCart } from "../components/cartContent.jsx";

function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        // Get all products from the shared JSON file in /public/data
        const response = await fetch("/data/candyProducts.json");
        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const allProducts = await response.json();

        // Find the one that matches this page's id
        const found = allProducts.find(
          (item) => String(item.id) === String(id)
        );

        if (!found) {
          throw new Error("Product not found");
        }

        setProduct(found);
      } catch (err) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
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
      <section className="product-detail-content">
        <h2 className="product-detail-heading">Product Details</h2>

        <div className="product-detail-cards">
          <article className="product-main-card">
            <div className="product-main-inner">
              <img
                src={product.images} // matches 'images' in candyProducts.json
                alt={product.name}
                className="product-main-image"
              />

              <div className="product-main-info">
                <h3 className="product-main-name">{product.name}</h3>
                <p className="product-main-price">{product.price}/bag</p>

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
