import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;

    if (scrollPercentage > 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Nav.Link
            as={Link}
            to="https://github.com/kraft-aka/react-countries-app"
            target="_blank"
          >
            Code
          </Nav.Link>
        </Nav>
        {showButton && (
          <Button
            variant="outline-success"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
