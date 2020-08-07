import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Heading } from '../Heading';
import { Link } from '../Link';

export type CardHeader = {
  content?: {
    title?: string;
    subtitle?: React.ReactNode;
    excerpt?: string;
    link?: string;
  };
};

const StyledCardHeader = styled.div`
  padding: ${components.padding.md} ${components.padding.sm};
`;

export const CardHeader: React.FC<CardHeader> = ({
  content = { title: ``, subtitle: ``, excerpt: ``, link: null },
}: CardHeader) => {
  const { title, subtitle, excerpt, link } = content;
  if (!title) return null;
  return (
    <StyledCardHeader>
      <Link link={link}>
        <Heading>{title}</Heading>
      </Link>
      {subtitle}
      {excerpt}
    </StyledCardHeader>
  );
};
