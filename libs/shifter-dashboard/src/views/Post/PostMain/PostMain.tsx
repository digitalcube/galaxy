import React, { FC, ReactNode } from 'react';
import {  Section, css } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';
import { postMainTheme } from './PostMain.galaxy';
const { postMain } = postMainTheme;

export const PostMain: FC<Post> = ({ main, className, variants }: Post) => {
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
  variants: postMain,
};
