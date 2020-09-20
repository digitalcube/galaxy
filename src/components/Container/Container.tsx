/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Container as ThemeUIContainer } from 'theme-ui';

type Container = {
  as?: any;
  size?: string;
  children?: ReactNode;
  align?: 'left' | 'right';
};

export const Container: FC<Container> = ({
  size,
  children,
  align,
  as,
}: Container) => {
  return (
    <ThemeUIContainer
      as={as}
      sx={{
        mr: align === `right` ? `0` : null,
        ml: align === `left` ? `0` : null,
      }}
      variant={size}
    >
      {children}
    </ThemeUIContainer>
  );
};
