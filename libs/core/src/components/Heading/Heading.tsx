import React, { ReactNode } from 'react';
import { css } from '@galaxy/core';
import { heading } from './galaxy.config';
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
  variant?: typeof heading.variants;
  variants?: typeof heading;
};

export const Heading = ({
  children,
  as,
  className,
  fontSize,
  variant,
  fontWeight,
  variants,
}: Heading) => {
  if (!children) return null;
  const classNames = css({
    variant: variant,
    variants: variants,
  });
  const Tag = `${as}`;
  const size = `text-size-${fontSize}`;
  const weight = `font-${fontWeight}`;
  return (
    <Tag className={`${size} ${weight} ${classNames} ${className}`}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  fontSize: '4',
  as: 'div',
  className: '',
};
