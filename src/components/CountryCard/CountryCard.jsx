import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = ({ name, city, flag }) => {
 
  return (
    <div>
      <header>
        <h2>{name}</h2>
        <h4>{city}</h4>
      </header>
      <img src={flag} alt="image of country's flag" />
      <button>Learn More...</button>
    </div>
  );
};

export default CountryCard;
