import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch} = useContext(ContextGlobal)
  console.log(state);
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar} style={{backgroundColor: state.bgColor, color: state.ftColor}}>
      <Link 
        to="/" 
        className={styles.titulo} 
        style={{color:state.ftColor}}>
        <h1><span>D</span>H Odonto</h1>
      </Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ul >
          <li >
            <Link to="/" className={styles.link} style={{color: state.ftColor, fontSize:"1.2rem", fontWeight:"bold"}}>Home</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.linkNav} style={{color: state.ftColor, fontSize:"1.2rem", fontWeight:"bold"}}>Contact</Link>
          </li>
          <li>
            <Link to="/favs" style={{color: state.ftColor, fontSize:"1.2rem", fontWeight:"bold"}}>Favs</Link>
          </li>
          <li>
          <button 
            className={styles.buttonTheme} 
            style={{backgroundColor: state.ftColor, color: state.bgColor}} 
            onClick={() => dispatch ({bgFlag: state.bgFlag})}>{state.bgFlag === "DARK" ? "☀" :"🌙"}
          </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
