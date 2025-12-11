import React from "react";
import { Route, Switch } from "wouter";
import "./App.css";

//import the header and footer
import Header from "./components/header";
import Footer from "./components/footer";
//import the pages
import Mainpage from "./catalog-page/catalogpage";
import Checkout from "./checkout-page/checkout";
import Cartpage from "./cart-page/cart";

function App() {
  //Main App contents
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Mainpage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
