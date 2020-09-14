import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { components, colors } from '../../styles';

export type NavItem = {
  label?: string;
  href?: string;
  active?: boolean;
  hover?: boolean;
  mode?: 'light' | 'dark';
  schema?: 'amimoto' | 'shifter' | 'galaxy';
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
      light: colors.galaxy.gray.g600,
      dark: colors.galaxy.white,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.purple.p500,
      dark: colors.shifter.purple.p400,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.blue.b500,
      dark: colors.amimoto.blue.primary,
    });

  return;
};

const StyledNavItem = styled.li<NavItem>`
  font-size: ${components.nav.link.fontSize};

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }

  a {
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

export const NavItem = ({ label = `Label`, href = `#href` }: NavItem) => {
  return (
    <StyledNavItem>
      <a href={href}>{label}</a>
    </StyledNavItem>
  );
};
