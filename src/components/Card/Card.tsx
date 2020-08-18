import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { CardImage } from './CardImage';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export type Card = {
  children: React.ReactNode;
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
  width: 100%;
`;

export const Card: React.FC<Card> = ({
  children = null,
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
}: Card) => {
  const { header, footer, image } = content;
  return (
    <StyledCard>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </StyledCard>
  );
};
