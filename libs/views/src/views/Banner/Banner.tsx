import React from 'react';
import { Section } from '@galaxy/core';

export type Banner = {};

export const Banner = () => {
  return (
    <Section className="flex items-center h-[210px] overflow-hidden">
      <img
        src="//placehold.it/1224x210"
        alt=""
        className="object-cover pointer-events-none"
      />
    </Section>
  );
};
