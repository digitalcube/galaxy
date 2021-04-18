import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { css } from '@galaxy/core';
import { Tag } from '@galaxy/core';
import { headingTheme } from './Heading.galaxy';
import './Heading.css';

const { heading } = headingTheme;

export const Heading: FC<HeadingProps> = ({
  text,
  children,
  as,
  className,
  fontSize,
  variant,
  fontWeight,
  variants,
  htmlFor,
}) => {
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
      {text}
      {children}
    </Tag>
  );
};

export type HeadingProps = PropsWithChildren<{
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
  variant?: string;
  variants?: typeof heading;
  htmlFor?: string;
}>;

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 'regular',
  as: 'div',
  variants: heading,
  className: '',
  htmlFor: '',
};
