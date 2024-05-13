import { useState, useContext } from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountriesRoll.module.css";
import { DataContext } from "../../providers/DataProvider";
import { v4 as uuid } from "uuid";

const CountriesRoll = () => {
  const [name, setName] = useState("");
  const { countriesData, isLoading, errorMsg } = useContext(DataContext);

  // filtered list of countries data
  const filteredData = countriesData.filter((data) =>
    data?.name?.common.toLowerCase().includes(name)
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <form>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          placeholder="type here the country's name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      {!filteredData && !countriesData && <p>Not found</p>}
      <div className={styles["countries-container"]}>
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((country) => (
            <CountryCard
              key={uuid()}
              name={country?.name?.common}
              city={country?.capital}
              flag={country?.flags.svg}
              id={country?.name?.common}
            />
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </>
  );
};

export default CountriesRoll;
