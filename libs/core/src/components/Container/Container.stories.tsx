import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  component: Container,
  title: `Galaxy/Components/Container`,
  decorators: [withKnobs],
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
