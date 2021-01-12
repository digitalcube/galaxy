import React, { FC, ReactNode } from 'react';
import { Link as ThemeUILink } from 'theme-ui';
import { Link as RRLink} from 'react-router-dom'
type Link = {
  href?: string;
  children?: ReactNode;
  kind?: string;
  type?: 'a' | 'react-router';
};

export const Link: FC<Link> = ({ href, children, kind, type = 'react-router' }: Link) => {
  if (!children || !href) return null;
  if (type === 'react-router') {
    return (
      <RRLink to={href}>
        {children}
      </RRLink>
    )
  }
  return (
    <ThemeUILink variant={kind} href={href}>
      {children}
    </ThemeUILink>
  );
};

Link.defaultProps = {
  kind: `a`,
};
