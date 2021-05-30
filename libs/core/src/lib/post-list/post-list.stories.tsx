import React from 'react';
import { PostList, PostListProps } from '@galaxy/core';
import { fakerPostList } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: PostList,
  title: `Galaxy/Components/Post List`,
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: PostListProps = {};

  return <PostList posts={fakerPostList} />;
};
