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
};

export const GetStarted = ({
  title,
  subtitle,
  href,
  buttonLabel,
}: GetStarted) => {
  return (
    <section>
      <Container size="md">
        <Shape shape="triangle" />
        <Content align="center">
          <Heading size="lg">{title}</Heading>
          <Heading size="md">{subtitle}</Heading>
          <Button href={href} kind="primary">
            {buttonLabel}
          </Button>
        </Content>
      </Container>
    </section>
  );
};
