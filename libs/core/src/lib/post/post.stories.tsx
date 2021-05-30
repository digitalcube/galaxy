import React from 'react';
import { Post, PostProps } from './post';

export default {
  component: Post,
  title: 'Post',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: PostProps = {};

  return <Post />;
};
