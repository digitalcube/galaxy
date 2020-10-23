import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Animation } from '../index';

export default {
  component: Animation,
  title: `Galaxy/Components/Animation`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Dashboard = () => {
  return <Animation animation="dashboard" />;
};

export const SingleClick = () => {
  return <Animation animation="singleClick" />;
};
