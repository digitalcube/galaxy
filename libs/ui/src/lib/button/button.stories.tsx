import React from 'react';
import { Button } from './button';

// import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  // ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/UI/Button`,
};

export const Default = () => {
  return <Button />;
};
