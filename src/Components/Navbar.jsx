import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <div class={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <h1>
          <span>D</span>H Odonto
        </h1>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
          <li>
            <button>
              <span>🌙</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;