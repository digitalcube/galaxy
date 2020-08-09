import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import theme from 'styled-theming';
import { colors, components } from './../../styles';
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
  content?: {
    header?: {
      title?: string;
      subtitle?: React.ReactNode;
      excerpt?: string;
      link?: string;
    };
    footer?: {
      title?: string;
    };
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
`;

export const Card: React.FC<Card> = ({
  content = {
    header: {
      title: ``,
      subtitle: ``,
      excerpt: ``,
      link: ``,
    },
    footer: {
      title: ``,
    },
    image: {
      img: ``,
    },
  },
  schema = ``,
  mode = ``,
  children = null,
}: Card) => {
  const { header, footer, image } = content;
  const themeContext = useContext(ThemeContext);
  return (
    <StyledCard schema={themeContext.schema}>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter content={footer} />
    </StyledCard>
  );
};
