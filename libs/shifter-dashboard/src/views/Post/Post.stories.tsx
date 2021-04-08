import React from 'react';
import { Post } from '@galaxy/shifter-dashboard';
import { fakerPost } from '@galaxy/faker';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Post,
  title: `Galaxy/Components/Post`,
};

export const Example = () => {
  return <Post {...fakerPost} />;
};
