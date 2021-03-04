import React, { FC } from 'react';
import { Section } from '@galaxy/core';

type Image = {
  img?: string;
  alt?: string;
  variant?: string;
  imgDefault?: string;
  className?: string;
  caption?: string;
};

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
  img = img === '' ? imgDefault : img;
  return (
    <Section as="figure">
      <img className={className} src={img} alt={alt} />
      <Caption caption={caption} />
    </Section>
  );
};
