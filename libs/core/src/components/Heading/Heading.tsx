/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

export type Heading = {
  children?: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  variant?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  sx?: object;
};

export const Heading = ({ children, as, size, sx }: Heading) => {
  if (!children) return null;
  return <h1>{children}</h1>;
};
