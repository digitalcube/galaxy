import React, { FC } from 'react';
import { Post, Section, Heading } from '@galaxy/core';

export const PostHeader: FC<Post> = ({ title, description }: Post) => {
  if (!title) return null;
  return (
    <Section className="space-y-4 px-3 py-4 w-4/6">
      <PostTitle title={title} />
      <PostDescription description={description} />
    </Section>
  );
};

export const PostDescription: FC<Post> = ({ description }: Post) => {
  if (!description) return null;
  return <Heading fontSize={3} text={description} />;
};

export const PostTitle: FC<Post> = ({ title }: Post) => {
  if (!title) return null;
  return <Heading fontSize={6} fontWeight="strong" text={title} />;
};
