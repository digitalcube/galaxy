import React from 'react';
import { Content } from '../../../components/Content';
import { Link } from '../../../components/Link';
import { Heading } from '../../../components/Heading';
import { Container } from '../../../components/Container';
import { GetStarted } from '../GetStarted';

export default function Default({
  title,
  subtitle,
  href,
  linkLabel,
}: GetStarted) {
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
