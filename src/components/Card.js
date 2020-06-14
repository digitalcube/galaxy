// src/components/DeployList.js

import React from "react";
import PropTypes from "prop-types";
import { Card as ReactstrapCard, CardBody, CardTitle } from "reactstrap";

function Card({ children, title }) {
  return (
    <ReactstrapCard>
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
      {children}
    </ReactstrapCard>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
