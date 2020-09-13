import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Heading, Text, Content } from '../index';
import { Link } from '../Link';

type CardHeader = {
  children?: ReactNode;
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  excerpt?: ReactNode | string;
  href?: string;
};

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
      <Content>
        <Title href={href}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Excerpt>{excerpt}</Excerpt>
      </Content>
    </StyledCardHeader>
  );
};

const StyledCardHeader = styled.div`
  padding: ${components.spacing.sm} ${components.spacing.sm};
`;
