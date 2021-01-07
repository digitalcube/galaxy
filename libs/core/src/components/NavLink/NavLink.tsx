import React, { ReactNode } from 'react';
import { NavLink as ThemeUINavLink } from 'theme-ui';

export type NavLinkProps = {
  label?: ReactNode;
  href?: string;
  kind?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label, kind }: NavLinkProps) => {
  return (
    <ThemeUINavLink variant={kind} href={href}>
      {label}
    </ThemeUINavLink>
  );
};

NavLink.defaultProps = {
  kind: `nav`,
};
