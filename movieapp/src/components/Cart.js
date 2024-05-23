import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { Cartctx } from "../store/CartContext";

const Cart = (props) => {
  const { items } = useContext(Cartctx);
  debugger;
  const ele = document.getElementById("cart");
  return ReactDOM.createPortal(
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1050 }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <div className="position-relative bg-secondary rounded-lg p-4 text-light">
        <button
          onClick={() => {
            props.cartShow();
          }}
        >
          X
        </button>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>

            {items.map((item) => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <h2>Total {0}</h2>
        <button>PURCHASE</button>
      </div>
    </div>,
    ele
  );
};

export default Cart;
