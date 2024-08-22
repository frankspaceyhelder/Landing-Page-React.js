import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";


export const TheFooter = (props) => {
    return (
      <Navbar bg="dark" variant="dark" className="TheFooter" >
        <Navbar.Brand href="#Copyright">Copyright @ Top Games 2024</Navbar.Brand>
      </Navbar>
    );
  };
  
  TheFooter.propTypes = {
    webName: PropTypes.string,
  };
  