import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/odontologo/:id" element={<Detail/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


