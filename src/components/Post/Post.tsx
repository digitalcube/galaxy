import React from 'react';
import { Card } from './../Card/index';
import { Date } from './../Date';

export type Post = {
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
  };
};

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
  },
}: Post) => {
  const { title, subtitle, excerpt } = content;
  return (
    <Card
      content={{
        header: {
          title: title,
          subtitle: subtitle,
          excerpt: excerpt,
        },
      }}
    />
  );
};
