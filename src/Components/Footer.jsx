import React from "react";
import logo from "./DH.png";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={logo} alt="DH-logo" style={{ width: "300px" }} />
    </footer>
  );
};

export default Footer;
