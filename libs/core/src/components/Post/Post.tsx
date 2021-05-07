import React, { ReactNode, FC } from 'react';
import { Section, Heading, Link, Image, Button, css } from '@galaxy/core';
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
  price,
  name,
  url,
}) => {
  const postCss = css({
    variant: `${variant}`,
    variants: variants,
  });

  if (schema === 'IndividualProduct') {
    return (
      <Section key={name} className="relative">
        <div className="block w-full aspect-w-3 aspect-h-4 overflow-hidden">
          <img
            src={image}
            alt=""
            className="object-cover pointer-events-none"
          />
        </div>
        <Heading
          fontSize={4}
          fontWeight="strong"
          text={name}
          className="mt-3"
        />
        <Heading fontSize={4} text={price} className="mt-1 mb-2" />
        <Button variant="link" className="bg-black px-3 py-2 text-white" label="Buy Now" />
      </Section>
    );
  }

  if (schema === 'Brand') {
    return (
      <Link
        className={`flex flex-row items-center space-x-4 select-none ${className}`}
        href="/"
      >
        <Image className="h-8 w-auto" img={`${image}`} />
        <Heading fontSize={7} text="Swag Store" />
      </Link>
    );
  }

  if (schema === 'Guide') {
    return (
      <Section className={`${postCss} relative overflow-hidden ${className}`}>
        <div className="block absolute w-full overflow-hidden">
          <img
            src={image}
            alt=""
            className="object-cover pointer-events-none w-full"
          />
        </div>
        <div className="z-10 relative">
          {title ? (
            <PostHeader title={title} description={description} />
          ) : null}
          {url ? (
            <PostMain
              className={`px-3 ${mainClassName}`}
              main={
                <Button variant="outlinePrimary" label={title} href={url} />
              }
            />
          ) : null}
        </div>
      </Section>
    );
  }

  return (
    <Section className={`${postCss} ${className}`}>
      {title ? <PostHeader title={title} description={description} /> : null}
      {main ? <PostMain className={`${mainClassName}`} main={main} /> : null}
      {children}
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
  name?: string;
  description?: string;
  variants?: any;
  variant?: string;
  image?: string;
  price?: string;
  schema?: string;
  url?: string;
};

Post.defaultProps = {
  variants: post,
};
