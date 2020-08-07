import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

export type CardFooter = {
  content?: {
    title?: string;
  };
};

const StyledCardFooter = styled.div`
  padding: ${components.padding.md} ${components.padding.sm};
`;

export const CardFooter: React.FC<CardFooter> = ({
  content = { title: `` },
}: CardFooter) => {
  const { title } = content;
  if (!title) return null;
  return <StyledCardFooter>{title}</StyledCardFooter>;
};
