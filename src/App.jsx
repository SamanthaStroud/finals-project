import React from "react";
import { lazy, Suspense } from "react";

// import { useState, useEffect } from "react";
import { Route, Switch } from "wouter";

//import { candyProducts } from "./catalog-page/catalogpage";
import "./App.css";

//import the header and footer
import Header from "./components/header";
import Footer from "./components/footer";

//import the main page info
import Mainpage from "./catalog-page/catalogpage";
// import Checkout from "./checkout-page/checkoutpage.jsx"
import Cartpage from "./cart-page/cart";

//my other page to be added and routed later -sammie

const Cart = lazy(() => import("./catalog-page/catalogpage"));

function App() {
  //Main App contents (ive adding routing to my catalog page) - sammie
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Mainpage} />
          <Route path="/cart" component={Cartpage} />
          {/* Other routes */}
          {/*<Route path="/Checkout" element={<Checkout />} /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
