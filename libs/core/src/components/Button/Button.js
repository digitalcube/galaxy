import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const buttonClasses = variant =>
  classNames({
    "bg-shifter-purple-primary hover:bg-shifter-purple-600": !variant || variant === "primary",
    "text-white font-bold py-2 px-4 rounded": true
  });

const Button = ({ variant, children }) => (
  <button className={buttonClasses(variant)}>{children}</button>
);

Button.propTypes = {
  variant: PropTypes.string
};

export default Button;
