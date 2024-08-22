import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export const TheCards = (props) => {
  return (
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardsFooter">
          {props.footer}
          <Button variant="dark">Learn More</Button>
        </Card.Footer>
      </Card>
  );
};

TheCards.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  footer: PropTypes.string,
};
