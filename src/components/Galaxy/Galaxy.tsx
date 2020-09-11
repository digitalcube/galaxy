import { ReactChild } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { type, colors } from '../../styles';

type Galaxy = {
  schema?: 'amimoto' | 'shifter' | 'galaxy';
};

const backgroundColor = ({ schema = `galaxy` }: Galaxy) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.background.light,
      dark: colors.galaxy.background.dark,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.background.light,
      dark: colors.shifter.background.dark,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.background.light,
      dark: colors.amimoto.background.dark,
    });

  return;
};

const color = ({ schema = `galaxy` }: Galaxy) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.gray.g700,
      dark: colors.galaxy.gray.g100,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.black,
      dark: colors.amimoto.blue.b100,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.shifter.black,
      dark: colors.amimoto.blue.b100,
    });

  return;
};

export const Galaxy = styled.div<Galaxy>`
  font-family: ${type.fontFamily};
  line-height: ${type.lineHeight};
  color: ${props => {
    const { schema } = props.theme;
    return color({ schema: schema });
  }};
  background-color: ${props => {
    const { schema } = props.theme;
    return backgroundColor({ schema: schema });
  }};
`;
