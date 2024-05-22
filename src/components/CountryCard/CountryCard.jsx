import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountryCard.css";

const CountryCard = ({ name, city, flag, id }) => {
  return (
    <Card
      style={{ width: "18rem", height: "25rem" }}
      border="secondary"
      variant="info"
      className="card text-center"
    >
      <Card.Img
        variant="top"
        src={flag}
        alt="image of country's flag"
        style={{ height: "10rem", width: "auto" }}
      />
      <Card.Body className="ml-5 md mt-3">
        <Card.Title className="fs-3 fw-bolder">{name}</Card.Title>
        <Card.Subtitle className="fs-5 mt-1">{city}</Card.Subtitle>
      </Card.Body>
      <Link
        to={`countries/${id}`}
        variant="primary"
        style={{ color: "inherit" }}
      >
        <Button variant="primary" className="mb-3">
          Learn more
        </Button>
      </Link>
    </Card>
  );
};

export default CountryCard;
