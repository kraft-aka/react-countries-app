import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { DataContext } from "../../providers/DataProvider";
import { useNavigate } from "react-router-dom";
import UNFact from "../../components/Facts/UNFact/UNFact";
import ContinentFact from "../../components/Facts/ContinentFact/ContinentFact";
import AccessToOceanFact from "../../components/Facts/AccessToOceanFact/AccessToOceanFact";

const FactsData = () => {
  const { countriesData } = useContext(DataContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("..", { relative: "path" });
  };

  // data of UN Member countries and those which are not members
  const isUnMember = countriesData.filter((country) => country.unMember);
  const isNotUnMember = countriesData.filter(
    (country) => country.unMember !== true
  );

  // data for continent
  const countriesInAsia = countriesData.filter(
    (country) => country.continents == "Asia"
  );
  const countriesInEurope = countriesData.filter(
    (country) => country.continents == "Europe"
  );
  const countriesInNorthAmerica = countriesData.filter(
    (country) => country.continents == "North America"
  );
  const countriesInSouthAmerica = countriesData.filter(
    (country) => country.continents == "South America"
  );
  const countriesInAfrica = countriesData.filter(
    (country) => country.continents == "Africa"
  );
  const countriesInOceania = countriesData.filter(
    (country) => country.continents == "Oceania"
  );
  const countriesInAntarctica = countriesData.filter(
    (country) => country.continents == "Antarctica"
  );

  // data of landlocked and have an access to the ocean or sea countries

  const isNotLandlocked = countriesData.filter(
    (country) => !country.landlocked
  );
  const isLandlocked = countriesData.filter((country) => country.landlocked);

  // array of languages
  const langs = countriesData.flatMap(({ languages }) => languages);

  //console.log(countriesData);
  return (
    <Container fluid>
      <Card className="m-3 p-2 pb-5">
        <Card.Header className="p-1 m-0">
          <Card.Title className="m-4 text-center fs-1">
            Some numeric data about countries
          </Card.Title>
        </Card.Header>
        <Row>
          <Col lg={4}>
            <UNFact isUnMember={isUnMember} isNotUnMember={isNotUnMember} />
          </Col>
          <Col lg={4}>
            <ContinentFact
              countriesInAsia={countriesInAsia}
              countriesInEurope={countriesInEurope}
              countriesInNorthAmerica={countriesInNorthAmerica}
              countriesInSouthAmerica={countriesInSouthAmerica}
              countriesInOceania={countriesInOceania}
              countriesInAfrica={countriesInAfrica}
              countriesInAntarctica={countriesInAntarctica}
            />
          </Col>
          <Col lg={4}>
            <AccessToOceanFact
              isNotLandlocked={isNotLandlocked}
              isLandlocked={isLandlocked}
            />
          </Col>
        </Row>

        <Button
          onClick={goBack}
          className="m-4"
          variant="success"
          style={{ width: "100px", alignText: "center" }}
        >
          Go Back
        </Button>
      </Card>
    </Container>
  );
};

export default FactsData;
