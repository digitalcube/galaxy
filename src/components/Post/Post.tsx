import React, { ReactNode } from 'react';
import { Date } from '../Date';
import { Text, Card, Heading, Link } from '../index';

export type Post = {
  align?: `left` | `center` | `right`;
  author?: string;
  category?: string;
  date?: string;
  excerpt?: string;
  footer?: ReactNode;
  href?: string;
  img?: string;
  node?: any;
  subtitle?: string;
  title?: string;
  variant?: string;
  sx?: object;
};

export const Post: React.FC<Post> = ({
  align,
  author,
  category,
  date,
  excerpt,
  footer,
  href,
  img,
  subtitle,
  title,
  sx,
  variant,
}: Post) => {
  return (
    <Card
      sx={{ ...sx }}
      variant={variant}
      align={align}
      img={img}
      footer={footer}
    >
      <Heading as="p">{category}</Heading>
      <Link href={href}>
        <Heading as="h2" size="4">
          {title}
        </Heading>
      </Link>
      <Heading as="h3" size="2">
        {subtitle}
      </Heading>
      <Text>{excerpt}</Text>
      {author}
      <Date>{date}</Date>
    </Card>
  );
};
