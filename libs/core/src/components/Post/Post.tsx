import React, { ReactNode, FC } from 'react';
import { Section, Heading, css } from '@galaxy/core';
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
  schema,
  image,
}) => {
  const postCss = css({
    variant: `${variant}`,
    variants: variants,
  });

  if (schema === 'IndividualProduct') {
    return (
      <Section key={title} className="relative">
        <div className="block w-full aspect-w-3 aspect-h-4 overflow-hidden">
          <img
            src={image}
            alt=""
            className="object-cover pointer-events-none"
          />
        </div>
        <Heading fontSize={4} fontWeight="strong" text={title} className="mt-3" />
      </Section>
    );
  }

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
  image?: string;
  schema?: string;
};

Post.defaultProps = {
  variants: post,
};
