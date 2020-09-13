import React from 'react';
import { Content, Button, Heading, Container } from '../index';

export type GetStarted = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
};

export const GetStarted = ({
  title = `Ready to take your site to the next level?`,
  subtitle = `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  href = `https://go.getshifter.io/`,
  buttonLabel = `Get Started`,
}: GetStarted) => {
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
