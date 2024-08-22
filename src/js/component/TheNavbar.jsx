import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const TheNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="TheNavbar">
      <Navbar.Brand href="#home">Top Games</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navLinks ml-auto">
          <Nav.Link href="#home" className="TheNavLink">
            Home
          </Nav.Link>
          <Nav.Link href="#A-Z of Games" className="TheNavLink">
            A-Z of Games
          </Nav.Link>
          <Nav.Link href="#Consoles" className="TheNavLink">
            Consoles
          </Nav.Link>
          <Nav.Link href="#Reviews" className="TheNavLink">
            Reviews
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

TheNavbar.propTypes = {
  webName: PropTypes.string,
};
