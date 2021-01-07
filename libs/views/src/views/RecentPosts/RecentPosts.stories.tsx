import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { RecentPosts } from './RecentPosts';

export default {
  component: RecentPosts,
  title: `Galaxy/Views/RecentPosts`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <RecentPosts />;
};
