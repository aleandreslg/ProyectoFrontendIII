import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from "axios"
import styles from "./Home.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odontologos, setOdontologos] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res => setOdontologos(res.data))
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className={styles.cardgrid}>
        {/* Aqui deberias renderizar las cards */}
        
        {
          odontologos.map((odontologo)=>{
            return(
              <Card odontologo="odontologo" key={odontologo.id}/>
            )
          })
        }

      </div>
    </main>
  )
}

export default Home