import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Post, PostProps } from '@galaxy/core';

export const PostList: FC<PostList> = ({ posts, schema }) => {
  if (!posts) return null;
  if (schema === 'ProductCollection') schema = 'IndividualProduct';

  const allPostList = posts.map((post, i) => {
    return <Post schema={schema} key={i} {...post} />;
  });

  if (schema === 'IndividualProduct') {
    return (
      <Section className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {allPostList}
      </Section>
    );
  }

  return (
    <Section className="space-y-10 px-8">
      <Section className="space-y-4">{allPostList}</Section>
    </Section>
  );
};

export type PostList = {
  posts?: PostProps[];
  schema?: string;
};
