import React, { FC, ReactNode } from 'react';
import { Button as ThemeUIButton } from 'theme-ui';

type Button = {
  children?: ReactNode;
  kind?: string;
};

export const Button: FC<Button> = ({ children, kind = 'primary' }: Button) => {
  if (!children) return null;
  return <ThemeUIButton variant={kind}>{children}</ThemeUIButton>;
};
