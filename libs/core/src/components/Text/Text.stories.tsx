import React from 'react';

import { Text } from './Text';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Text,
  title: `Galaxy/Components/Text`,
};

export const Default = () => (
  <Text>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Text>
);
