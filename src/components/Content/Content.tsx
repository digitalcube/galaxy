import React, { ReactNode, FC } from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';
import { Galaxy } from '../index';
import { colors, components } from '../../styles';

type Content = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
};

const color = ({ schema = `galaxy` }: Galaxy) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.gray.g700,
      dark: colors.galaxy.gray.g100,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.purple.p700,
      dark: colors.shifter.purple.p100,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.shifter.black,
      dark: colors.amimoto.blue.b100,
    });

  return;
};

export const Content: FC<Content> = ({ align, children }: Content) => {
  if (!children) return null;
  return <StyledContent align={align}>{children}</StyledContent>;
};

export const StyledContent = styled.div<Content>`
  text-align: ${props => props.align};
  line-height: ${components.content.lineHeight};
  font-size: ${components.content.fontSize};
  color: ${props => {
    const { schema } = props.theme;
    return color({ schema: schema });
  }};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: ${components.heading.lineHeight};
    font-weight: ${components.heading.fontWeight};
  }

  h4 {
    font-size: ${components.heading.size.md};
  }

  > :not(:first-child) {
    margin-top: ${components.spacing.sm};
  }
`;
