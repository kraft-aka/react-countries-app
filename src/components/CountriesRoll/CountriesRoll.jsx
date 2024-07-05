import { useState, useContext, useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import  "./CountriesRoll.css";
import { DataContext } from "../../providers/DataProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container fluid>
      <Form style={{ width: "100%" }}>
        <Form.Group className="m-5 p-0">
          <Form.Label htmlFor="search" className="fs-5 fw-bolder">
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
        <Row xl={5} lg={4} md={3} className="m-3 gx-5 gy-5 p-3">
          {displayedData.map((country) => (
            <Col className="d-flex p-2 justify-content-md-center" key={country?.name?.common}>
              <CountryCard
                key={country?.name?.common}
                name={country?.name?.common}
                city={country?.capital || country?.region }
                flag={country?.flags.svg}
                id={country?.name?.common}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default CountriesRoll;
