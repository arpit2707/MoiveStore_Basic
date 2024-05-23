import React, { useState } from "react";

export const Cartctx = React.createContext();

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {
    console.log(item, items);
    if (items.some((it) => it.id == item.id)) {
      setItems((prevState) =>
        items.map((it) => {
          if (it.id == item.id) {
            return { ...it, quantity: it.quantity + 1 };
          } else {
            return it;
          }
        })
      );
    } else {
      if (items.length > 0) {
        setItems((prevState) => [...prevState, { ...item, quantity: 1 }]);
      } else {
        setItems([{ ...item, quantity: 1 }]);
      }
    }
  };
  return (
    <Cartctx.Provider value={{ items, setItems, addToCart }}>
      {children}
    </Cartctx.Provider>
  );
};
export default CartContext;
