import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css"


// import React, {useParams, useEffect, useState} from 'react';

// import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    }, [id]);

  return (
    <div className={styles.mainContainer}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <main className={styles.main}>
        <div className={styles.field}><b>Name</b></div>
        <div className={styles.field}><b>Email</b></div>
        <div className={styles.field}><b>Phone</b></div>
        <div className={styles.field}><b>Website</b></div>
        <div className={styles.field}>{odontologoDetalle.name}</div>
        <div className={styles.field}>{odontologoDetalle.email}</div>
        <div className={styles.field}>{odontologoDetalle.phone}</div>
        <div className={styles.field}>{odontologoDetalle.website}</div>
      </main>
    </div>
  )
}

export default Detail