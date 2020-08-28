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
  padding-left: ${components.spacing.sm};
  padding-right: ${components.spacing.sm};
  padding-top: ${components.spacing.md};
  padding-bottom: ${components.spacing.xs};
`;

export const CardHeader: React.FC<CardHeader> = ({
  content = { title: ``, subtitle: ``, excerpt: ``, link: `` },
}: CardHeader) => {
  const { title, subtitle, excerpt, link } = content;
  if (!title || !subtitle || !excerpt) return null;
  return (
    <StyledCardHeader>
      <Link href={link}>
        <Heading as="h2">{title}</Heading>
      </Link>
      {subtitle}
      {excerpt}
    </StyledCardHeader>
  );
};
