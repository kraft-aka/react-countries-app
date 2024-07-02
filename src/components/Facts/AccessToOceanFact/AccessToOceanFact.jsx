import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, Button, ListGroup } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const AccessToOceanFact = ({ isNotLandlocked, isLandlocked }) => {
  const dataSet = {
    labels: ["not Landlocked", "Landlocked"],
    datasets: [
      {
        label: "Number of countries",
        data: [isNotLandlocked.length, isLandlocked.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
          Landlocked and Coastal Countries
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <section>
          {<Pie data={dataSet} options={{ responsive: true }} />}
        </section>
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  );
};

export default AccessToOceanFact;
