import React, { FC, ReactNode } from 'react';
import { Badge as ThemeUIBadge } from 'theme-ui';

type Badge = {
  children?: ReactNode;
  kind?: string;
};

export const Badge: FC<Badge> = ({ children, kind = 'primary' }: Badge) => {
  if (!children) return null;
  return <ThemeUIBadge variant={kind}>{children}</ThemeUIBadge>;
};
