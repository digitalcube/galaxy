import React from 'react';
import styled from 'styled-components';
import { components, colors } from '../../styles';
import { CardImage } from './CardImage';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export type Card = {
  children?: React.ReactNode;
  align?: string;
  content?: {
    img?: React.ReactNode;
    header?: {
      title?: string;
      subtitle?: React.ReactNode;
      excerpt?: string;
      link?: string;
    };
    footer?: React.ReactChild;
  };
};

const StyledCard = styled.article<Card>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: ${components.borderRadius};
  border-width: ${components.borderWidth};
  border-style: ${components.borderStyle};
  background-color: ${colors.galaxy.white};
  width: 100%;
`;

export const Card: React.FC<Card> = ({
  children = null,
  content = {
    img: null,
    header: {
      title: ``,
      subtitle: ``,
      excerpt: ``,
      link: ``,
    },
    footer: ``,
  },
}: Card) => {
  const { header, footer, img } = content;
  return (
    <StyledCard>
      <CardImage>{img}</CardImage>
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </StyledCard>
  );
};
