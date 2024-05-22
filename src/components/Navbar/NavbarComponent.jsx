import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./Navbar.module.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand='md' fixed="top" >
      <Container>
        <Navbar.Brand href='#'>Countries App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/"></Link>Home</Nav.Link>
          <Nav.Link><Link to="/game"></Link>Play Game</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
