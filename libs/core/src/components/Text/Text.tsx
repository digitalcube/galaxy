/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode, FC } from 'react';
import { Text as ThemeUIText } from 'theme-ui';

type Text = {
  children?: ReactNode;
  sx?: object;
};

export const Text: FC<Text> = ({ children, sx }: Text) => {
  if (!children) return null;
  return <ThemeUIText sx={{ ...sx }}>{children}</ThemeUIText>;
};
