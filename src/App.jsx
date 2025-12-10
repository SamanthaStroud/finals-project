import React from "react";
import { lazy, Suspense } from "react";
// import { useState, useEffect } from "react";
import { BrowserRouter, Link, Router, Route, Routes } from "react-router-dom";

//import { candyProducts } from "./catalog-page/catalogpage";
import "./App.css";

//import the header and footer
import Header from "./components/header";
import Footer from "./components/footer";

//import the main page info
import Mainpage from "./catalog-page/catalogpage";
// import Checkout from "./checkout-page/checkoutpage.jsx"

// import Cart page info
import Cart from "./cart-page/cart";

const Landing = lazy(() => import("./catalog-page/catalogpage"));

//my other page to be added and routed later -sammie
{
  /* const Checkout = lazy(() => import("./checkout-page/checkoutpage"));*/
}

const Cart = lazy(() => import("./catalog-page/catalogpage"));

function App() {
  //Main App contents (ive adding routing to my catalog page) - sammie
  return (
    <div>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Cart" element={<Cart />} />
            {/*<Route path="/Checkout" element={<Checkout />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
