import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { RecentPosts } from './RecentPosts';

export default {
  component: RecentPosts,
  title: `Containers/RecentPosts`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <RecentPosts />;
};
