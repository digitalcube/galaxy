import React from 'react';
import { Container } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Container,
  title: `Shifter/Dashboard/Patterns/Container`,
};

export const Example = () => {
  return <Container />;
};
