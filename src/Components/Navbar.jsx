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
      <nav className={styles.navbar} style={{backgroundColor: state.bgColor, color: state.ftColor, width:"100%"}}>
      <Link to="/" style={{textDecoration:"none", color:state.ftColor}}>
        <h1 style={{fontSize:"40px"}}><span>D</span>H Odonto</h1>
      </Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ul >
          <li >
            <Link to="/" style={{color: state.ftColor}}>Home</Link>
          </li>
          <li>
            <Link to="/contact" style={{color: state.ftColor}}>Contact</Link>
          </li>
          <li>
            <Link to="/favs" style={{color: state.ftColor}}>Favs</Link>
          </li>
          <li>
          <button className="dark" onClick={() => {console.log(state.bgFlag) ;dispatch ({bgFlag: state.bgFlag})}}>🌙</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
