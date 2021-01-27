import React from 'react';
import { Content, Link, Heading, Container } from '@galaxy/core';
import { GetStarted, GetStartedProps } from '../GetStarted';

export default function Default({
  title,
  subtitle,
  href,
  linkLabel,
}: GetStartedProps) {
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

Default.defaultProps = GetStarted;
