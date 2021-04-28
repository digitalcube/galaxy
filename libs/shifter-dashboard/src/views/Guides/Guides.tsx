import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Post, PostProps } from '@galaxy/core';

export const Guides: FC<Guides> = ({ guides }) => {
  if (!guides) return null;
  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{guides.map((guide, i) => {
    return (
      <Post
        key={i}
        {...guide}
      />
    );
  })}</Section>
    </Section>
  );
};

export type Guides = {
  guides?: PostProps[];
};