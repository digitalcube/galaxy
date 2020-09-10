import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Container, Spacer } from '../index';
import { breakpoints } from '../../lib/utils';
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
  toggle?: boolean;
  toggleNav?: any;
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

const backgroundColor = ({ schema = `galaxy` }: NavItem) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.black,
      dark: colors.galaxy.white,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.background.light,
      dark: colors.amimoto.blue.primary,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.blue.b500,
      dark: colors.amimoto.blue.primary,
    });

  return;
};

const StyledContainer = styled(Container)<Header>`
  position: initial;
`;

const StyledNav = styled.nav<Header>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
  }
`;

const StyledMenu = styled.ul<Header>`
  list-style-type: none;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  padding: ${components.nav.menu.padding};
  margin: 0;
  box-shadow: ${components.boxShadow.primary};
  background-color: ${props => {
    const { schema } = props.theme;
    return backgroundColor({ schema: schema });
  }};
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(100%)')};
  transition: ${({ toggle }) =>
    toggle
      ? components.transition.ease.medium
      : components.transition.ease.medium};

  @media ${breakpoints({ size: `md` })} {
    height: initial;
    background-color: initial;
  }

  &:after {
    content: '';
    position: absolute;
    height: 100vh;
    display: block;

    @media ${breakpoints({ size: `md` })} {
      height: initial;
    }
  }

  @media ${breakpoints({ size: `md` })} {
    position: relative;
    transform: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledNavItem = styled.li<NavItem>`
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
`;

export const NavItem = ({ label = ``, href = `#` }: NavItem) => {
  return (
    <StyledNavItem>
      <a href={href} className="nav-links">
        {label}
      </a>
    </StyledNavItem>
  );
};

const StyledBurger = styled.button<Header>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: ${components.nav.link.padding};

  @media ${breakpoints({ size: `md` })} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ toggle }) => (toggle ? '#0D0C1D' : '#0D0C1D')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ toggle }) => (toggle ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ toggle }) => (toggle ? '0' : '1')};
      transform: ${({ toggle }) =>
        toggle ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ toggle, toggleNav }: Header) => {
  return (
    <StyledBurger toggle={toggle} onClick={() => toggleNav(!toggle)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const Header: React.FC<Header> = ({
  logo = null,
  navItems = [],
}: Header) => {
  const [toggle, toggleNav] = React.useState(false);
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavItem label={label} href={href} />;
  });

  return (
    <header>
      <Spacer size="sm">
        <StyledContainer>
          <StyledNav toggle={toggle} role="navigation">
            <h1>
              <a href="/">{logo}</a>
            </h1>
            <Burger toggle={toggle} toggleNav={toggleNav} />
            <StyledMenu toggle={toggle}>
              <Burger toggle={toggle} toggleNav={toggleNav} />
              {items}
            </StyledMenu>
          </StyledNav>
        </StyledContainer>
      </Spacer>
    </header>
  );
};
