import React from 'react';
import styled from 'styled-components';
import { Container } from '../index';
import { components } from './../../styles';

type NavItem = {
  label?: string;
};

type Header = {
  logo?: React.ReactNode;
  navItems?: NavItem[];
};

const StyledHeader = styled.header`
  padding: ${components.section.padding.sm} 0 ${components.section.padding.xs};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .main-nav {
    list-style-type: none;
    display: none;
  }

  .main-nav li {
    text-align: center;
    font-size: 1.15rem;
    &:last-of-type {
      margin-right: 0;
    }
    &:first-of-type {
      margin-left: 0;
    }

    a {
      padding: ${components.nav.link.padding};
    }
  }

  .logo {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .main-nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export const Header: React.FC<Header> = ({
  logo = null,
  navItems = [],
}: Header) => {
  const items = navItems.map(item => {
    const { label } = item;
    return (
      <li>
        <a href="#" className="nav-links">
          {label}
        </a>
      </li>
    );
  });

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <a href="#" className="logo">
            {logo}
          </a>
          <ul className="main-nav" id="js-menu">
            {items}
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};
