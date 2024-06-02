import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountryCard.css";

const CountryCard = ({ name, city, flag, id }) => {
  return (
    <Link
      to={`countries/${id}`}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <Card
        border="secondary"
        variant="info"
        className="card-c text-center m-2"
      >
        <Card.Img
          variant="top"
          src={flag}
          alt="image of country's flag"
          style={{ height: "10rem", width: "auto" }}
          loading="lazy"
        />
        <Card.Body className="mt-3">
          <Card.Title className="fs-3 fw-bolder">{name}</Card.Title>
          <Card.Subtitle className="fs-5 mt-1">{city}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};


export default CountryCard;
