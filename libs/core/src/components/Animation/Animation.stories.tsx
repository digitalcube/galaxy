import React from 'react';

import { Animation } from '../index';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Animation,
  title: `Galaxy/Components/Animation`,
};

export const Dashboard = () => {
  return <Animation animation="dashboard" />;
};

export const SingleClick = () => {
  return <Animation animation="singleClick" />;
};
