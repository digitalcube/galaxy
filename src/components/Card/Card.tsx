import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, components, themes } from './../../styles';
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
  children?: React.ReactNode;
};

const backgroundColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  shifter: {
    light: colors.galaxy.white,
    dark: colors.shifter.purple.p500,
  },
  amimoto: {
    light: colors.galaxy.white,
    dark: colors.amimoto.blue.b600,
  },
});

const boxShadow = theme.variants('mode', 'schema', {
  galaxy: {
    light: `none`,
    dark: `none`,
  },
  shifter: {
    light: components.boxShadow,
    dark: components.boxShadow,
  },
  amimoto: {
    light: components.boxShadow,
    dark: `none`,
  },
});

const borderColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g200,
    dark: colors.galaxy.gray.g600,
  },
  shifter: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  amimoto: {
    light: colors.galaxy.transparent,
    dark: colors.amimoto.blue.b400,
  },
});

const borderWidth = theme.variants('mode', 'schema', {
  galaxy: {
    light: components.borderWidth,
    dark: components.borderWidth,
  },
  shifter: {
    light: components.borderWidth,
    dark: components.borderWidth,
  },
  amimoto: {
    light: components.borderWidth,
    dark: components.borderWidth,
  },
});

const color = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
  shifter: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
  amimoto: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
});

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
  border-width: ${borderWidth};
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
  children = null,
}: Card) => {
  const { header, footer, image } = content;
  return (
    <StyledCard schema={schema}>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter content={footer} />
    </StyledCard>
  );
};
