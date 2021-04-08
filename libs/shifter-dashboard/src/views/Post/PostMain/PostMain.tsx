import React, { FC, ReactNode } from 'react';
import {  Section, css } from '@galaxy/core';
import { postMainTheme } from './PostMain.galaxy';
import { PostProps } from '../Post';
const { postMain } = postMainTheme;

export const PostMain: FC<PostProps> = ({ main, className, variants }) => {
  if (!main) return null;
  const postMainCss = css({ variants: variants });
  return <Section className={`${postMainCss} ${className}`}>{main}</Section>;
};

export type PostMain = {
  main?: ReactNode;
  className?: string;
  variants?: typeof postMain;
};

PostMain.defaultProps = {
  variants: postMain as any,
};
