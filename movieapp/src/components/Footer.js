import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="mb-0">The Generics</h3>
      <FaYoutube />
      <FaSpotify />
      <FaFacebookSquare className="ml-auto" />
    </div>
  );
};
export default Footer;
