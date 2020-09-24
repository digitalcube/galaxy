import React, { FC } from 'react';
import { Date } from '../Date';
import { Box, Text } from '../index';

type PostMeta = {
  author?: string;
  date?: string;
};

export const PostMeta: FC<PostMeta> = ({ author, date }: PostMeta) => {
  if (!author) return null;
  return (
    <Box
      sx={{
        display: 'flex',
        color: 'secondary',
        mt: 3,
        '& > :not(:first-child)': {
          ml: 1,
        },
      }}
    >
      <Text>{author}</Text>
      <span>|</span>
      <Text>
        <Date>{date}</Date>
      </Text>
    </Box>
  );
};
