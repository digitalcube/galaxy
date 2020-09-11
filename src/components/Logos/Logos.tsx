import React, { ReactNode } from 'react';
import {
  Container,
  Grid,
  Col,
  Spacer,
  Heading,
  Button,
  Content,
} from '../index';

type Logos = {
  content?: {
    title?: string;
  };
};

export const Logos: React.FC<Logos> = ({
  content = {
    title: `Some of the world's leading businesses, thinkers, and creatives call Shifter home. `,
  },
}: Logos) => {
  const { title } = content;
  return (
    <section>
      <Spacer size="md" />
      <Container size="md">
        <Content align="center">
          <Heading size="lg">{title}</Heading>
        </Content>
      </Container>
      <Container>
        <Col>logos</Col>
      </Container>
      <Spacer size="lg" />
    </section>
  );
};
