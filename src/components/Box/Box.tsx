/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Box as ThemeUIBox } from 'theme-ui';

type Box = {
  sx?: object;
  children?: ReactNode;
};

export const Box: FC<Box> = ({ sx, children }: Box) => {
  return (
    <ThemeUIBox
      sx={{
        ...sx,
      }}
    >
      {children}
    </ThemeUIBox>
  );
};
