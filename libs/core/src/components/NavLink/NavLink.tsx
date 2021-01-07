import React, { ReactNode } from 'react';
import { NavLink as ThemeUINavLink } from 'theme-ui';

export type NavLink = {
  label?: ReactNode;
  href?: string;
  kind?: string;
};

export const NavLink: React.FC<NavLink> = ({ href, label, kind }: NavLink) => {
  return (
    <ThemeUINavLink variant={kind} href={href}>
      {label}
    </ThemeUINavLink>
  );
};

NavLink.defaultProps = {
  kind: `nav`,
};
