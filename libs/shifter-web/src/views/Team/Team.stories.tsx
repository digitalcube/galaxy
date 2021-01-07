import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Team } from './Team';

export default {
  component: Team,
  title: `Galaxy/Views/Team`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Team />;
};
