import React from "react";
import { useState, useEffect } from "react";

import { candyProducts } from "./catalog-page/catalogpage";
import "./App.css";

//import the header and footer
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  // This is just testing my products API, not all of it will stay!
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(candyProducts);
    });
  }, []);

  //Main App contents (also routing goes in the main setion as well, i can do that once we get the pages done if you guys would like - Sammie)
  return (
    <div>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
