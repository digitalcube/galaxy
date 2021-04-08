import React, { FC } from 'react';
import { Section, Heading } from '@galaxy/core';
import { PostProps } from './Post';

export const PostHeader: FC<PostProps> = ({ title, description }) => {
  if (!title) return null;
  return (
    <Section className="space-y-4 px-3 py-4 w-4/6">
      <PostTitle title={title} />
      <PostDescription description={description} />
    </Section>
  );
};

export const PostDescription: FC<PostProps> = ({ description }) => {
  if (!description) return null;
  return <Heading fontSize={3} text={description} />;
};

export const PostTitle: FC<PostProps> = ({ title }) => {
  if (!title) return null;
  return <Heading fontSize={6} fontWeight="strong" text={title} />;
};
