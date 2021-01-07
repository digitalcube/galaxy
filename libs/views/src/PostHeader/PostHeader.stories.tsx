import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PostHeader } from './PostHeader';

export default {
  component: PostHeader,
  title: `Galaxy/Views/PostHeader`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PostHeader />;
};
