import React from 'react';
import { Date } from '../Date';
import { Content, Text, Card, Heading } from '../';

export type Post = {
  align?: `left` | `center` | `right`;
  title?: string;
  subtitle?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  date?: string;
  img?: React.ReactNode;
  href?: string;
  footer?: React.ReactChild;
};

export const Post: React.FC<Post> = ({
  align,
  title,
  subtitle,
  excerpt,
  category,
  author,
  date,
  img,
  href,
  footer,
}: Post) => {
  return (
    <Card align={align} img={img} title={title} footer={footer}>
      <Content>
        <Heading as="p">{category}</Heading>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Heading as="h3" size="xs">
          {subtitle}
        </Heading>
        <Text>{excerpt}</Text>
        {author}
        <Date>{date}</Date>
      </Content>
    </Card>
  );
};
