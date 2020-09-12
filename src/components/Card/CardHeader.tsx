import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Heading, Text } from '../index';
import { Link } from '../Link';

type CardHeader = {
  children?: ReactNode;
  title?: string;
  subtitle?: React.ReactNode;
  excerpt?: string;
  href?: string;
};

const StyledCardHeader = styled.div`
  padding-left: ${components.spacing.sm};
  padding-right: ${components.spacing.sm};
  padding-top: ${components.spacing.md};
  padding-bottom: ${components.spacing.xs};
`;

const Title = ({ href, children }: CardHeader) => {
  if (!children) return null;
  return (
    <Link href={href}>
      <Heading size="md" as="h3">
        {children}
      </Heading>
    </Link>
  );
};

const Subtitle = ({ children }: CardHeader) => {
  if (!children) return null;
  return (
    <Heading as="h4" size="sm">
      {children}
    </Heading>
  );
};

const Excerpt = ({ children }: CardHeader) => {
  if (!children) return null;
  return <Text>{children}</Text>;
};

export const CardHeader: React.FC<CardHeader> = ({
  title,
  subtitle,
  excerpt,
  href,
}: CardHeader) => {
  return (
    <StyledCardHeader>
      <Title href={href}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Excerpt>{excerpt}</Excerpt>
    </StyledCardHeader>
  );
};
