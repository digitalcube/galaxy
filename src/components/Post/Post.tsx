import React from 'react';
import { Date } from '../Date';
import { Content, Text, Card, Heading } from '../index';

export type Post = {
  align?: string;
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
    category?: string;
    author?: string;
    date?: string;
    img?: React.ReactNode;
  };
  footer?: React.ReactChild;
};

export const Post: React.FC<Post> = ({
  align = ``,
  footer = ``,
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
  const { title, subtitle, excerpt, category, author, date, img } = content;
  return (
    <Card
      align={align}
      content={{
        image: {
          img: img,
        },
        footer: footer,
      }}
    >
      <Content>
        <Heading tag="p">{category}</Heading>
        <Heading tag="h2">{title}</Heading>
        <Heading tag="h3">{subtitle}</Heading>
        <Text>{excerpt}</Text>
        {author}
        <Date>{date}</Date>
      </Content>
    </Card>
  );
};
