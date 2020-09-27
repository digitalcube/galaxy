import React, { FC, ReactNode } from 'react';
import { Link as ThemeUILink } from 'theme-ui';

type Link = {
  href?: string;
  children?: ReactNode;
  kind?: string;
};

export const Link: FC<Link> = ({ href, children, kind }: Link) => {
  if (!children) return null;
  return (
    <ThemeUILink variant={kind} href={href}>
      {children}
    </ThemeUILink>
  );
};

Link.defaultProps = {
  kind: `a`,
};
