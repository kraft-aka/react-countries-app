import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./Navbar.module.css";

const NavbarComponent = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/game">Play Game</NavLink>
    </nav>
  );
};

export default NavbarComponent;
