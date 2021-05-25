import React, { ReactNode } from 'react';
import { css } from '@galaxy/core';
import { Tag } from '@galaxy/core';
import { headingTheme } from './heading.galaxy';
const { heading } = headingTheme;

/* eslint-disable-next-line */
export interface HeadingProps {
  text?: string | ReactNode;
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'div'
    | 'li'
    | 'span'
    | 'caption'
    | 'label'
    | 'figcaption';
  fontSize?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  fontWeight?: 'regular' | 'strong';
  className?: string;
  variants?: any;
  variant?: string;
  htmlFor?: string;
  children?: ReactNode;
}

export function Heading(props: HeadingProps) {
  const {
    text,
    children,
    as,
    className,
    fontSize,
    variant,
    fontWeight,
    variants,
    htmlFor,
  } = props;
  if (!text) return null;
  const classNames = css({
    variant: `${variant}`,
    variants: variants,
  });

  const size = fontSize ? `text-size-${fontSize}` : '';
  const weight = fontWeight ? `font-${fontWeight}` : '';

  return (
    <Tag
      as={as}
      htmlFor={htmlFor}
      className={`${size} ${weight} ${classNames} ${className}`}
    >
      {text && children ? <span>{text}</span> : text}
      {text && children ? <span>{children}</span> : children}
    </Tag>
  );
}

export default Heading;

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 'regular',
  as: 'div',
  variants: heading,
  className: '',
  htmlFor: '',
};
