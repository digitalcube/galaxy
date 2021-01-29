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

const Button = ({ variant, children, as = 'button' }) => {
  const Tag = `${as}`;
  return <Tag className={buttonClasses(variant)}>{children}</Tag>;
};

Button.propTypes = {
  variant: PropTypes.string,
  as: PropTypes.string,
};

export default Button;
