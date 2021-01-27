/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import { Grid as ThemeUIGrid } from 'theme-ui';

export type Grid = {
  columns?: any;
  children?: ReactNode;
  sx?: object;
};

export const Grid = ({ children, columns, sx }: Grid) => {
  if (!children) return null;
  return (
    <ThemeUIGrid sx={{ ...sx }} columns={columns}>
      {children}
    </ThemeUIGrid>
  );
};
