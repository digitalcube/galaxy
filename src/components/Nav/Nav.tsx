import React, { ReactNode } from 'react';
import { NavLink } from '../NavLink';
import { Flex } from 'theme-ui';

const defaultProps = {
  navItems: [
    {
      label: `Features`,
      href: `#!`,
    },
    {
      label: `Blog`,
      href: `#!`,
    },
    {
      label: `Solutions`,
      href: `#!`,
    },
    {
      label: `Pricing`,
      href: `#!`,
    },
    {
      label: `Showcase`,
      href: `#!`,
    },
  ],
};

export type Nav = {
  children?: ReactNode;
  navItems?: NavLink[];
  direction?: `column` | `row`;
};

export const Nav: React.FC<Nav> = ({
  navItems = defaultProps.navItems,
  direction = `row`,
}: Nav) => {
  const items = navItems.map(item => {
    const { label, href, kind } = item;
    return <NavLink kind={kind ? kind : direction} href={href} label={label} />;
  });

  const alignItems = direction === `row` ? `center` : ``;

  return (
    <Flex
      sx={{ flexDirection: direction, alignItems: alignItems }}
      as="nav"
      role="navigation"
    >
      {items}
    </Flex>
  );
};
