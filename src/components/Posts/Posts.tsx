import React, { FC } from 'react';
import { GridProps } from 'theme-ui';
import { Post, Grid } from '../index';

export type Posts = {
  nodes?: any;
  columns?: any;
  node?: Post;
};

export const Posts: FC<Posts> = ({ nodes, columns }: Posts) => {
  if (!nodes) return null;

  const items = nodes.map((node: Post) => {
    return <Post {...node} />;
  });

  return <Grid columns={columns}>{items}</Grid>;
};

Posts.defaultProps = {
  columns: [2, null, null, null, 4],
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
