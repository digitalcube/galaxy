import React from 'react';
import { Container } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Container,
  title: `Shifter/Dashboard/Patterns/Container`,
};

export const Example = () => {
  return <Container {...{
    wpVersion: {
      version: '5.x',
    },
    phpVersion: {
      version: '8.x',
    }    
  }}/>;
};
