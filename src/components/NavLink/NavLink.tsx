import React, { ReactNode } from 'react';
import { NavLink as ThemeUINavLink } from 'theme-ui';

export type NavLink = {
  label?: ReactNode;
  href?: string;
};

export const NavLink: React.FC<NavLink> = ({ href, label }: NavLink) => {
  return <ThemeUINavLink href={href}>{label}</ThemeUINavLink>;
};
