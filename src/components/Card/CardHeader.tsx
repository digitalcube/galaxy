import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Heading } from '../Heading';

export type CardHeader = {
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
  };
};

const StyledCardHeader = styled.div`
  padding: 0 ${components.padding};
`;

export const CardHeader: React.FC<CardHeader> = ({
  content = { title: ``, subtitle: ``, excerpt: `` },
}: CardHeader) => {
  const { title, subtitle, excerpt } = content;
  return (
    <StyledCardHeader>
      <Heading>{title}</Heading>
      {subtitle}
      {excerpt}
    </StyledCardHeader>
  );
};
