import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';
import { PostProps } from '../Post/Post';

export const Posts: FC<Posts> = ({ posts }) => {
  if (!posts) return null;
  const allPosts = posts.map((site, i) => {
    return <Post key={i} {...site} />;
  });

  return (
    <Section className="space-y-10 px-8">
      <Section className="space-y-4">{allPosts}</Section>
    </Section>
  );
};

export type Posts = {
  posts?: PostProps[];
};

/*
Posts.defaultProps = {
  posts: fakerPosts,
};
*/
