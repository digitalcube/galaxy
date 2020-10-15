import React, { FC } from 'react';
import { Date } from '../../components/Date';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';

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
        justifyContent: 'center',
        color: 'secondary',
        mt: 3,
        '& > :not(:first-child)': {
          ml: 1,
        },
      }}
    >
      <Text>
        <b>{author}</b>
      </Text>
      <span>|</span>
      <Text>
        <Date>{date}</Date>
      </Text>
    </Box>
  );
};
