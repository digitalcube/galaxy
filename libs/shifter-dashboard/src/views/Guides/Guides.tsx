import React, { FC } from 'react';
import { Section, fakerGuides } from '@galaxy/core';
import { Post } from '@galaxy/shifter-dashboard';

export const Guides: FC<Guides> = ({ guides }) => {
  console.log(guides);
  if (!guides) return null;
  const allGuides = guides.map((guide, i) => {
    const { title, url, img, description } = guide;
    return (
      <Post
        key={i}
        description={`${description}`}
        title={`${title}`}
        url={`${url}`}
        img={img}
      />
    );
  });

  return (
    <Section className="space-y-10 px-8">
      <Section className="space-y-4">{allGuides}</Section>
    </Section>
  );
};

export type Guides = {
  guides?: Post[];
};

Guides.defaultProps = {
  guides: fakerGuides
}
