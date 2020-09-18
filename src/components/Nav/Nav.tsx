import React, { ReactNode } from 'react';
import { NavItem } from '../index';
import { Flex, NavLink } from 'theme-ui';

const defaultProps = {
  navItems: [
    {
      label: `Features`,
      href: `https://google.com/`,
    },
    {
      label: `Blog`,
      href: `/blog`,
    },
    {
      label: `Solutions`,
      href: `/solutions`,
    },
    {
      label: `Pricing`,
    },
    {
      label: `Showcase`,
    },
  ],
};

export type Nav = {
  children?: ReactNode;
  navItems?: NavItem[];
  direction?: `column` | `row`;
  align?: `left` | `center` | `right`;
};

export const Nav: React.FC<Nav> = ({
  navItems = defaultProps.navItems,
  direction,
  align,
}: Nav) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavLink href={href}>{label}</NavLink>;
  });

  console.log(direction);

  return (
    <Flex sx={{ flexDirection: direction }} as="nav" role="navigation">
      {direction}
      {items}
    </Flex>
  );
};
