import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const PostTitle: FC<PostTitle> = ({ name, className }: PostTitle) => {
  return (
    <Heading fontWeight="strong" variant="primary" fontSize={6} text={name}  className={`${className}`} />
  );
};

export type PostTitle = {
  name: string;
  className: string;
};
