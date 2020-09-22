import React, { FC, ReactNode } from 'react';
import { Post, Grid } from '../index';

export type Posts = {
  nodes?: object;
  columns?: Array<string | number | null>;
};

export const Posts: FC<Posts> = ({ nodes, columns }: Posts) => {
  if (!nodes) return null;
  const items = nodes.map(node => {
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
