import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [shown, setShown] = useState(false);
  return (
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
  );
}

export default App;
