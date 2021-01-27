import React from 'react';

import { Footer } from './index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Footer,
  title: `Galaxy/Views/Footer`,
};

export const Default = () => {
  return <Footer />;
};
