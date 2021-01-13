import React from 'react';
import { Showcase, ShowcaseProps } from './Showcase';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Showcase,
  title: `Shifter/Templates/Showcase`,
};

const props: ShowcaseProps = {
  title: `Velit a non`,
  subtitle: `Est cupidatat sunt est sint reprehenderit eiusmod exercitation in tempor.`,
  nodes: [
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image-1.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image-2.png`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image-1.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image-2.png`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image-1.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image-2.png`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image-1.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image-2.png`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image-1.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image-2.png`,
    },
  ],
};

export const Default = () => <Showcase {...props} />;
