import React from 'react';
import { fakerPost } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Post,
  title: `Shifter/Dashboard/Patterns/Posts/Post`,
};

export const Example = () => {
  return <Post {...fakerPost} />;
};
