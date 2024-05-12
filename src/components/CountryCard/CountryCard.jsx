import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";

const CountryCard = ({ name, city, flag,id }) => {

  
 
  return (
    <div className={styles['card-container']}>
      <header className={styles["card-header"]}>
        <h2 className={styles["card-title"]} >{name}</h2>
        <h4 className={styles["card-city"]}>{city}</h4>
      </header>
      <img src={flag} alt="image of country's flag" className={styles["card-flag"]} />
      <Link to={`countries/${id}`} className={styles["card-btn"]}>Learn More...</Link>
    </div>
  );
};

export default CountryCard;
