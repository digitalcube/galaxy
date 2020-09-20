import React from 'react';
import { Content, Button, Heading, Container, Spacer } from '../index';

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
    <Spacer size={3}>
      <Container size="1">
        <Content align="center">
          <Heading size="6">{title}</Heading>
          <Heading size="5">{subtitle}</Heading>
          <Button href={href} kind="primary">
            {buttonLabel}
          </Button>
        </Content>
      </Container>
    </Spacer>
  );
};
