import React, { ReactNode } from 'react';
import { NavLink } from '../NavLink';
import { Flex } from 'theme-ui';

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
  navItems?: NavLink[];
  direction?: `column` | `row`;
};

export const Nav: React.FC<Nav> = ({
  navItems = defaultProps.navItems,
  direction = 'row',
}: Nav) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavLink href={href} label={label} />;
  });

  return (
    <Flex sx={{ flexDirection: direction }} as="nav" role="navigation">
      {items}
    </Flex>
  );
};
