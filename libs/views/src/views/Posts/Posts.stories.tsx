import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Posts, PostsProps } from './Posts';

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

}
export default {
  component: Posts,
  title: `Galaxy/Views/Posts`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Posts {...props} />;
};
