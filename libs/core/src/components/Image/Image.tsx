import React, { FC } from 'react';
import { Section } from '@galaxy/core';

const Caption: FC<Image> = ({ caption }: Image) => {
  if (!caption) return null;
  return <Section as="figcaption">{caption}</Section>;
};

export const Image: FC<Image> = ({
  img,
  imgDefault,
  alt,
  className,
  caption,
}: Image) => {
  console.log(img)
  img = img === undefined ? imgDefault : img;
  return (
    <Section as="figure">
      <img className={className} src={img} alt={alt} />
      <Caption caption={caption} />
    </Section>
  );
};

export type Image = {
  img?: string;
  alt?: string;
  imgDefault?: string;
  className?: string;
  caption?: string;
};