import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PostMeta } from './PostMeta';

export default {
  component: PostMeta,
  title: `Components/PostMeta`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PostMeta />;
};
