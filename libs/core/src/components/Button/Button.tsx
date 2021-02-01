import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

import './Button.css';

export type Button = {
  children?: ReactNode;
  as?: 'button' | 'a' | 'div' | 'span';
  variant?: 'primary' | 'danger' | 'white' | 'success' | 'ghost';
};

const variants = schema.components.button.variants;
const DEFAULT = schema.components.button.DEFAULT;
const buttonClasses = ({ variant }: Button) => {
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

export const Button: FC<Button> = ({
  variant,
  children,
  as = 'button',
}: Button) => {
  const Tag = `${as}`;
  return <Tag className={buttonClasses({ variant })}>{children}</Tag>;
};
