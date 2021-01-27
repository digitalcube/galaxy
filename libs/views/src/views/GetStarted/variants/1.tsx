import React from 'react';
import { Box } from 'theme-ui';
import { Content, Link, Heading, Container } from '@galaxy/core';
import { GetStarted, GetStartedProps } from '../GetStarted';

export default function Default({
  title,
  subtitle,
  href,
  linkLabel,
}: GetStartedProps) {
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

Default.defaultProps = GetStarted;
