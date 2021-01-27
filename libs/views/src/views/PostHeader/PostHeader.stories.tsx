import React from 'react';

import { PostHeader } from './PostHeader';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: PostHeader,
  title: `Galaxy/Views/PostHeader`,
};

export const Default = () => {
  return <PostHeader />;
};
