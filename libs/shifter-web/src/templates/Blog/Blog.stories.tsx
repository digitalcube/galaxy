import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Blog, BlogProps } from './Blog';

export default {
  component: Blog,
  title: `Shifter/Templates/Blog`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
const props: BlogProps =  {
  nodes: [
    {
      title: `Magna fugiat ullamco ad in in est`,
      category: `Nulla fugiat`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Occaecat sint veniam nisi magna ipsum pariatur`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Nostrud consequat minim nulla quis nisi sit commodo culpa labore aute`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Adipisicing et commodo eiusmod occaecat do deserunt`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Mollit ullamco reprehenderit ad magna nostrud duis velit reprehenderit nostrud laborum`,
      category: `Nulla fugiat`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Incididunt est ut et aliquip qui et aliqua`,
      href: `https://example.com`,
      category: `Nulla fugiat`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      img: `post-featured-image.png`,
    },
    {
      title: `Incididunt in sunt ea nostrud ad sint sint nostrud laborum velit eiusmod`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Nisi ex`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Aute ex dolor laboris fugiat commodo consectetur pariatur`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Minim magna laboris in irure`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Mollit est tempor`,
      href: `https://example.com`,
      category: `Nulla fugiat`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      img: `post-featured-image.png`,
    },
    {
      title: `Eu esse elit excepteur incididunt in sit do veniam reprehenderit nulla ea`,
      category: `Excepteur`,
      author: `Nulla Cupidatat`,
      date: `Jan 1, 2049`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
  ],
};

export const Default = () => <Blog {...props} />;
