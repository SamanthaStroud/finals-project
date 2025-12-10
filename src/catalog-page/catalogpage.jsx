import React from "react";
import { useState, useEffect } from "react";
import "./catalogpage.css";
import { candyProducts } from "../api/mockdata";

function Mainpage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Example: fetch from API
    fetch("../api/candyProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mainpagebox">
      <div className="topsectionbigbox">
        <div className="topsectionmedbox">
          <div className="topimgbox">
            <img className="logotwo" src="/images/logo-desgin.png" />
            <div className="orangebox">
              <p>
                Step into a world where every shelf sparkles with color, every
                wrapper hides a little joy, and every bite takes you back to
                childhood. At The Sweet Shopee , we believe candy isn’t just a
                treat—it’s an experience. From handcrafted chocolates and
                nostalgic classics to daring new flavors, our store is a
                celebration of sweetness in all its forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
