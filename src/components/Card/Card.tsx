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
  mode?: string;
  kind?: string;
  children?: React.ReactNode;
};

const backgroundColor = theme.variants('mode', 'kind', {
  shifter: { light: colors.system.white, dark: colors.shifter.purple.p500 },
  amimoto: { light: colors.system.white, dark: colors.system.transparent },
});

const StyledCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  background-color: ${backgroundColor};
  border-radius: ${components.borderRadius};
  box-shadow: ${components.boxShadow};
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
  kind = ``,
  mode = ``,
  children = null,
}: Card) => {
  const { header, footer, image } = content;
  return (
    <StyledCard kind={`amimoto`}>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter content={footer} />
    </StyledCard>
  );
};
