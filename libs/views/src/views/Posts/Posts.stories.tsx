import React from 'react';

import { Posts, PostsProps } from './Posts';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Posts,
  title: `Galaxy/Views/Posts`,
};
const props: PostsProps = {
  nodes: [
    {
      title: `Duis Adipisicing`,
      href: `#!`,
    },
    {
      title: `Consequat`,
      href: `#!`,
    },
    {
      title: `Et Tempor`,
      href: `#!`,
    },
    {
      title: `Cupidatat`,
      href: `#!`,
    },
  ],
};

export const Default = () => {
  return <Posts {...props} />;
};
