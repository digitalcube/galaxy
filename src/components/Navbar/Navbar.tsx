import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

export type Navbar = {
  children?: ReactNode;
};

const StyledNavbar = styled.nav<Navbar>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar: FC<Navbar> = ({ children }: Navbar) => {
  return <StyledNavbar>{children}</StyledNavbar>;
};
