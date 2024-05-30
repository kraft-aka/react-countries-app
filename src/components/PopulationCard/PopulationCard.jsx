import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './PopulationCard.css'

const PopulationCard = ({ name, population, flag, number }) => {
  return (
    <Card style={{ width: "10rem" }} className="m-3 card-c">
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center fw-bolder text-success " >
          {population.toLocaleString()}
        </Card.Text>
        <Card.Title
          className="text-center text-muted fw-light bg-light"
          style={{
      
            borderRadius: "2rem",
            width: "auto",
            height: "auto",
            padding: ".5rem",
            textAlign: "center",
          }}
        >
          {number + 1}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PopulationCard;
