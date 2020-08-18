import { HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { components, colors } from '../../styles';

export interface Button extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  href?: string;
  active?: string;
  mode?: 'light' | 'dark';
  schema?: 'amimoto' | 'shifter' | 'galaxy';
}

const backgroundColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.black,
    dark: colors.galaxy.white,
  },
  shifter: {
    light: colors.shifter.purple.primary,
    dark: colors.shifter.purple.primary,
  },
  amimoto: {
    light: colors.amimoto.blue.primary,
    dark: colors.amimoto.blue.primary,
  },
});

const color = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.white,
    dark: colors.galaxy.black,
  },
  shifter: {
    light: colors.galaxy.white,
    dark: colors.galaxy.white,
  },
  amimoto: {
    light: colors.galaxy.white,
    dark: colors.galaxy.white,
  },
});

const hoverBackgroundColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.gray.g200,
  },
  shifter: {
    light: colors.shifter.purple.p500,
    dark: colors.shifter.purple.p500,
  },
  amimoto: {
    light: colors.amimoto.blue.b500,
    dark: colors.amimoto.blue.b500,
  },
});

const borderColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  shifter: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  amimoto: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
});

const focusBorderColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.amimoto.blue.b200,
    dark: colors.amimoto.blue.b200,
  },
  shifter: {
    light: colors.shifter.magenta.primary,
    dark: colors.shifter.magenta.primary,
  },
  amimoto: {
    light: colors.amimoto.blue.b200,
    dark: colors.amimoto.blue.b200,
  },
});

export const Button = styled.a<Button>`
  background-color: ${backgroundColor};
  border-width: ${components.button.borderWidth};
  border-style: solid;
  color: ${color};
  border-color: ${borderColor};
  border-radius: ${components.borderRadius};
  padding: ${components.button.padding};
  min-height: ${components.button.minHeight};
  min-width: ${components.button.minWidth};
  font-size: ${components.button.fontSize};
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  transition: ${components.transition.exit.medium};

  &:hover {
    background-color: ${hoverBackgroundColor};
    color: ${colors.galaxy.white};
    transition: ${components.transition.entrance.fast};
  }

  &:focus {
    border-width: ${components.button.borderWidth};
    border-color: ${focusBorderColor};
    transition: ${components.transition.entrance.fast};
  }

  &:active {
    background-color: ${colors.shifter.purple.p500};
    color: ${colors.galaxy.white};
  }

  &:disabled {
    background-color: ${colors.shifter.gray.g400};
    color: ${colors.shifter.gray.g500};
  }
`;
