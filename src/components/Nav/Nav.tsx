import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NavItem, Menu } from '../index';

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
  orientation?: `vertical` | `horizontal`;
  align?: `left` | `center` | `right`;
};

const StyledNav = styled.nav<Nav>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav: React.FC<Nav> = ({
  children,
  navItems = defaultProps.navItems,
  orientation,
  align,
}: Nav) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavItem label={label} href={href} />;
  });

  return (
    <StyledNav role="navigation">
      {children}
      <Menu align={align} orientation={orientation} nodes={items} />
    </StyledNav>
  );
};
