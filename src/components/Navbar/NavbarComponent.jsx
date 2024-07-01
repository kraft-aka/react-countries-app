import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import  "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="md"
      fixed="top"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Countries App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/game">
            Play Game
          </Nav.Link>
          <Nav.Link as={Link} to="/population">
            Population
          </Nav.Link>
          <Nav.Link as={Link} to="/facts">
            Some Facts
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="https://github.com/kraft-aka/react-countries-app"
            target="_blank"
          >
            Code
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-success"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
