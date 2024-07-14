import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, Button, ListGroup } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const AccessToOceanFact = ({ isNotLandlocked, isLandlocked }) => {

  const [showLandlocked, setShowLandlocked] = useState(false)
  const [showCoastal, setShowCoastal] = useState(false)

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
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Button
            onClick={() => setShowCoastal((prev) => !prev)}
            style={{
              backgroundColor: "rgba(255, 99, 132, 1)",
              border: "1px solid rgba(255, 99, 132, 1)",
            }}
          >
            {showCoastal ? "Hide" : "Show Coastal Countries"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowLandlocked((prev) => !prev)}
            style={{
              backgroundColor: "rgba(54, 162, 235, 1)",
              border: "1px solid rgba(54, 162, 235, 1)",
            }}
          >
            {showLandlocked ? "Hide" : "Show Landlocked Countries"}
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex align-items-center justify-content-start flex-wrap">
        {isNotLandlocked &&
          showCoastal &&
          isNotLandlocked.map((i) => (
            <Button
              className="m-2 p-1"
              variant="outline-success"
              key={i?.name?.common}
            >
              {i?.name?.common}
            </Button>
          ))}
        <br />
        {isLandlocked &&
          showLandlocked &&
          isLandlocked.map((i) => (
            <Button
              className="m-2 p-1"
              variant="outline-success"
              key={i?.name?.common}
            >
              {i?.name?.common}
            </Button>
          ))}

      </Card.Footer>
    </Card>
  );
};

export default AccessToOceanFact;
