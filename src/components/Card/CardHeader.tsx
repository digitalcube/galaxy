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
  padding-left: ${components.padding.sm};
  padding-right: ${components.padding.sm};
  padding-top: ${components.padding.md};
  padding-bottom: ${components.padding.xs};
`;

export const CardHeader: React.FC<CardHeader> = ({
  content = { title: ``, subtitle: ``, excerpt: ``, link: `` },
}: CardHeader) => {
  const { title, subtitle, excerpt, link } = content;
  if (!title) return null;
  return (
    <StyledCardHeader>
      <Link link={link}>
        <Heading tag="h2">{title}</Heading>
      </Link>
      {subtitle}
      {excerpt}
    </StyledCardHeader>
  );
};
