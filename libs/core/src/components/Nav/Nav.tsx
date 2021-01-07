/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from '../NavLink';
import { Box } from 'theme-ui';

export type NavProps = {
  children?: ReactNode;
  navItems?: NavLinkProps[];
  kind?: string;
  sx?: object;
};

export const Nav: React.FC<NavProps> = ({ navItems, kind = 'primary', sx }) => {
  if (!navItems) return null;
  const items = navItems.map((item, i) => {
    const { label, href, kind } = item;
    return <NavLink key={i} kind={kind} href={href} label={label} />;
  });

  return (
    <Box
      sx={{
        ...sx,
      }}
      variant={`nav.${kind}`}
      as="nav"
      role="navigation"
    >
      {items}
    </Box>
  );
};