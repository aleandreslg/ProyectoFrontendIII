import React from "react";
import { Link } from "react-router-dom";
import imagenDoctor from "../Routes/doctor.jpg";
import styles from "./Card.module.css";

const Card = ({ odontologo }) => {
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className={styles.card}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src={imagenDoctor} alt="Imagen doctor" />
      <Link to={`/odontologo/${odontologo.id}`}><h2>{odontologo.name}</h2></Link> 
      <h4>{odontologo.username}</h4>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
