/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Box as ThemeUIBox } from 'theme-ui';

type Box = {
  sx?: object;
  children?: ReactNode;
  variant?: string;
};

export const Box: FC<Box> = ({ sx, children, variant }: Box) => {
  return (
    <ThemeUIBox
      variant={variant}
      sx={{
        ...sx,
      }}
    >
      {children}
    </ThemeUIBox>
  );
};
