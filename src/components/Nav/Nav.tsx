/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { ReactNode } from 'react';
import { NavLink } from '../NavLink';
import { Box } from 'theme-ui';

export type Nav = {
  children?: ReactNode;
  navItems?: NavLink[];
  kind?: String;
  sx?: object;
};

export const Nav: React.FC<Nav> = ({ navItems, kind, sx }: Nav) => {
  if (!navItems) return null;
  const items = navItems.map(item => {
    const { label, href, kind } = item;
    return <NavLink kind={kind} href={href} label={label} />;
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

Nav.defaultProps = {
  kind: `primary`,
  navItems: [
    {
      label: `Proident`,
      href: `#!`,
    },
    {
      label: `Labore`,
      href: `#!`,
    },
    {
      label: `Ipsum`,
      href: `#!`,
    },
    {
      label: `Eiusmod`,
      href: `#!`,
    },
    {
      label: `Esse anim`,
      href: `#!`,
    },
  ],
};
