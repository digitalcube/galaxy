import React, { FC } from 'react';
import { Section, fakerPosts } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';

export const Posts: FC<Posts> = ({ posts }) => {
  console.log(posts);
  if (!posts) return null;
  const allPosts = posts.map((site, i) => {
    const { title, url, img } = site;
    return (
      <Post
        key={i}
        name={`${name}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        team={team}
        progress={progress}
      />
    );
  });

  return (
    <Section className="space-y-10 px-8">
      <Section className="space-y-4">{allPosts}</Section>
    </Section>
  );
};

export type Posts = {
  posts?: Post[];
};

Posts.defaultProps = {
  posts: fakerPosts,
};
