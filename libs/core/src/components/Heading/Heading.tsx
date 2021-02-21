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
  fontWeight?: 'regular' | 'strong';
  className?: string;
  variant?: 'primary' | 'danger' | 'white' | 'success';
};

const headingClasses = ({ variant }: Heading) => {
  const variants = schema.components.heading.variants;
  const DEFAULT = schema.components.heading.DEFAULT;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.primary}`]: variant === 'primary',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
  };

  return classNames(classes);
};

export const Heading = ({
  children,
  as,
  className,
  fontSize,
  variant,
  fontWeight,
}: Heading) => {
  if (!children) return null;
  const Tag = `${as}`;
  const size = `text-size-${fontSize}`;
  const weight = `font-${fontWeight}`;
  return (
    <Tag
      className={`${size} ${weight} ${headingClasses({
        variant,
      })} ${className}`}
    >
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  fontSize: '4',
  as: 'div',
  className: '',
};
