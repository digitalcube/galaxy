import React, { ReactNode, FC } from 'react';
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

export const CardHeaderContent: FC<CardHeader> = ({
  title,
  subtitle,
  excerpt,
  href,
}: CardHeader) => {
  return (
    <Content>
      <Title href={href}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Excerpt>{excerpt}</Excerpt>
    </Content>
  );
};

export const CardHeader: FC<CardHeader> = ({
  title,
  subtitle,
  excerpt,
  href,
}: CardHeader) => {
  if (!title) return null;
  return (
    <StyledContent>
      <Title href={href}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Excerpt>{excerpt}</Excerpt>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: ${components.spacing.sm} ${components.spacing.sm};
`;
