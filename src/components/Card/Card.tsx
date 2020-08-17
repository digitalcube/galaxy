import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { components } from '../../styles';
import {
  color,
  borderColor,
  boxShadow,
  backgroundColor,
} from '../../styles/themes';
import { CardImage } from './CardImage';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export type Card = {
  align?: string;
  content?: {
    header?: {
      title?: string;
      subtitle?: React.ReactNode;
      excerpt?: string;
      link?: string;
    };
    footer?: React.ReactChild;
    image?: {
      img?: React.ReactNode;
      link?: string;
    };
  };
  schema?: string;
  mode?: string;
  children?: React.ReactNode;
};

const StyledCard = styled.article`
  text-align: ${props => props.align || ``};
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  color: ${color};
  background-color: ${backgroundColor};
  border-radius: ${components.borderRadius};
  border-width: ${components.borderWidth};
  border-color: ${borderColor};
  border-style: ${components.borderStyle};
  box-shadow: ${boxShadow};
  width: 100%;
`;

export const Card: React.FC<Card> = ({
  content = {
    header: {
      title: ``,
      subtitle: ``,
      excerpt: ``,
      link: ``,
    },
    footer: ``,
    image: {
      img: null,
    },
  },
  schema = ``,
  mode = ``,
  children = null,
  align = ``,
}: Card) => {
  const { header, footer, image } = content;
  return (
    <StyledCard align={align}>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </StyledCard>
  );
};
