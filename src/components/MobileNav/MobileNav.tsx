import React, { FC } from 'react';
import { Nav, NavLink } from '../index';

type MobileNav = {
  nodes?: NavLink[];
};

export const MobileNav: FC<MobileNav> = ({ nodes }: MobileNav) => {
  if (!nodes) return null;
  return (
    <Nav
      sx={{ display: ['flex', null, null, null, 'none'] }}
      kind="column"
      navItems={nodes}
    />
  );
};
