import React, { FC } from 'react';
import { Container } from '@digitalcube/galaxy-core';
import { PageHeader, Post, Posts } from '@digitalcube/galaxy-views';

export type ShowcaseProps = {
  title?: string;
  subtitle?: string;
  nodes: Array<Post>;
};

export const Showcase: FC<ShowcaseProps> = ({ title, subtitle, nodes }) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <Container
        as="section"
        size="4"
        sx={{
          px: '5%',
        }}
      >
        <Posts
          variant="blog"
          columns={[1, null, null, null, 2]}
          sx={{ img: { alignSelf: 'flex-start' } }}
          nodes={nodes}
        />
      </Container>
    </>
  );
};
