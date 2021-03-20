import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const PostTitle: FC<PostTitle> = ({ title, className }: PostTitle) => {
  return (
    <Heading fontWeight="strong" variant="primary" fontSize={6} text={title}  className={`${className}`} />
  );
};

export type PostTitle = {
  title: string;
  className: string;
};
