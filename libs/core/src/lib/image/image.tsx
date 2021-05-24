import React from 'react';
import { Section } from '@galaxy/core';

/* eslint-disable-next-line */
export interface ImageProps {
  img?: string;
  alt?: string;
  imgDefault?: string;
  className?: string;
  caption?: string;
}

function Caption(props: ImageProps) {
  const { caption } = props;
  if (!caption) return null;
  return <Section as="figcaption">{caption}</Section>;
}

export function Image(props: ImageProps) {
  const { img, imgDefault, alt, className, caption } = props;
  return (
    <Section as="figure">
      <img className={className} src={img ? img : imgDefault} alt={alt} />
      <Caption caption={caption} />
    </Section>
  );
}

export default Image;
