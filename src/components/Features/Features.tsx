import React from 'react';
import {
  Heading,
  Button,
  Spacer,
  PostList,
  Container,
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
    if (!feature.content) return {};
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
      <Spacer size="md">
        <Container>
          <Container size="md" align="left">
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
        </Container>
        <Container>
          <PostList md={2} lg={4} align="center" content={features} />
        </Container>
      </Spacer>
    </section>
  );
};
