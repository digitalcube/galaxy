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
  direction = 'row',
}: Nav) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return (
      <NavLink
        kind={direction === 'column' ? 'column' : `row`}
        href={href}
        label={label}
      />
    );
  });

  return (
    <Flex sx={{ flexDirection: direction }} as="nav" role="navigation">
      {items}
    </Flex>
  );
};
