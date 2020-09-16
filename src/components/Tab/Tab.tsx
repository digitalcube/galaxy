import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { components, colors } from '../../styles';
import { Galaxy } from '../index';

export type Tab = {
  label?: ReactNode;
  href?: string;
  active?: boolean;
  hover?: boolean;
};

const color = ({ schema = `galaxy`, hover = false }: Galaxy) => {
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

const backgroundColor = ({ schema = `galaxy`, hover = false }: Galaxy) => {
  // Hover
  if (hover === true) {
    if (schema === `galaxy`)
      return theme('mode', {
        light: colors.galaxy.gray.g100,
        dark: colors.galaxy.gray.g500,
      });
    if (schema === `shifter`)
      return theme('mode', {
        light: colors.shifter.purple.p200,
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

const StyledTab = styled.li<Tab>`
  font-size: ${components.nav.link.fontSize};

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }

  a {
    padding: ${components.tabs.tab.padding};
    text-decoration: none;
    border-radius: ${components.borderRadius};
    transition: ${components.transition.exit.medium};
    color: ${props => {
      const { schema } = props.theme;
      return color({ schema: schema });
    }};

    &:hover {
      transition: ${components.transition.entrance.fast};
      background-color: ${props => {
        const { schema } = props.theme;
        return backgroundColor({ schema: schema, hover: true });
      }};
      color: ${props => {
        const { schema } = props.theme;
        return color({ schema: schema, hover: true });
      }};
    }
  }
`;

export const Tab = ({ label = `Label`, href = `#href` }: Tab) => {
  return (
    <StyledTab>
      <a href={href}>{label}</a>
    </StyledTab>
  );
};
