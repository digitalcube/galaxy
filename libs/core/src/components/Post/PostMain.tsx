import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { PostProps } from './Post';

export const PostMain: FC<PostProps> = ({ main, className }) => {
  if (!main) return null;
  return <Section className={`px-3 pb-4 ${className}`}>{main}</Section>;
};
