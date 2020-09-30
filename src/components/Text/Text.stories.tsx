import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Text } from './Text';

export default {
  component: Text,
  title: `Galaxy/Components/Text`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Text>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Text>
);
