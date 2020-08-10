import React from 'react';
import { Card } from './../Card/index';
import { Date } from './../Date';

export type Post = {
  content?: {
    title?: string;
  };
};

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
  },
}: Post) => {
  const { title } = content;
  return (
    <Card
      content={{
        header: {
          title: title,
        },
      }}
    />
  );
};
