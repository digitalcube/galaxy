import React from 'react';
import { Section } from '@galaxy/core';

export type BannerProps = { image: string };

export const Banner = ({ image }: BannerProps) => {
  return (
    <Section className="flex items-center h-[175px] overflow-hidden">
      <img
        src={image}
        alt=""
        className="object-cover pointer-events-none w-full"
      />
    </Section>
  );
};

Banner.defaultProps = {
  image: './banner.png',
};
