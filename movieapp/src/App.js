import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartContext from "./store/CartContext";

function App() {
  const [shown, setShown] = useState(false);
  return (
    <CartContext>
      <div className="App ">
        <Header
          cartShow={() => {
            setShown(true);
          }}
        ></Header>
        <Banner />
        {shown && (
          <Cart
            cartShow={() => {
              setShown(false);
            }}
          />
        )}
        <Albums />
        <Footer />
      </div>
    </CartContext>
  );
}

export default App;
