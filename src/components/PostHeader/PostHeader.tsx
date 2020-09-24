import React, { FC } from 'react';
import { Box, Heading, Text } from '../index';

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
    <Box
      sx={{
        py: 7,
        textAlign: 'center',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'secondary',
          mt: 3,
          '& > :not(:first-child)': {
            ml: 1,
          },
        }}
      >
        <Text>{author}</Text>
        <span>|</span>
        <Text>{date}</Text>
      </Box>
    </Box>
  );
};
