import React from 'react';
import { Card } from '../Card';
import { Heading } from '../Heading';
import { Date } from '../Date';

export type Post = {
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
    category?: string;
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
    category: ``,
    author: ``,
    date: ``,
    img: null,
  },
}: Post) => {
  console.log(content);
  const { title, subtitle, excerpt, category, author, date, img } = content;
  return (
    <Card
      content={{
        image: {
          img: img,
        },
      }}
    >
      <Heading tag="p">{category}</Heading>
      <Heading tag="h2">{title}</Heading>
      <Heading tag="h3">{subtitle}</Heading>
      <Heading tag="p">{excerpt}</Heading>
      {author}
      <Date>{date}</Date>
    </Card>
  );
};
