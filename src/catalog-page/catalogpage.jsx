// Page by Samantha Stroud
import React from "react";
import { useEffect } from "react";
import "./catalogpage.css";
import { Button } from "@mantine/core";
import { Link } from "wouter";

function Mainpage() {
  const [candyproducts, setCandyProducts] = React.useState([]);

  useEffect(() => {
    fetch("/data/candyProducts.json")
      .then((res) => res.json())
      .then((data) => setCandyProducts(data));
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
      <div className="divider" />

      {/* specials section */}
      <div className="specmainbox">
        <p className="spectitle">Special Offers!</p>
        <div className="specdetailboxs">
          <div className="specboxone">
            <p>BUY 3, GET ONE FREE! Mix And Match Madness</p>
          </div>
          <div className="specboxtwo">
            <p>Free Gift with Orders Over $25!</p>
          </div>
          <div className="specboxthree">
            <p>Birthday Club! Get a Free Candy Bag!</p>
          </div>
          <div className="specboxfour">
            <p>Candy of the Month Club! First Month Free!</p>
          </div>
        </div>
      </div>

      {/* candy cards section */}
      <div className="bigcardbox">
        {candyproducts.map((item) => (
          <div className="candycard" key={item.id}>
            <h3>{item.name || "Coming Soon!"}</h3>
            <img
              className="candycardimg"
              src={item.images}
              alt={item.name || "Candy"}
            />
            <p>{item.price !== "$" ? item.price : "Price TBD"}</p>
            <Link href={`/products/${item.id}`}>
              <Button color="pink" radius="lg">
                View More
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainpage;
