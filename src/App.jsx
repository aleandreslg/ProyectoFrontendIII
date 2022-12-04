import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import styles from "./App.module.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          
          {/* <h1>App</h1> */}
          <BrowserRouter>
            <Navbar className={styles.nav}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/favs" element={<Favs/>}/>
              <Route path="/detail" element={<Detail/>}/>
              <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
          
      </div>
  );
}

export default App;
