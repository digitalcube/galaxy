import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NavItem, Menu } from '../index';

type Nav = {
  children?: ReactNode;
};

const StyledNav = styled.nav<Nav>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav: React.FC<Nav> = ({ children }: Nav) => {
  return <StyledNav role="navigation">{children}</StyledNav>;
};
