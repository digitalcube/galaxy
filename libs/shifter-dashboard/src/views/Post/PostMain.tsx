import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';

export const PostMain: FC<Post> = ({ main, className }: Post) => {
  if (!main) return null;
  return <Section className={`px-3 pb-4 ${className}`}>{main}</Section>;
};
