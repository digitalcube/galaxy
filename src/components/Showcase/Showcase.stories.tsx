import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Showcase } from './Showcase';

export default {
  component: Showcase,
  title: `Containers/Showcase`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Showcase />;
};
