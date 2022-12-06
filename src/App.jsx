import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import styles from "./App.module.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



function App() {
  return (
      <div className="App">
          
          <h1>App</h1>
            {/* <Outlet/> */}
            <Navbar className={styles.nav}/>
            <Footer/>
      </div>
  );
}

export default App;
