import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Container, Col, Row } from 'react-bootstrap';
import PopulationCard from "../../components/PopulationCard/PopulationCard";

const Population = () => {
  const { countriesData } = useContext(DataContext);
  
  const sortedByPopulation = countriesData.sort(
    (a, b) => b?.population - a?.population
    );
    console.log(sortedByPopulation);
  return (
    <Container fluid className="mt-5">
      <Row lg={9} className="m-5" >

      {sortedByPopulation && sortedByPopulation.map((country,idx) => (
        <Col key={country?.name?.common}>
        <PopulationCard
          number={idx}
          key={country?.name?.common}
          name={country?.name.common}
          population={country.population}
          id={country?.name.common}
          flag={country.flags.svg}
          />
          </Col>
          ))}
          </Row>
    </Container>
  );
};

export default Population;
