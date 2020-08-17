import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Text } from './Text';

export default {
  component: Text,
  title: `Components/Text`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Text>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Text>
);
