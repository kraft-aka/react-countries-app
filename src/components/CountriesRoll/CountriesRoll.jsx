import { useState, useContext, useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountriesRoll.module.css";
import { DataContext } from "../../providers/DataProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const CountriesRoll = () => {
  const { countriesData, isLoading } = useContext(DataContext);
  const [name, setName] = useState("");
  const [itemsToShow, setItemsToShow] = useState(12);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      countriesData.filter((data) =>
        data?.name?.common.toLowerCase().includes(name.toLowerCase())
      )
    );
  }, [name, countriesData]);

  const loadMoreCountries = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const displayedData = filteredData.slice(0, itemsToShow);

  if (isLoading) {
    return (
      <Spinner
        animation="border"
        variant="secondary"
        size="lg"
        className="m-5"
        style={{ position: "relative", left: "50%" }}
      />
    );
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
            placeholder="Type here the country name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
      </Form>
      <InfiniteScroll
        dataLength={displayedData.length}
        next={loadMoreCountries}
        hasMore={itemsToShow < filteredData.length}
        loader={<Spinner animation="border" variant="success" />}
      >
        {!filteredData.length && <p>Not found</p>}
        <div className={styles["countries-container"]}>
          {displayedData.map((country) => (
            <CountryCard
              key={country?.name?.common}
              name={country?.name?.common}
              city={country?.capital}
              flag={country?.flags.svg}
              id={country?.name?.common}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CountriesRoll;
