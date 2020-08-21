import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  Button,
  PostList,
  Container,
  Shape,
  Post,
  Content,
} from '../index';

type Features = {
  title?: string;
  subtitle?: string;
  buttonLink?: string;
  items?: Post[];
};

export const Features = ({
  title,
  subtitle,
  items = [],
  buttonLink,
}: Features) => {
  const features = items.map(feature => {
    const { content } = feature;
    const { title, href } = content;
    return {
      ...feature,
      footer: (
        <Button kind="primary" href={href}>
          {title}
        </Button>
      ),
    };
  });
  return (
    <section>
      <Container>
        <Shape shape="square" />
        <Container>
          <Content>
            <Heading as="h2" size="lg">
              {title}
            </Heading>
            <Heading as="h2" size="sm">
              {subtitle}
            </Heading>
            <Button outline kind="primary" href={buttonLink}>
              See all features
            </Button>
          </Content>
        </Container>
        <PostList md={2} lg={4} align="center" content={features} />
      </Container>
    </section>
  );
};
