// Page code by Samantha Stroud and Brandon Coish
import Cartpage from "../cart-page/cart";
import React from "react";
import { useState } from "react";
import "./checkout.css";
import { Button, TextInput } from "@mantine/core";

function Checkout() {
  // consts:
  const [sub, setSub] = React.useState(0);
  // the const for the order summary box
  const shipping = 5.99;
  const total = sub + 5.99;
  // the const for the place order button
  const [lastName, setLastName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  // const for the button so once clicked it will display the info in the console
  const handlePlaceOrder = () => {
    console.log("Customer Info:");
    console.log("Last Name:", lastName);
    console.log("Full Name:", fullName);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Shipping Address:");
    console.log("City:", city);
    console.log("Street:", street);
    console.log("Zip:", zip);
    console.log("Payment Info:");
    console.log("Card Number:", cardNumber);
    console.log("Cardholder Name:", cardName);
    console.log("Expire Date:", expireDate);
    console.log("CVV:", cvv);
    setOrderPlaced(true);
  };

  const [orderPlaced, setOrderPlaced] = React.useState(false);

  if (orderPlaced) {
    return (
      <div className="thankyou">
        <h1>Thank you for your order!</h1>
      </div>
    );
  }

  return (
    <div className="mainpagebox">
      <div className="cartinfobox">
        {/* allows code from chart to show only what i want to be shown */}
        <Cartpage showmoddifier={false} unsubtotalcb={setSub} />
      </div>
      <div className="checkoutbox">
        <div className="maincheckformbox">
          <div className="infobox">
            <div className="checksecnames">
              <p>Customer Info:</p>
              <div className="inputboxs">
                <TextInput
                  radius="xl"
                  placeholder="Last Name"
                  color="rgba(251, 164, 181, 1)"
                  value={lastName}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                />
                <TextInput
                  pt={"1rem"}
                  radius="xl"
                  placeholder="Full Name"
                  color="rgba(251, 164, 181, 1)"
                  value={fullName}
                  onChange={(e) => setFullName(e.currentTarget.value)}
                />
                <TextInput
                  pt={"1rem"}
                  radius="xl"
                  placeholder="Phone Number"
                  color="rgba(251, 164, 181, 1)"
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                />
                <TextInput
                  pt={"1rem"}
                  c={"#FBA4B5"}
                  radius="xl"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="checksecnames">
              <p>Shipping Address</p>
            </div>
            <div className="inputboxs">
              <TextInput
                radius="xl"
                placeholder="City"
                color="rgba(251, 164, 181, 1)"
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Street Address"
                color="rgba(251, 164, 181, 1)"
                value={street}
                onChange={(e) => setStreet(e.currentTarget.value)}
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Zip Code"
                color="rgba(251, 164, 181, 1)"
                value={zip}
                onChange={(e) => setZip(e.currentTarget.value)}
              />
            </div>
            <div className="checksecnames">
              <p>Payment</p>
            </div>

            <div className="inputboxs">
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Card Number"
                color="rgba(251, 164, 181, 1)"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.currentTarget.value)}
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Cardholder Name"
                color="rgba(251, 164, 181, 1)"
                value={cardName}
                onChange={(e) => setCardName(e.currentTarget.value)}
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Expire Date"
                color="rgba(251, 164, 181, 1)"
                value={expireDate}
                onChange={(e) => setExpireDate(e.currentTarget.value)}
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="CVV Number"
                color="rgba(251, 164, 181, 1)"
                value={cvv}
                onChange={(e) => setCvv(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cartandtotalbox">
        <div className="subtotalbox">
          <div className="colourbox">
            <div className="orderbox">
              <div className="orderboxname">
                <h1>Order Summary</h1>
              </div>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>{sub}</p>
              </div>
              <hr />
              <div className="shipping">
                <p>Shipping</p>
                <p>{shipping}</p>
              </div>
              <hr />
              <div className="total">
                <p>Total</p>
                <p>{total}</p>
              </div>
              <Button
                className="orderbtn"
                radius={"xl"}
                color="#fba4b5"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
