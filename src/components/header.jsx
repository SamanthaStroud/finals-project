//header code  by Samantha Stroud
import React from "react";
import "./header.css";
import { Button } from "@mantine/core";
import { Link } from "wouter";

function Header() {
  return (
    <header className="header">
      <div className="logoimg">
        <img className="logo" src="/images/logo-desgin.png" />
      </div>
      <div className="storename">
        <h1>The Sweet Shoppe</h1>
      </div>

      <Link href="/cart">
        <Button
          className="cartbtnimg"
          styles={{
            root: {
              backgroundColor: "transparent",
              position: "relative",
              top: "16px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <img src="/images/Basket.svg" alt="Basket" />
        </Button>
      </Link>
    </header>
  );
}

export default Header;
