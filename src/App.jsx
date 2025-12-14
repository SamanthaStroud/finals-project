// src/App.jsx
import React from "react";
import { Route, Switch } from "wouter";
import "./App.css";

// layout
import Header from "./components/header";
import Footer from "./components/footer";

// pages
import Mainpage from "./catalog-page/catalogpage";
import Checkout from "./checkout-page/checkout";
import Cartpage from "./cart-page/cart";
import ProductDetail from "./product-detail-page/ProductDetail";

function App() {
  // Main App contents
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <Mainpage />
        </Route>

        {/* Product Detail page – uses :id from the URL */}

        <Route path="/Products">
          <ProductDetail />
        </Route>
        
        {/* <Route path="/products/:id">
          {(params) => <ProductDetail id={params.id} />}
        </Route> */}

        <Route path="/cart">
          <Cartpage />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
