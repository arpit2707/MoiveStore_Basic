import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartContext from "./store/CartContext";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  const [shown, setShown] = useState(false);
  return (
    <CartContext>
      <Home />
    </CartContext>
  );
}

export default App;
