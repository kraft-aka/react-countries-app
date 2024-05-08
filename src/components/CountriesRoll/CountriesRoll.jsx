import { useContext } from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountriesRoll.module.css";
import { DataContext } from '../../providers/DataProvider'
import { v4 as uuid } from 'uuid'


const CountriesRoll = () => {
  const { countriesData, isLoading, errorMsg } = useContext(DataContext);


  console.log(countriesData);

  return (
    <div className={styles["countries-container"]}>
      {countriesData && countriesData.length > 0 ? (countriesData.map((country) => (
        <CountryCard
          key={uuid()}
          name={country?.name?.common}
          city={country?.capital}
          flag={country?.flags.svg}
        />
      ))) : (<h2>loading...</h2>)}
    </div>
  );
};

export default CountriesRoll;
