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

  const lat = findOneCountry?.capitalInfo?.latlng[0];
  const long = findOneCountry?.capitalInfo?.latlng[1];

  if (!findOneCountry) {
    return null;
  }

  // icon for marker location
  const countryIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [38, 38],
  });

  console.log(findOneCountry);

  return (
    <Container fluid className="country-container mt-5">
      <Card
        className="shadow-sm bg-white rounded p-2"
        style={{ width: "70vw", margin: "0 auto" }}
      >
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Row>
            <Col md={1}>
              <Card.Title className="text-center fs-1 m-2">Details</Card.Title>

              <Table responsive="lg" striped bordered hover>
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
                    <td className="fw-bold">{findOneCountry?.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td className="fw-bold">
                      {findOneCountry?.area?.toLocaleString()}m2
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
                    <td className="fw-bold">
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
                </tbody>
              </Table>
              <Image
                rounded
                src={findOneCountry?.flags.svg}
                alt="image of country's flag"
                style={{ height: "10rem", width: "auto" }}
                className="mt-5"
              />

              <Button className="mt-5 m-4" variant="success" onClick={navigateBack}>
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
