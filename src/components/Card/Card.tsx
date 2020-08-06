import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, components } from './../../styles';
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
  theme?: string;
  children?: React.ReactNode;
};

const backgroundColor = theme('mode', {
  light: colors.white,
  dark: colors.purple.primary,
  bare: colors.transparent,
});

const boxShadow = theme('mode', {
  light: components.boxShadow,
  dark: components.boxShadow,
  bare: ``,
});

const borderRadius = theme('mode', {
  dark: components.borderRadius,
  light: components.borderRadius,
  bare: ``,
});

const StyledCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
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
  children = null,
  theme = ``,
}: Card) => {
  const { header, footer, image } = content;
  return (
    <StyledCard theme={{ mode: theme }}>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter content={footer} />
    </StyledCard>
  );
};
