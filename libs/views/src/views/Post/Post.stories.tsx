import React from 'react';

import { Post } from './Post';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Post,
  title: `Galaxy/Components/Post`,
};

export const Default = () => <Post />;
