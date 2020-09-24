import React, { FC } from 'react';
import { Post, Grid } from '../index';

export type Posts = {
  variant?: string;
  nodes?: any;
  columns?: any;
  node?: Post;
};

export const Posts: FC<Posts> = ({ nodes, columns, variant }: Posts) => {
  if (!nodes) return null;

  const items = nodes.map((node: Post) => {
    return <Post {...node} variant={variant} />;
  });

  return <Grid columns={columns}>{items}</Grid>;
};

Posts.defaultProps = {
  variant: 'primary',
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
