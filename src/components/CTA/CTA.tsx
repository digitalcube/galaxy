import React from 'react';
import { Content, Button, Heading, Container } from '../index';

type CTA = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
};

export const CTA = ({ title, subtitle, href, buttonLabel }: CTA) => {
  return (
    <section>
      <Container size="md">
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
