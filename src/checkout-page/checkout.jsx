// Page code by Samantha Stroud
import Cartpage from "../cart-page/cart";
import React from "react";
import "./checkout.css";
import { Button, TextInput } from "@mantine/core";
import { useLocation } from "wouter";

function Checkout() {
  return (
    <div className="mainpagebox">
      <div className="checkoutbox">
        <div className="checkoutname">
          <p>Checkout</p>
        </div>
        <div className="maincheckformbox">
          <div className="infobox">
            <div className="checksecnames">
              <p>Customer Info:</p>
              <div className="inputboxs">
                <TextInput
                  radius="xl"
                  placeholder="Last Name"
                  color="rgba(251, 164, 181, 1)"
                />
                <TextInput
                  pt={"1rem"}
                  radius="xl"
                  placeholder="Full Name"
                  color="rgba(251, 164, 181, 1)"
                />
                <TextInput
                  pt={"1rem"}
                  radius="xl"
                  placeholder="Phone Number"
                  color="rgba(251, 164, 181, 1)"
                />
                <TextInput
                  pt={"1rem"}
                  c={"#FBA4B5"}
                  radius="xl"
                  placeholder="Email"
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
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Street Address"
                color="rgba(251, 164, 181, 1)"
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Zip Code"
                color="rgba(251, 164, 181, 1)"
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
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Cardholder Name"
                color="rgba(251, 164, 181, 1)"
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="Expire Date"
                color="rgba(251, 164, 181, 1)"
              />
              <TextInput
                pt={"1rem"}
                radius="xl"
                placeholder="CVV Number"
                color="rgba(251, 164, 181, 1)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cartandtotalbox">
        <div className="cartinfobox">
          {/* allows code from chart to show only what i want to be shown */}
          <Cartpage showmoddifier={false} />
        </div>
        <div className="subtotalbox">
          <div className="colourbox">
            <div className="orderbox">
              <div className="orderboxname">
                <h1>Order Summary</h1>
              </div>
              <div className="subtotal">
                <p>Subtotal</p>
                {/* add code to display the order subtotal */}
              </div>
              <hr />
              <div className="shipping">
                <p>Shipping</p>
                {/* add code to display the Shipping ammount */}
              </div>
              <hr />
              <div className="total">
                <p>Total</p>
                {/* add code to display the Total ammount */}
              </div>
              <Button className="orderbtn" radius={"xl"}>
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
