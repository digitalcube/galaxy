import React, { ReactNode, FC } from 'react';
import { Heading, Text, Content, Box } from '../index';
import { Link } from '../Link';

type CardHeader = {
  children?: ReactNode;
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  excerpt?: ReactNode | string;
  href?: string;
  sx?: object;
  variant?: string;
};

const Title = ({ href, children }: CardHeader) => {
  if (!children) return null;
  return (
    <Link href={href}>
      <Heading size="5" as="h3">
        <b>{children}</b>
      </Heading>
    </Link>
  );
};

const Subtitle = ({ children }: CardHeader) => {
  if (!children) return null;
  return (
    <Heading as="h4" size="4">
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
  sx,
  variant,
}: CardHeader) => {
  if (!title) return null;
  return (
    <Box
      variant={variant}
      sx={{ display: 'flex', padding: null, flex: 1, ...sx }}
    >
      <Title href={href}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Excerpt>{excerpt}</Excerpt>
    </Box>
  );
};

CardHeader.defaultProps = {
  variant: 'cards.primary',
};
