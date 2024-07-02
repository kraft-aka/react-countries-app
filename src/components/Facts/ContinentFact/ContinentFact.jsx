import React from "react";
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
      className="text-center m-4 card-container"
      style={{ width: "100%", height: "100%" }}
    >
      <Card.Header>
        <Card.Title className="fs-3">
          Number of Countries per Continent
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <section>
          {<Pie data={dataSet}  options={{ responsive: true }} />}
        </section>
      </Card.Body>
    </Card>
  );
};

export default ContinentFact;
