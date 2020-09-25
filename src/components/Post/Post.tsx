import React, { FC, ReactNode } from 'react';
import { Text, Card, Heading, Link, Content, PostMeta } from '../index';

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

export const Post: FC<Post> = ({
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
      <Content
        sx={{
          '& > :not(:first-child)': {
            mt: 1,
            mb: 0,
          },
        }}
      >
        <Heading as="p">{category}</Heading>
        <Link href={href}>
          <Heading as="h2" size="4">
            <b>{title}</b>
          </Heading>
        </Link>
        <Heading as="h3" size="2">
          {subtitle}
        </Heading>
        <Text>{excerpt}</Text>
        <PostMeta author={author} date={date} />
      </Content>
    </Card>
  );
};
