/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Container as ThemeUIContainer } from 'theme-ui';

type Container = {
  as?: any;
  size?: string;
  children?: ReactNode;
  align?: 'left' | 'right';
  sx?: object;
};

export const Container: FC<Container> = ({
  size,
  children,
  align,
  as,
  sx,
}: Container) => {
  return (
    <ThemeUIContainer
      as={as}
      variant={size}
      sx={{
        mr: align === `right` ? `0` : null,
        ml: align === `left` ? `0` : null,
        ...sx,
      }}
    >
      {children}
    </ThemeUIContainer>
  );
};
