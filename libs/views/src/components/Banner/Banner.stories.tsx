import React from 'react';

import { Banner } from './index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Banner,
  title: `Galaxy/Components/Banner`,
};

export const Default = () => <Banner />;