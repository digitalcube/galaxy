import React, { FC } from 'react';
import { Grid } from '@galaxy/core';
import { Post } from '../Post';

export type PostsProps = {
  variant?: string;
  nodes?: any;
  columns?: any;
  node?: Post;
  sx?: object;
};

export const Posts: FC<PostsProps> = ({ nodes, columns = [2, null, null, null, 4], variant = 'primary', sx }) => {
  if (!nodes) return null;

  const items = nodes.map((node: Post, i: number) => {
    return <Post key={i} {...node} variant={variant} />;
  });

  return (
    <Grid sx={{ ...sx }} columns={columns}>
      {items}
    </Grid>
  );
};
