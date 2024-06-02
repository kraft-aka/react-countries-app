import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  const [showButton, setShowButton] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      expand="md"
      fixed="top"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      expanded={isNavExpanded}
    >
      <Container>
        <Navbar.Brand href="/">Countries App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/game" onClick={handleNavClick}>
              Play Game
            </Nav.Link>
            <Nav.Link as={Link} to="/population" onClick={handleNavClick}>
              Population
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://github.com/kraft-aka/react-countries-app"
              target="_blank"
              onClick={handleNavClick}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
