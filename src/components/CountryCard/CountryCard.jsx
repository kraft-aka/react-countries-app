import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ name, city, flag }) => {
 
  return (
    <div className={styles['card-container']}>
      <header className={styles["card-header"]}>
        <h2 className={styles["card-title"]} >{name}</h2>
        <h4 className={styles["card-city"]}>{city}</h4>
      </header>
      <img src={flag} alt="image of country's flag" className={styles["card-flag"]} />
      <button className={styles["card-btn"]}>Learn More...</button>
    </div>
  );
};

export default CountryCard;
