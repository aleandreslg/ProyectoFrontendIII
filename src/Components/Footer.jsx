import React from "react";
import logo from "./DH.png";

const Footer = () => {
  return (
    <footer style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"50px"}}>
      <div style={{display:"flex", alignItems:"center"}}>
        <p>Powered by</p>
        <img src={logo} alt="DH-logo" style={{ width: "300px" }} />
      </div>
      <div style={{width:"200px", display: "flex", justifyContent:"space-between", gap:"20px", alignItems:"center"}}>
        <img src="../Images/ico-facebook.png" alt="facebook" style={{ width: "40px", filter:"invert(100%)" }} />
        <img src="../Images/ico-instagram.png" alt="instagram" style={{ width: "40px", filter:"invert(100%)" }} />
        <img src="../Images/ico-whatsapp.png" alt="whatsapp" style={{ width: "40px", filter:"invert(100%)" }} />
        <img src="../Images/ico-tiktok.png" alt="tiktok" style={{ width: "40px", filter:"invert(100%)" }} />
      </div>
      
    </footer>
  );
};

export default Footer;
