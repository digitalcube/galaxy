import React, { FC } from 'react';
import { Section, fakerGuides } from '@galaxy/core';
import { Guide } from '@galaxy/shifter-dashboard';

export const Guides: FC<Guides> = ({ guides }) => {
  console.log(guides);
  if (!guides) return null;
  const allGuides = guides.map((guide, i) => {
    return <Guide key={i} {...guide} />;
  });

  return (
    <Section className="space-y-10 px-8">
      <Section className="space-y-4">{allGuides}</Section>
    </Section>
  );
};

export type Guides = {
  guides?: Guide[];
};

Guides.defaultProps = {
  guides: fakerGuides,
};
