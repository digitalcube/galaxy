import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Posts } from './Posts';

export default {
  component: Posts,
  title: `Containers/Posts`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Posts />;
};
