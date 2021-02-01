import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

import './Heading.css';

export type Heading = {
  children?: ReactNode;
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'div'
    | 'span'
    | 'caption'
    | 'figcaption';
  fontSize?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  className?: string;
  variant?: 'primary';
};

const variants = schema.components.heading.variants;
const DEFAULT = schema.components.heading.DEFAULT;
const headingClasses = ({ variant }: Heading) => {
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Heading = ({
  children,
  as = `div`,
  className,
  variant,
  fontSize = `4`,
}: Heading) => {
  if (!children) return null;
  const Tag = `${as}`;
  const size = `text-size-${fontSize}`;
  return (
    <Tag className={`${size} ${headingClasses({ variant })} ${className}`}>
      {children}
    </Tag>
  );
};
