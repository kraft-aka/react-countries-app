import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, Button, ListGroup } from "react-bootstrap";
import "./UNFact.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const UNFact = ({ isUnMember, isNotUnMember }) => {
  const [show, setShow] = useState(false);
  const [showNotMembers, setShowNotMembers] = useState(false);

  if (!isUnMember || !isNotUnMember) {
    return <h2>Error: Data not available</h2>;
  }

  const dataSet = {
    labels: ["UN Members", "not Members"],
    datasets: [
      {
        label: "Number of countries",
        data: [isUnMember.length, isNotUnMember.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card className="text-center m-4 card-container" style={{ width: "40%" }}>
      <Card.Header className="fs-3">UN Members and Not Members</Card.Header>
      <Card.Body style={{ width: "500px" }}>
        <div className="chart-container">
          {
            <Pie
              data={dataSet}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          }
        </div>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Button
            onClick={() => setShow((prev) => !prev)}
            style={{
              backgroundColor: "rgba(255, 99, 132, 1)",
              border: "1px solid rgba(255, 99, 132, 1)",
            }}
          >
            {show ? "Hide" : "Show Members"}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            onClick={() => setShowNotMembers((prev) => !prev)}
            style={{
              backgroundColor: "rgba(54, 162, 235, 1)",
              border: "1px solid rgba(54, 162, 235, 1)",
            }}
          >
            {showNotMembers ? "Hide" : "Show Not Members"}
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex align-items-center justify-content-start flex-wrap">
        {isUnMember &&
          show &&
          isUnMember.map((i) => (
            <Button
              className="m-2 p-1"
              variant="outline-success"
              key={i?.name?.common}
            >
              {i?.name?.common}
            </Button>
          ))}
        <br />
        {isNotUnMember &&
          showNotMembers &&
          isNotUnMember.map((i) => (
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

export default UNFact;
