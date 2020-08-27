import React from 'react';
import { Date } from '../Date';
import { Content, Text, Card, Heading } from '../';

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
    href?: string;
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
        img: img,
        footer: footer,
      }}
    >
      <Content>
        <Heading as="p">{category}</Heading>
        <Heading as="h2">{title}</Heading>
        <Heading as="h3">{subtitle}</Heading>
        <Text>{excerpt}</Text>
        {author}
        <Date>{date}</Date>
      </Content>
    </Card>
  );
};
