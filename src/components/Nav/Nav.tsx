import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NavItem, Menu } from '../index';

export type Nav = {
  children?: ReactNode;
  navItems?: NavItem[];
  orientation?: `vertical` | `horizontal`;
};

const StyledNav = styled.nav<Nav>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav: React.FC<Nav> = ({
  children,
  navItems,
  orientation,
}: Nav) => {
  return (
    <StyledNav role="navigation">
      {children}
      <Menu orientation={orientation} navItems={navItems} />
    </StyledNav>
  );
};
