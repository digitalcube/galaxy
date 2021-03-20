import React, { FC } from 'react';
import { PostTitle } from '@galaxy/shifter-dashboard';
import { Card, css } from '@galaxy/core';
import { postTheme } from './Post.galaxy';
const { post } = postTheme;

export const Post: FC<Post> = ({ name, post }: Post) => {
  const postCss = css({ variants: post });
  return (
    <Card
      variant="primary"
      className={`${postCss}`}
      mainClassName="flex flex-grow flex-row justify-between space-x-4"
      main={<PostTitle name={name} className="flex-grow" />}
    />
  );
};

export type Post = {
  img?: string;
  name: string;
  post?: string;
  url: string;
  variant?: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  variants: typeof post;
};

Post.defaultProps = {
  name: 'name',
  url: 'url',
  post: 'post',
  variant: 'primary',
  img: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  progress: 1,
  variants: post,
};
