import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

import './Button.css';

const variants = schema.components.button.variants;
const DEFAULT = schema.components.button.DEFAULT;
const buttonClasses = (variant) => {
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${variants.ghost}`]: variant === 'ghost',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

const Button = ({ variant, children }) => (
  <button className={buttonClasses(variant)}>{children}</button>
);

Button.propTypes = {
  variant: PropTypes.string,
};

export default Button;
