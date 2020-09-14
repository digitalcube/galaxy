import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NavItem, Menu } from '../index';

type Nav = {
  children?: ReactNode;
  navItems?: NavItem[];
  alignment?: `vertical` | `horizontal`;
};

const StyledNav = styled.nav<Nav>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav: React.FC<Nav> = ({ children, navItems, alignment }: Nav) => {
  console.log(navItems);
  return (
    <StyledNav role="navigation">
      {children}
      <Menu alignment={alignment} navItems={navItems} />
    </StyledNav>
  );
};
