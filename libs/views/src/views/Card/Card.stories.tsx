import React from 'react';

import { Card } from './index';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Card,
  title: `Galaxy/Components/Card`,
};

export const Default = () => <Card />;
