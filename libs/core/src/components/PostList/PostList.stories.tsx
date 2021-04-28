import React from 'react';
import { PostList } from '@galaxy/core';
import { fakerPostList } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: PostList,
  title: `Galaxy/Components/Post List`,
};

export const Default = () => {
  return <PostList schema="ProductCollection" posts={fakerPostList} />;
};