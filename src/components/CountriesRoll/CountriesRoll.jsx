import { useState, useContext } from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountriesRoll.module.css";
import { DataContext } from "../../providers/DataProvider";
import { v4 as uuid } from "uuid";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className={styles["container-roll"]}>
      <Form style={{ width: "64%" }}>
        <Form.Group className="m-3">
          <Form.Label htmlFor="search" className="fs-5">
            Search the Country
          </Form.Label>
          <Form.Control
            id="search"
            type="text"
            placeholder="type here the country's name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
      </Form>
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
    </div>
  );
};

export default CountriesRoll;
