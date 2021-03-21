import React, { ReactNode, FC } from 'react';
import { Section, css } from '@galaxy/core';
import { guideTheme } from './Guide.galaxy';
const { guide } = guideTheme;

export const Guide: FC<Guide> = ({ children, className, variants }: Guide) => {
  const guideCss = css({
    variants: variants,
  });

  return <Section className={`${guideCss} ${className}`}>{children}</Section>;
};

export type Guide = {
  children?: ReactNode;
  className?: string;
  variants?: typeof guide;
};

Guide.defaultProps = {
  variants: guide,
};
