import React from 'react';
import { Posts } from '@galaxy/shifter-dashboard';
import { fakerPosts } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Posts,
  title: `Shifter/Dashboard/Patterns/Posts`,
};

export const Default = () => {
  return <Posts posts={fakerPosts} />;
};
