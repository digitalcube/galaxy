import React from 'react';
import { Section, Post, PostProps } from '@galaxy/core';

/* eslint-disable-next-line */
export interface PostListProps {
  posts?: PostProps[];
  schema?: string;
  className?: string;
}

export function PostList(props: PostListProps) {
  const { posts, className } = props;
  let { schema } = props;

  if (!posts) return null;
  if (schema === 'ProductCollection') schema = 'IndividualProduct';
  if (schema === 'ColorPalette') schema = 'ColorSwatch';

  const allPostList = posts.map((post, i) => {
    return <Post schema={schema} key={i} {...post} />;
  });

  if (schema === 'IndividualProduct') {
    return (
      <Section
        className={`grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ${className}`}
      >
        {allPostList}
      </Section>
    );
  }

  return <Section className={`${className}`}>{allPostList}</Section>;
}

export default PostList;

PostList.defaultProps = {
  posts: [],
};
