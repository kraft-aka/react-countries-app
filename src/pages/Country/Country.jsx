import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Image,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/location-pin.png";
import "./Country.css";

const Country = () => {
  const { countriesData } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  // find one country match id with country name
  const findOneCountry = countriesData.find(
    (country) => country.name?.common === id
  );

  const lat = findOneCountry?.latlng[0];
  const long = findOneCountry?.latlng[1];

  if (!findOneCountry) {
    return null;
  }

  // icon for marker location
  const countryIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [38, 38],
  });

  // parse country currency's name
  const getCurrencyIndex = JSON.stringify(findOneCountry?.currencies).indexOf(
    "name"
  );
  const getCommasIndex = JSON.stringify(findOneCountry?.currencies).indexOf(
    ","
  );
  const getCurrencyName = JSON.stringify(findOneCountry?.currencies).slice(
    16,
    getCommasIndex - 1
  );

  // parse currency's symbol
  const getCurrencySymbolIndex = JSON.stringify(
    findOneCountry?.currencies
  ).indexOf("symbol");
  const getSymbolIndex = JSON.stringify(findOneCountry?.currencies).indexOf(
    "}"
  );
  const getCurrencySymbol = JSON.stringify(findOneCountry?.currencies).slice(
    getCurrencySymbolIndex + 9,
    getSymbolIndex - 1
  );

  console.log(findOneCountry);

  return (
    <Container fluid className="country-container mt-5">
      <Card
        className="shadow-sm bg-white rounded p-2 mx-auto"
        style={{ margin: "0 auto", maxWidth: "90vw" }}
      >
        <Card.Body
          className="d-flex flex-column justify-content-between align-items-center"
          style={{ minWidth: "0" }}
        >
          <Row className="d-flex w-60">
            <Col>
              <Card.Title className="text-center fs-1 m-2">Details</Card.Title>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Key Points</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Country Name</td>
                    <td className="fw-bold">{id}</td>
                  </tr>
                  <tr>
                    <td>Capital City</td>
                    <td className="fw-bold">
                      {findOneCountry?.capital || findOneCountry?.name?.common}
                    </td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td className="fw-bold">
                      {findOneCountry?.area?.toLocaleString()} km2
                    </td>
                  </tr>
                  <tr>
                    <td>Population</td>
                    <td className="fw-bold">
                      {findOneCountry?.population?.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Region</td>
                    <td className="fw-bold">{findOneCountry?.continents[0]}</td>
                  </tr>
                  <tr>
                    <td>Borders </td>
                    <td
                      className="fw-bold"
                      style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                    >
                      {findOneCountry?.borders?.toString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td className="fw-bold">
                      {findOneCountry &&
                        Object.values(findOneCountry?.languages).map((lang) => (
                          <div key={lang}>{lang}</div>
                        ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Member of UN </td>
                    <td
                      className="fw-bold"
                      style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                    >
                      {findOneCountry?.unMember ? "Member" : "Not a member"}
                    </td>
                  </tr>
                  <tr>
                    <td>Abbreviated Version </td>
                    <td
                      className="fw-bold"
                      style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                    >
                      {findOneCountry?.cca3}
                    </td>
                  </tr>
                  <tr>
                    <td>Currency </td>
                    <td
                      className="fw-bold"
                      style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                    >
                      {getCurrencyName}|{getCurrencySymbol}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Image
                rounded
                src={findOneCountry?.flags.svg}
                alt="image of country's flag"
                style={{ height: "10rem", width: "auto" }}
                className="mt-5"
              />

              <Button
                className="mt-5 m-4"
                variant="success"
                onClick={navigateBack}
              >
                Back to Home
              </Button>
            </Col>
            <Col>
              <MapContainer
                center={[lat, long]}
                zoom={7}
                style={{
                  height: "500px",
                  width: "500px",
                  marginLeft: "30px",
                  marginTop: "60px",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>
                <Marker position={[lat, long]} icon={countryIcon}>
                  <Popup>{findOneCountry?.capital} - Capital City</Popup>
                </Marker>
              </MapContainer>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Country;
