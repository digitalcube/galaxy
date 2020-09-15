import React, { ReactNode } from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';
import { components, colors } from '../../styles';
import { CardImage } from './CardImage';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export type Card = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
  schema?: 'amimoto' | 'shifter' | 'galaxy';
  img?: ReactNode;
  title?: string;
  subtitle?: ReactNode;
  excerpt?: string;
  href?: string;
  footer?: React.ReactChild;
};

const backgroundColor = ({ schema = `galaxy` }: Card) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.background.light,
      dark: colors.galaxy.background.dark,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.white,
      dark: colors.shifter.purple.p600,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.blue.b100,
      dark: colors.amimoto.blue.b600,
    });

  return;
};

const borderColor = ({ schema = `galaxy` }: Card) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.background.light,
      dark: colors.galaxy.background.dark,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.white,
      dark: colors.shifter.purple.p600,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.background.light,
      dark: colors.amimoto.background.dark,
    });

  return;
};

const StyledCard = styled.article<Card>`
  text-align: ${props => props.align};
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: ${components.borderRadius};
  border-width: ${components.borderWidth};
  border-style: ${components.borderStyle};
  border-color: ${props => {
    const { schema } = props.theme;
    return borderColor({ schema: schema });
  }};
  background-color: ${props => {
    const { schema } = props.theme;
    return backgroundColor({ schema: schema });
  }};
  width: 100%;
`;

export const Card: React.FC<Card> = ({
  title,
  subtitle,
  children,
  excerpt,
  img,
  align,
  footer,
}: Card) => {
  return (
    <StyledCard align={align}>
      <CardImage>{img}</CardImage>
      <CardHeader title={title} subtitle={subtitle} excerpt={excerpt} />
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </StyledCard>
  );
};
