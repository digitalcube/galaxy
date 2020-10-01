/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode, FC } from 'react';
import { Box } from 'theme-ui';

type Content = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
  sx?: object;
};

export const Content: FC<Content> = ({ align, children, sx }: Content) => {
  if (!children) return null;
  return (
    <Box
      sx={{
        a: {
          color: 'primary',
        },
        textAlign: align,
        '& > *': {
          mt: 0,
        },
        '& > :not(:first-child)': {
          mt: 3,
          mb: 0,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
