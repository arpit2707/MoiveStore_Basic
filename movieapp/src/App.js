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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [shown, setShown] = useState(false);
  return (
    <CartContext>
      <div className="App ">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </CartContext>
  );
}

export default App;
