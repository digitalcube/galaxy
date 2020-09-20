/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Container as ThemeUIContainer } from 'theme-ui';

type Container = {
  size?: string;
  children?: ReactNode;
  align?: 'left' | 'right';
};

export const Container: FC<Container> = ({
  size,
  children,
  align,
}: Container) => {
  return (
    <ThemeUIContainer
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
