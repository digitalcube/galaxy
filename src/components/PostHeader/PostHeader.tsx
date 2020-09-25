import React, { FC } from 'react';
import { Heading, Container, PostMeta } from '../index';

export type PostHeader = {
  title?: string;
  category?: string;
  author?: string;
  date?: string;
  categories?: object;
};

export const PostHeader: FC<PostHeader> = ({
  title,
  category,
  author,
  date,
}: PostHeader) => {
  return (
    <Container
      size="2"
      sx={{
        py: 7,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Heading
        as="h4"
        size="4"
        sx={{
          color: 'secondary',
          lineHeight: null,
        }}
      >
        {category}
      </Heading>
      <Heading as="h1" size="7">
        <b>{title}</b>
      </Heading>
      <PostMeta author={author} date={date} />
    </Container>
  );
};
