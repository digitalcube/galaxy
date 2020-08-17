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

export const Default = () => (
  <Container>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Container>
);
