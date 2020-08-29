import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Container } from '../index';
import { components, colors } from './../../styles';

type NavItem = {
  label?: string;
  href?: string;
  active?: boolean;
  hover?: boolean;
  mode?: 'light' | 'dark';
  schema?: 'amimoto' | 'shifter' | 'galaxy';
};

type Header = {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  hover?: boolean;
};

const color = ({ schema = `galaxy`, hover = false }: NavItem) => {
  // Hover
  if (hover === true) {
    if (schema === `galaxy`)
      return theme('mode', {
        light: colors.galaxy.gray.g100,
        dark: colors.galaxy.gray.g500,
      });
    if (schema === `shifter`)
      return theme('mode', {
        light: colors.shifter.purple.primary,
        dark: colors.amimoto.blue.primary,
      });
    if (schema === `amimoto`)
      return theme('mode', {
        light: colors.amimoto.blue.b500,
        dark: colors.amimoto.blue.primary,
      });
  }

  // Solid
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.black,
      dark: colors.galaxy.white,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.purple.p400,
      dark: colors.amimoto.blue.primary,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.blue.b500,
      dark: colors.amimoto.blue.primary,
    });

  return;
};

const StyledHeader = styled.header`
  padding: ${components.section.padding.sm} 0 ${components.section.padding.xs};
`;

const StyledNav = styled.nav<Header>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .main-nav {
    list-style-type: none;
    display: none;
  }

  .main-nav li {
    text-align: center;
    font-size: ${components.nav.link.fontSize};

    &:last-of-type {
      margin-right: 0;
    }

    &:first-of-type {
      margin-left: 0;
    }

    a {
      padding: ${components.nav.link.padding};
      text-decoration: none;
      transition: ${components.transition.exit.medium};
      color: ${props => {
        const { schema } = props.theme;
        return color({ schema: schema });
      }};

      &:hover {
        transition: ${components.transition.entrance.fast};
        color: ${props => {
          const { schema } = props.theme;
          return color({ schema: schema, hover: true });
        }};
      }
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

export const NavItem = ({ label = ``, href = `#` }: NavItem) => {
  return (
    <li>
      <a href={href} className="nav-links">
        {label}
      </a>
    </li>
  );
};

export const Header: React.FC<Header> = ({
  logo = null,
  navItems = [],
}: Header) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavItem label={label} href={href} />;
  });

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <a href="/">{logo}</a>
          <ul className="main-nav" id="js-menu">
            {items}
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};
