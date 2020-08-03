import React from 'react';
import { Card } from '../Card';
import { Heading } from '../Heading';
import { publishedDate } from '../../lib/utils';

export type Post = {
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
    author?: string;
    date?: string;
    img?: React.ReactNode;
  };
};

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
    date: ``,
    author: ``,
    img: null,
  },
}: Post) => {
  const { title, img, date } = content;
  return (
    <Card
      content={{
        image: {
          img: img,
        },
      }}
    >
      <Heading>{title}</Heading>
      {publishedDate({ date })}
    </Card>
  );
};
