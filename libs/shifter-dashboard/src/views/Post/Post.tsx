import React, { ReactNode, FC } from 'react';
import { Section, css } from '@galaxy/core';
import { PostHeader } from './PostHeader';
import { PostFooter } from './PostFooter';
import { PostMain } from './PostMain';
import { postTheme } from './Post.galaxy';
const { post } = postTheme;

export const Post: FC<PostProps> = ({
  children,
  className,
  description,
  footer,
  main,
  mainClassName,
  title,
  variant,
  variants,
  //url,
}) => {
  const postCss = css({
    variant: `${variant}`,
    variants: variants,
  });

  return (
    <Section className={`${postCss} ${className}`}>
      {title ? <PostHeader title={title} description={description} /> : null}
      {main ? <PostMain className={`${mainClassName}`} main={main} /> : null}
      {children}
      <PostFooter footer={footer} />
    </Section>
  );
};

export type PostProps = {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  main?: ReactNode;
  mainClassName?: string;
  title?: string;
  description?: string;
  variant?: string;
  variants?: typeof post;
  //url?: string;
};

Post.defaultProps = {
  variants: post,
};
