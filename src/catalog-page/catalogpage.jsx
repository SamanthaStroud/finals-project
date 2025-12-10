import React from "react";
import { useState, useEffect } from "react";
import "./catalogpage.css";
import { Button } from "@mantine/core";

function Mainpage() {
  const [candyproducts, setCandyProducts] = React.useState([]);

  fetch("/data/candyProducts.json")
    .then((res) => res.json())
    .then((data) => setCandyProducts(data));

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
      <div className="divider" />
      <div className="bigcardbox">
        {candyproducts.map((item) => (
          <div className="candycard" key={item.id}>
            <h3>{item.name || "Coming Soon!"}</h3>
            <img src={item.images} alt={item.name || "Candy"} />

            <p>{item.price !== "$" ? item.price : "Price TBD"}</p>
            <Button color="pink" radius="md" fullWidth>
              View More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainpage;
