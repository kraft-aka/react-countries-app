import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
import { Container, Card, Button } from "react-bootstrap";
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
    <Container className="country-container" style={{ width: '80rem', display: 'flex', flexDirection: 'column' }}>
      <Card className="shadow-sm bg-white rounded" >
         <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>Area</Card.Title>
          <Card.Text>{findOneCountry?.area}m2</Card.Text>
        
        {findOneCountry?.population}
        <button onClick={navigateBack}>Back</button>
          </Card.Body> 
      </Card>
    </Container>
  );
};

export default Country;
