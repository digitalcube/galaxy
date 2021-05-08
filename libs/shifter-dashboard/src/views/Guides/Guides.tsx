import React, { FC } from 'react';
import { Section, PostProps, PostList } from '@galaxy/core';

export const Guides: FC<Guides> = ({ guides }) => {
  if (!guides) return null;
  return (
    <Section className="space-y-8">
      <PostList className="grid grid-cols-1" posts={[guides[0]]} />
      <PostList
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        posts={guides.splice(0, 1)}
      />
    </Section>
  );
};

export type Guides = {
  guides?: PostProps[];
};
