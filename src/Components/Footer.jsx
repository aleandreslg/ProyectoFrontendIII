import React, { useContext } from "react";
import logo from "../Images/DH.png";
import { ContextGlobal } from "./utils/global.context";
import styles from "./Footer.module.css";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div>
      <div className={styles.irArriba}>
        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </p>
      </div>
      <footer className={styles.footerContainer}>
        <div className={styles.divLogoDH}>
          <p>Powered by</p>
          <img
            src={logo}
            alt="DH-logo"
            className={styles.logo}
            style={{ filter: state.bgFlag === "DARK" ? "invert(100%)" : null }}
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            src="../Images/ico-facebook.png"
            alt="facebook"
            className={styles.icon}
            style={{ filter: state.bgFlag === "DARK" ? null : "invert(100%)" }}
          />
          <img
            src="../Images/ico-instagram.png"
            alt="instagram"
            className={styles.icon}
            style={{ filter: state.bgFlag === "DARK" ? null : "invert(100%)" }}
          />
          <img
            src="../Images/ico-whatsapp.png"
            alt="whatsapp"
            className={styles.icon}
            style={{ filter: state.bgFlag === "DARK" ? null : "invert(100%)" }}
          />
          <img
            src="../Images/ico-tiktok.png"
            alt="tiktok"
            className={styles.icon}
            style={{ filter: state.bgFlag === "DARK" ? null : "invert(100%)" }}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
