import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartShow }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <ul>
        <li>
          <Link className="mb-0" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mb-0" to="/albums">
            Store
          </Link>
        </li>
        <li>
          <Link className="mb-0" to="/about">
            About
          </Link>
        </li>
      </ul>
      <button onClick={cartShow} className="ml-auto">
        Cart {0}
      </button>
    </div>
  );
};

export default Header;
