import React from 'react';
import { Content, Link, Heading, Container } from '../index';
import { Box } from 'theme-ui';

export type GetStarted = {
  title?: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
  variant?: string;
};

export const GetStarted = ({
  title,
  subtitle,
  href,
  linkLabel,
  variant,
}: GetStarted) => {
  if (variant === `0`) {
    return (
      <Container
        sx={{
          py: 5,
        }}
        size="1"
        as="section"
      >
        <Content align="center">
          <Heading size="6">{title}</Heading>
          <Heading size="5">{subtitle}</Heading>
          <Link href={href} kind="primary">
            {linkLabel}
          </Link>
        </Content>
      </Container>
    );
  }
  if (variant === `1`) {
    return (
      <Box
        sx={{
          bg: 'primary',
        }}
      >
        <Container
          sx={{
            py: 5,
          }}
          size="3"
          as="section"
        >
          <Content>
            <Heading size="6">{title}</Heading>
            <Heading size="5">{subtitle}</Heading>
            <Link href={href} kind="white">
              {linkLabel}
            </Link>
          </Content>
        </Container>
      </Box>
    );
  }
  return null;
};

GetStarted.defaultProps = {
  title: `Fugiat ut consequat cillum ullamco aute nulla?`,
  subtitle: `Qui ut Lorem ex occaecat ea deserunt eserunt in irure ipsum veniam enim quis.`,
  href: `#!`,
  linkLabel: `Nisi veniam laboris`,
  variant: `0`,
};
