import React from 'react';
import {
  Content,
  Shape,
  Button,
  Heading,
  Container,
  Col,
  Grid,
} from '../index';

type GetStarted = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  items?: Post[];
};

export const GetStarted = ({
  title,
  subtitle,
  items = [],
  href,
  buttonLabel,
}: GetStarted) => {
  const features = items.map(feature => {
    if (!feature.content) return {};
    const { content } = feature;
    const { title, href, buttonLabel } = content;
    return {
      ...feature,
      footer: (
        <Button kind="primary" href={href}>
          {buttonLabel}
        </Button>
      ),
    };
  });
  return (
    <section>
      <Container size="md">
        <Shape shape="triangle" />
        <Content align="center">
          <Heading size="lg">{title}</Heading>
          <Heading size="md">{subtitle}</Heading>
          <Button href={href} kind="primary" href="/hello">
            {buttonLabel}
          </Button>
        </Content>
      </Container>
    </section>
  );
};
