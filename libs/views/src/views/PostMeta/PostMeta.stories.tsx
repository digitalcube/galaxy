import React from 'react';

import { PostMeta } from './PostMeta';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: PostMeta,
  title: `Galaxy/Components/PostMeta`,


};

export const Default = () => {
  return <PostMeta />;
};
