import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  component: Container,
  title: `Components/Container`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Sizes = () => (
  <>
    <Container align="right" size="0">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="1">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="2">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="3">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="4">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
  </>
);
