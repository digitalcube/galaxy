import React, { FC } from 'react';
import { PostTitle } from '@galaxy/shifter-dashboard';
import { Card, css, Button, Heading } from '@galaxy/core';
import { postTheme } from './Post.galaxy';
const { post } = postTheme;

export const Post: FC<Post> = ({ title, variants, description }: Post) => {
  const postCss = css({ variants: variants });
  return (
    <Card
      variant="primary"
      className={`${postCss}`}
      title={title}
      description={description}
      main={<Button label="Read this Article" variant="outlinePrimary" />}
    />
  );
};

export type Post = {
  description: string;
  img?: string;
  title: string;
  url: string;
  variant?: string;
  variants: typeof post;
};

Post.defaultProps = {
  description: 'description',
  title: 'title',
  url: 'url',
  variant: 'primary',
  variants: post,
};
