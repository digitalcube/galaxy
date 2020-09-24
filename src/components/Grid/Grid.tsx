import React, { ReactNode } from 'react';
import { Grid as ThemeUIGrid, GridProps } from 'theme-ui';

export type Grid = {
  columns?: any;
  children?: ReactNode;
};

export const Grid = ({ children, columns }: Grid) => {
  if (!children) return null;
  return <ThemeUIGrid columns={columns}>{children}</ThemeUIGrid>;
};
