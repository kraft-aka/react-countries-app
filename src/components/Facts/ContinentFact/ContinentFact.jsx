import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, Button, ListGroup } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContinentFact = ({
  countriesInAsia,
  countriesInEurope,
  countriesInNorthAmerica,
  countriesInSouthAmerica,
  countriesInOceania,
  countriesInAfrica,
  countriesInAntarctica,
}) => {
  const [showAsia, setShowAsia] = useState(false);
  const [showEurope, setShowEurope] = useState(false);
  const [showAfrica, setShowAfrica] = useState(false);
  const [showNorthAmerica, setShowNorthAmerica] = useState(false);
  const [showSouthAmerica, setShowSouthAmerica] = useState(false);
  const [showOceania, setShowOceania] = useState(false);
  const [showAntarctica, setShowAntarctica] = useState(false);

  const dataSet = {
    labels: [
      "Asia",
      "Europe",
      "North America",
      "South America",
      "Africa",
      "Oceania",
      "Antarctica",
    ],
    datasets: [
      {
        label: "Number of countries",
        data: [
          countriesInAsia.length,
          countriesInEurope.length,
          countriesInNorthAmerica.length,
          countriesInSouthAmerica.length,
          countriesInAfrica.length,
          countriesInOceania.length,
          countriesInAntarctica.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255,215,0, 0.2)",
          "rgba(152,251,152, 0.2)",
          "rgba(127,255,0, 0.2)",
          "rgba(250,235,215, 0.2)",
          "rgba(148,0,211, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255,215,0, 1)",
          "rgba(152,251,152, 1)",
          "rgba(127,255,0, 1)",
          "rgba(250,235,215, 1)",
          "rgba(148,0,211, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card
      className="text-center m-1 card-container"
      style={{ width: "100%", height: "100%" }}
    >
      <Card.Header>
        <Card.Title className="fs-3">
          Number of Countries per Continent
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <section>
          {<Pie data={dataSet} options={{ responsive: true }} />}
        </section>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Button
            onClick={() => setShowAsia((prev) => !prev)}
            style={{
              backgroundColor: "rgba(255, 99, 132, 1)",
              border: "1px solid rgba(255, 99, 132, 1)",
            }}
          >
            {showAsia ? "Hide" : "Show Countries in Asia"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowEurope((prev) => !prev)}
            style={{
              backgroundColor: "rgba(54, 162, 235, 1)",
              border: "1px solid rgba(54, 162, 235, 1)",
            }}
          >
            {showEurope ? "Hide" : "Show countries in Europe"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowNorthAmerica((prev) => !prev)}
            style={{
              backgroundColor: "rgba(255,215,0, 1)",
              border: "1px solid rgba(255,215,0, 1)",
            }}
          >
            {showNorthAmerica ? "Hide" : "Show countries in North America"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowSouthAmerica((prev) => !prev)}
            style={{
              backgroundColor: "rgba(152,251,152, 1)",
              border: "1px solid rgba(152,251,152, 1)",
            }}
          >
            {showSouthAmerica ? "Hide" : "Show countries in South America"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowAfrica((prev) => !prev)}
            style={{
              backgroundColor: "rgba(127,255,0, 1)",
              border: "1px solid rgba(127,255,0, 1)",
            }}
          >
            {showAfrica ? "Hide" : "Show countries in Africa"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowOceania((prev) => !prev)}
            style={{
              backgroundColor: "rgba(250,235,215, 1)",
              border: "1px solid rgba(250,235,215, 1)",
            }}
          >
            {showOceania ? "Hide" : "Show countries in Oceania"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowAntarctica((prev) => !prev)}
            style={{
              backgroundColor: "rgba(148,0,211, 1)",
              border: "1px solid rgba(148,0,211, 1)",
            }}
          >
            {showAntarctica ? "Hide" : "Show countries in Antarctica"}
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex align-items-center justify-content-start flex-wrap">
        {countriesInAsia &&
          showAsia &&
          countriesInAsia.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
      
        {countriesInEurope &&
          showEurope &&
          countriesInEurope.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
       
        {countriesInNorthAmerica &&
          showNorthAmerica &&
          countriesInNorthAmerica.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
        
        {countriesInSouthAmerica &&
          showSouthAmerica &&
          countriesInSouthAmerica.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
          
          {countriesInAfrica &&
          showAfrica &&
          countriesInAfrica.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
         
          {countriesInOceania &&
          showOceania &&
          countriesInOceania.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
          <br />
          {countriesInAntarctica &&
          showAntarctica &&
          countriesInAntarctica.map((country) => (
            <Button
              key={country?.name?.common}
              className="m-2 p-1"
              variant="outline-success"
            >
              {country?.name?.common}
            </Button>
          ))}
      </Card.Footer>
    </Card>
  );
};

export default ContinentFact;
