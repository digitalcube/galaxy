import React, { FC } from 'react';
import { Container } from '@galaxy/core';
import { Posts, Post } from '@galaxy/views';

export type BlogProps = {
  nodes?: Array<Post>;
};

export const Blog: FC<BlogProps> = ({ nodes }) => {
  return (
    <>
      <Container size="4" sx={{ py: 7, px: `5%` }}>
        <Posts variant="blog" columns={[1, null, 2, null, 3]} nodes={nodes} />
      </Container>
    </>
  );
};
