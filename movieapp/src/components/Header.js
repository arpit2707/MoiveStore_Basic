import React, { Fragment } from "react";

const Header = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="mb-0">Home</p>

      <p className="mb-0">Store</p>

      <p className="mb-0">About</p>

      <button
        onClick={() => {
          props.cartShow();
        }}
        className="ml-auto"
      >
        Cart {0}
      </button>
    </div>
  );
};
export default Header;
