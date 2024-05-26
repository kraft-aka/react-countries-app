import React, { useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Country.module.css";

const Country = () => {
  const { countriesData } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const mapRef = useRef();

  const navigateBack = () => navigate(-1);

  // find one country match id with country name
  const findOneCountry = countriesData.find(
    (country) => country.name?.common === id
  );

  const lat = findOneCountry?.capitalInfo?.latlng[0];
  const long = findOneCountry?.capitalInfo?.latlng[1];

  if (!findOneCountry) {
    return null;
  }

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
                {findOneCountry?.area?.toLocaleString()}m2
              </Card.Title>
              <Card.Title className="fs-2">
                <span className="badge text-secondary fs-5">Population:</span>
                {findOneCountry?.population.toLocaleString()}
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
                style={{ height: "5rem", width: "auto" }}
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
            <Card.Body style={{ width: "30rem" }}>
              <Card.Title className="text-center">Map</Card.Title>
              <MapContainer
                center={[lat, long]}
                zoom={7}
                ref={mapRef}
                style={{ height: "700px", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                >
                  <Marker position={[lat, long]}>
                    <Popup>{findOneCountry?.capital} - Capital City</Popup>
                  </Marker>
                </TileLayer>
              </MapContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
