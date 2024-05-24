import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Country.module.css";

const Country = () => {
  const { countriesData } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // find one country match id with country name
  const findOneCountry = countriesData.find(
    (country) => country.name?.common === id
  );

  const navigateBack = () => navigate(-1);

  console.log(findOneCountry);

  return (
    <Container fluid className="country-container mt-5">
      <Row>
        <Col>
          <Card className="shadow-sm bg-white rounded">
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <Card.Title className="text-center fs-1 m-2">Details</Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Country name:</span>{" "}
                {id}
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">
                  Capitail City:
                </span>
                {findOneCountry?.capital}
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Area:</span>
                {findOneCountry?.area}m2
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Population:</span>
                {findOneCountry?.population}
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Region:</span>
                {findOneCountry?.continents[0]}
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Borders with:</span>
                {findOneCountry?.borders?.map((land) => (
                  <li key={land}>{land}</li>
                ))}
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Languages:</span>
                {findOneCountry &&
                  Object.values(findOneCountry?.languages).map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
              </Card.Title>
              <Image
                rounded
                src={findOneCountry?.flags.svg}
                alt="image of country's flag"
                style={{ height: "10rem", width: "auto" }}
                className="m-3"
              />

              <Button variant="primary" onClick={navigateBack}>
                Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Map</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
